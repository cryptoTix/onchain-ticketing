"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { Maybe } from "../../utils/maybe";
import { OperatorVault, Asset } from "../../types/types";
import { TokenAmountInput } from "./TokenAmountInput";
import { useAccount, useSwitchChain } from "wagmi";
import {
  computeMaxDeposit,
  depositAsset,
  depositKarakWETH,
} from "../../actions/deposit";
import { FixedPointNumber } from "../../utils/fixedPoint";
import { Logger } from "../../utils/logger";
import { toast } from "react-hot-toast";
import { ToastNotification } from "../Toast/ToastNotification";
import { Spinner } from "../Shared/shared";
import {
  checkZeroAmount,
  emptyAsset,
  emptyOperator,
  fetchKarakEthBalance,
  fetchTokenBalance,
  filterHiddenVaultsOnDeposit,
  getTokenImg,
} from "../../utils/helpers";
import { Chain, zeroAddress } from "viem";
import { arbMainnet, config, karak } from "../../contexts/Web3Provider";
import {
  BLOCKED_ADDRESSES,
  chainImageMap,
  KARAK_WETH_ADDRESS,
  operatorImageMap,
  WETH_MAX_MARGIN,
} from "../../constants/constants";
import { debounce } from "lodash";
import { useBlockedUser } from "../../contexts/BlockedUser";
import { Menu, Switch } from "@headlessui/react";
import operatorFallbackImg from "../../assets/operator.svg";
import Image from "next/image";
import { DarkChevronDownIcon } from "../Shared/shared";
import { useChainAssets } from "../../contexts/ChainAssets";
import { ToolTip } from "../ToolTip/ToolTip";

export const Deposit: React.FC = () => {
  const [amount, setAmount] = useState<Maybe<string>>(Maybe.none());
  const [maxDepositAmount, setMaxDepositAmount] = useState<FixedPointNumber>(
    FixedPointNumber.zero
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [, setBalanceLoading] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<number>(0);
  const [selectedChain, setSelectedChain] = useState<Chain>(arbMainnet);
  const [selectedAsset, setSelectedAsset] = useState<Asset>(emptyAsset());
  const [loadingAsset, setLoadingAsset] = useState<boolean>(true);
  const [loadingOperator, setLoadingOperator] = useState<boolean>(true);
  const [selectedOperator, setSelectedOperator] = useState<OperatorVault>(emptyOperator());
  const [enableWrapEth, setEnableWrapEth] = useState<boolean>(false);
  const { address, chain } = useAccount();
  const { switchChainAsync } = useSwitchChain();
  const { isBlocked } = useBlockedUser();
  const chainAssets = useChainAssets();

  const selectedChainAssets = useMemo(
    () =>
      chainAssets
        .flatMap((d) =>
          Maybe.from(
            d.chainAssets[selectedChain.id]
          )
        ).getOrElse(() => []),
      [chainAssets, selectedChain]
    );

  useEffect(() => {
    setLoadingAsset(true);
    if (selectedChainAssets.length > 0 && selectedChainAssets[0]) {
      setSelectedAsset(selectedChainAssets[0]);
      setLoadingAsset(false);
    } else {
      setSelectedAsset(emptyAsset());
      setLoadingAsset(true);
    }
  }, [selectedChainAssets]);

  useEffect(() => {
    setLoadingOperator(true);
    if (selectedAsset.operatorVaults.length > 0 && selectedAsset.operatorVaults[0]) {
      setSelectedOperator(selectedAsset.operatorVaults[0]);
      setLoadingOperator(false);
    } else {
      setSelectedOperator(emptyOperator());
      setLoadingOperator(true);
    }
  }, [selectedAsset]);

  console.log(selectedAsset.symbol, selectedAsset.chain.id, selectedOperator.name, selectedOperator.vaultAddress);

  useEffect(() => {
    const fetchBalance = async () => {
      if (!address || selectedAsset.address === zeroAddress) return;
      try {
        const tokenBalance = await fetchTokenBalance(selectedAsset, address);
        Logger.info("Fetched token balance:", tokenBalance);

        if (
          selectedAsset.chain.id === karak.id &&
          selectedAsset.address === KARAK_WETH_ADDRESS
        ) {
          const ethBalance = await fetchKarakEthBalance(selectedAsset, address);
          Logger.info("Fetched karak eth balance:", ethBalance);

          if (tokenBalance === BigInt(0) && ethBalance === BigInt(0)) return;
          const maxDeposit = await computeMaxDeposit(
            selectedAsset,
            address,
            enableWrapEth ? tokenBalance + ethBalance : tokenBalance
          );

          Logger.info("Fetched karak max deposit:", maxDeposit);
          setMaxDepositAmount(
            FixedPointNumber.fromRaw(
              maxDeposit - WETH_MAX_MARGIN,
              selectedAsset.decimals
            )
          );
        } else {
          if (tokenBalance === BigInt(0)) return;
          const maxDeposit = await computeMaxDeposit(
            selectedAsset,
            address,
            tokenBalance
          );

          Logger.info("Fetched max deposit:", maxDeposit);
          setMaxDepositAmount(
            FixedPointNumber.fromRaw(maxDeposit, selectedAsset.decimals)
          );
        }
      } catch (e) {
        Logger.error("Error fetching user's wallet balance or max deposit:", e);
      }
    };

    setBalanceLoading(true); // set balance loading to true on mount since we have debouncer

    const fetchBalanceDebounced = debounce(async () => {
      try {
        await fetchBalance();
        setBalanceLoading(false);
      } catch (error) {
        Logger.error("Error performing fetch balance:", error);
        setBalanceLoading(false);
      }
    }, 1000); // Debounce with a delay of 1 second

    fetchBalanceDebounced();

    return () => {
      fetchBalanceDebounced.cancel();
    };
  }, [selectedAsset, address, refresh]);

  const deposit = useCallback(async (): Promise<void> => {
    if (!address || !chain || selectedAsset.address === zeroAddress || selectedOperator.vaultAddress === zeroAddress)
      return;
    try {
      setLoading(true);

      if (chain.id !== selectedAsset.chain.id) {
        await switchChainAsync({ chainId: selectedAsset.chain.id });
      }

      const fixedPointDepositAmount = FixedPointNumber.fromDecimal(
        amount.string(),
        selectedAsset.decimals
      );

      if (
        selectedAsset.chain.id === karak.id &&
        selectedAsset.address === KARAK_WETH_ADDRESS &&
        enableWrapEth
      ) { // Call depositKarakWETH only if user enabled wrap eth toggle
        await depositKarakWETH(fixedPointDepositAmount, selectedAsset, selectedOperator.vaultAddress, address);
      } else {
        await depositAsset(fixedPointDepositAmount, selectedAsset, selectedOperator.vaultAddress);
      }

      setLoading(false);
      setAmount(Maybe.none());
      setRefresh((prevRefresh) => prevRefresh + 1);
    } catch (error) {
      setLoading(false);
      Logger.error(`Error depositing ${selectedAsset.symbol}:`, error);
      toast.error(`Error depositing ${selectedAsset.symbol}`);
    }
  }, [address, chain, selectedAsset, amount, selectedOperator, switchChainAsync]);

  return (
    <div className="flex flex-col gap-6 pb-4">
      <div>
        <p className="text-light-black mb-1 text-sm">CHAIN</p>
        <Menu>
          <Menu.Button className="w-full border-0.2 border-primary-orange h-16 py-2 px-4 rounded-[0.25rem]">
            <div className="flex gap-2 items-center">
              <Image
                src={chainImageMap[selectedChain.id] ?? ""}
                alt={selectedChain.name.toLowerCase() ?? ""}
                className="size-6"
              />
              <p className="font-semibold text-base">
                {selectedChain.name}
              </p>
              <div className="ml-auto">
                <DarkChevronDownIcon />
              </div>
            </div>
          </Menu.Button>
          <div className="relative w-full">
            {config.chains.length > 1 && (
              <Menu.Items className="bg-white border-0.2 border-primary-orange mt-2 p-2 rounded-[0.25rem] absolute z-20 w-full shadow-lg">
                {config.chains.map((chain, index) => (
                  <Menu.Item key={index}>
                    <div
                      className="hover:bg-gray-100 hover:cursor-pointer rounded-[0.3rem]"
                      onClick={() => setSelectedChain(chain)}
                    >
                      <div className="flex gap-2 py-2 px-2">
                        <Image
                          src={chainImageMap[chain.id] ?? ""}
                          alt={chain.name.toLowerCase()}
                          className="size-6"
                        />
                        <p className="font-[500] text-base">
                          {chain.name}
                        </p>
                      </div>
                    </div>
                  </Menu.Item>
                ))}
              </Menu.Items>
            )}
          </div>
        </Menu>
      </div>
      <div>
        <p className="text-light-black mb-1 text-sm">ASSET</p>
        <Menu>
          <Menu.Button className="w-full border-0.2 border-primary-orange h-16 py-2 px-4 rounded-[0.25rem]">
            <div className="flex gap-2 items-center">
              {loadingAsset ? (
                <div className="animate-pulse flex space-x-4 w-full">
                  <div className="rounded-md bg-gray-300 h-8 w-full" />
                </div>
              ) : (
                <>
                  <Image
                    src={getTokenImg(selectedAsset.symbol)}
                    alt={selectedAsset.symbol}
                    className="size-6"
                  />
                  <p className="font-semibold text-base">
                    {selectedAsset.symbol}
                  </p>
                  <div className="ml-auto">
                    <DarkChevronDownIcon />
                  </div>
                </>
              )}
            </div>
          </Menu.Button>
          <div className="relative w-full">
            {selectedChainAssets.length > 1 && (
              <Menu.Items
                className="bg-white border-0.2 border-primary-orange mt-2 p-2 rounded-[0.25rem] absolute z-20 w-full shadow-lg max-h-[13.5rem] overflow-scroll"
              >
                {selectedChainAssets.map((chainAsset, index) => (
                  <Menu.Item key={index}>
                    <div
                      className="hover:bg-gray-100 hover:cursor-pointer rounded-[0.3rem]"
                      onClick={() => {
                        setSelectedAsset(chainAsset);
                        if (chainAsset.operatorVaults.length > 0 && chainAsset.operatorVaults[0]) {
                          setSelectedOperator(chainAsset.operatorVaults[0]);
                        } else {
                          setSelectedOperator(emptyOperator());
                        }
                      }}
                    >
                      <div className="flex gap-2 py-2 px-2">
                        <Image
                          src={getTokenImg(chainAsset.symbol)}
                          alt={chainAsset.symbol}
                          className="size-6"
                        />
                        <p className="font-[500] text-base">
                          {chainAsset.symbol}
                        </p>
                      </div>
                    </div>
                  </Menu.Item>
                ))}
              </Menu.Items>
            )}
          </div>
        </Menu>
      </div>
      <div>
        <p className="text-light-black mb-1 text-sm">OPERATOR</p>
        <Menu>
          <Menu.Button className="w-full border-0.2 border-primary-orange h-16 py-2 px-4 rounded-[0.25rem]">
            <div className="flex gap-2 items-center">
              {loadingOperator ? (
                <div className="animate-pulse flex space-x-4 w-full">
                  <div className="rounded-md bg-gray-300 h-8 w-full" />
                </div>
              ) : (
                <>
                  <Image
                    src={operatorImageMap[`${selectedOperator.operatorId}`] ?? operatorFallbackImg}
                    alt="operatorImg"
                    className="size-6"
                  />
                  <p className="font-semibold text-base">
                    {selectedChain.id === 1 && selectedOperator.name.includes("Chainnodes") ? "Chainnodes" : selectedOperator.name.includes("BwareLabs.com") ? "BwareLabs" : selectedOperator.name}
                  </p>
                  <div className="ml-auto">
                    <DarkChevronDownIcon />
                  </div>
                </>
              )}
            </div>
          </Menu.Button>
          <div className="relative w-full">
            {selectedAsset.operatorVaults.length > 1 && (
              <Menu.Items
                className="bg-white border-0.2 border-primary-orange mt-2 p-2 rounded-[0.25rem] absolute z-20 w-full shadow-lg max-h-[14rem] overflow-scroll"
              >
                {filterHiddenVaultsOnDeposit(selectedChain.id, selectedAsset.operatorVaults).map((operator, index) => (
                  <Menu.Item key={index}>
                    <div
                      className="hover:bg-gray-100 hover:cursor-pointer rounded-[0.3rem]"
                      onClick={() => setSelectedOperator(operator)}
                    >
                      <div className="flex gap-2 py-2 px-2">
                        <Image
                          src={operatorImageMap[`${operator.operatorId}`] ?? operatorFallbackImg}
                          alt="operatorImg"
                          className="size-6"
                        />
                        <p className="font-[500] text-base">
                          {selectedChain.id === 1 && operator.name.includes("Chainnodes") ? "Chainnodes" : operator.name.includes("BwareLabs.com") ? "BwareLabs" : operator.name}
                        </p>
                      </div>
                    </div>
                  </Menu.Item>
                ))}
              </Menu.Items>
            )}
          </div>
        </Menu>
      </div>
      <TokenAmountInput
        action="deposit"
        token={selectedAsset.symbol}
        amount={amount.string()}
        maxAmount={maxDepositAmount.toString()}
        onChange={(v) => setAmount(v.trim() ? Maybe.from(v) : Maybe.none())}
        loading={loadingAsset}
      />
      {selectedChain.id === karak.id && selectedAsset.symbol === "WETH" && (
        <>
          <div className="m-auto w-full">
            <a
              className="text-light-black font-nunito flex gap-2 hover:cursor-pointer hover:opacity-80 hover:underline items-center"
              href="https://k2swap.karak.network/#/swap"
              target="_blank"
            >
              If needed, you can wrap ETH here
              <svg
                className="h-5 w-5 text-light-black underline"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />{" "}
                <line x1="10" y1="14" x2="20" y2="4" />{" "}
                <polyline points="15 4 20 4 20 9" />
              </svg>
            </a>
          </div>
          <div className="m-auto w-full -mt-6">
            <a
              className="text-light-black font-nunito flex gap-2 hover:cursor-pointer hover:opacity-80 hover:underline items-center"
              href="https://karak.network/bridge"
              target="_blank"
            >
              If needed, you can bridge more ETH here
              <svg
                className="h-5 w-5 text-light-black underline"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />{" "}
                <line x1="10" y1="14" x2="20" y2="4" />{" "}
                <polyline points="15 4 20 4 20 9" />
              </svg>
            </a>
          </div>
        </>
      )}
      {selectedChain.id === karak.id && selectedAsset.symbol === "WETH" && (
        <div className="flex items-center gap-1">
          <p className="text-light-black">Auto-Wrap ETH</p>
          <ToolTip
            text="Enabling auto-wrap will automatically wrap your ETH during the deposit transaction and update your wallet balance to be WETH + ETH"
            dark
            long
          />
          <Switch
            checked={enableWrapEth}
            onChange={setEnableWrapEth}
            className={`${
              enableWrapEth ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full ml-auto`}
          >
            <span
              className={`${
                enableWrapEth ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
      )}
      <button
        className="bg-gradient-to-r from-orange-600 to-orange-300 hover:brightness-75 text-white py-5 px-4 rounded font-nunito text-xl font-bold w-full disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={
          checkZeroAmount(amount) ||
          Boolean(
            Number(amount.string()) > Number(maxDepositAmount.toString())
          ) ||
          isBlocked ||
          BLOCKED_ADDRESSES.includes(address ?? "") ||
          loading
        }
        onClick={deposit}
      >
        <div className="flex items-center justify-center gap-2">
          {isBlocked || BLOCKED_ADDRESSES.includes(address ?? "") ? (
            "NOT AVAILABLE IN YOUR REGION"
          ) : (
            <>
              {loading && <Spinner />}
              {loading ? "Depositing" : "Deposit"}
            </>
          )}
        </div>
      </button>
      <ToastNotification />
    </div>
  );
};
