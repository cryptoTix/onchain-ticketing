"use client";

import { useCallback, useMemo, useState } from "react";
import { useAccount, useSwitchChain } from "wagmi";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, ModalCloseIcon } from "../Shared/shared";
import { Dialog } from "@headlessui/react";
import { TokenAmountInput } from "../Orderbox/TokenAmountInput";
import { Maybe } from "../../utils/maybe";
import { toast } from "react-hot-toast";
import { FixedPointNumber } from "../../utils/fixedPoint";
import { UserPosition } from "../../types/types";
import { checkZeroAmount, decimalFormat, getTokenImg, mapRawAmountToUi } from "../../utils/helpers";
import { zeroAddress } from "viem";
import { mainnet } from "viem/chains";
import { finishRedeemAsset, startRedeemAsset } from "../../actions/withdraw";
import { Logger } from "../../utils/logger";
import { Spinner } from "../Shared/shared";

interface Props {
  selectedPositionType: string;
  positions: UserPosition[];
  isPending: boolean;
  isError: boolean;
}

export const UserPositionsTable: React.FC<Props> = ({
  selectedPositionType,
  positions,
  isPending,
  isError
}) => {
  const MAX_ROWS_PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [amount, setAmount] = useState<Maybe<string>>(Maybe.none());
  const [loading, setLoading] = useState<boolean[]>(Array(positions.length).fill(false));
  const [selectedPosition, setSelectedPosition] = useState<UserPosition>({
    index: 0,
    amount: BigInt(0),
    assetAddress: zeroAddress,
    assetSymbol: "",
    assetDecimals: 18,
    vaultAddress: zeroAddress,
    operatorName: "",
    chain: mainnet,
  });
  const { address, chain } = useAccount();
  const { switchChainAsync } = useSwitchChain();

  const pageCount = positions
    ? Math.ceil(positions.length / MAX_ROWS_PER_PAGE)
    : 1;

  const data = useMemo(() => {
    return positions.slice(
      (currentPage - 1) * MAX_ROWS_PER_PAGE,
      Math.min(currentPage * MAX_ROWS_PER_PAGE, positions.length)
    );
  }, [currentPage, positions]);

  const setPage = (selectedPage: number) => {
    if (selectedPage < 1 || selectedPage > pageCount) return;
    setCurrentPage(selectedPage);
  };

  const updateLoadingState = (index: number, value: boolean) => {
    setLoading(prevState =>
      prevState.map((item, i) => (i === index ? value : item))
    );
  };

  const startRedeem = useCallback(async (): Promise<void> => {
    if (!address || !chain || selectedPosition.vaultAddress === zeroAddress)
      return;
    try {
      updateLoadingState(selectedPosition.index, true);

      if (chain.id !== selectedPosition.chain.id) {
        await switchChainAsync({ chainId: selectedPosition.chain.id });
      }

      const fixedPointUnstakeAmount = FixedPointNumber.fromDecimal(
        amount.string(),
        selectedPosition.assetDecimals
      );
      await startRedeemAsset(
        fixedPointUnstakeAmount,
        selectedPosition.vaultAddress,
        selectedPosition.assetSymbol,
        selectedPosition.chain,
        address,
      )

      updateLoadingState(selectedPosition.index, false);
      setAmount(Maybe.none());
      setIsOpen(false);
    } catch (error) {
      updateLoadingState(selectedPosition.index, false);
      Logger.error(`Error starting ${selectedPosition.assetSymbol} unstake:`, error);
      toast.error(`Error starting ${selectedPosition.assetSymbol} unstake`);
    }
  }, [
    address,
    chain,
    selectedPosition,
    amount,
    switchChainAsync,
  ]);

  const finishRedeem = useCallback(async (withdrawPosition: UserPosition): Promise<void> => {
    if (!address || !chain || withdrawPosition.vaultAddress === zeroAddress)
      return;
    try {
      updateLoadingState(selectedPosition.index, true);

      if (chain.id !== withdrawPosition.chain.id) {
        await switchChainAsync({ chainId: withdrawPosition.chain.id });
      }

      const fixedPointUnstakeAmount = FixedPointNumber.fromDecimal(
        amount.string(),
        withdrawPosition.assetDecimals
      );
      await finishRedeemAsset(
        fixedPointUnstakeAmount,
        withdrawPosition.vaultAddress,
        withdrawPosition.assetAddress,
        withdrawPosition.assetSymbol,
        withdrawPosition.chain,
        withdrawPosition.withdrawalKey!,
      );

      updateLoadingState(selectedPosition.index, false);
      setAmount(Maybe.none());
    } catch (error) {
      updateLoadingState(selectedPosition.index, false);
      Logger.error(`Error finishing ${withdrawPosition.assetSymbol} unstake:`, error);
      toast.error(`Error finishing ${withdrawPosition.assetSymbol} unstake`);
    }
  }, [
    address,
    chain,
    amount,
    switchChainAsync,
  ]);

  if (!address) {
    return (
      <div className="w-full !overflow-x-auto">
        <table className="relative min-w-full text-left text-black table-fixed">
          <thead className="border-b border-black/10">
            <tr>
              <th scope="col" className="w-1/5 px-6 py-4 font-[500] text-sm">
                ASSET
              </th>
              <th scope="col" className="w-1/5 px-6 py-4 font-[500] text-sm">
                OPERATOR
              </th>
              <th scope="col" className="w-1/5 px-6 py-4 font-[500] text-sm">
                NETWORK
              </th>
              <th scope="col" className="w-1/5 px-6 py-4 font-[500] text-sm">
                AMOUNT
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-base py-5 whitespace-nowrap">
                Please connect your wallet.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="w-full !overflow-x-auto">
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="flex flex-col gap-4 m-auto rounded-md bg-white sm:w-[375px] py-10 px-8">
            <div className="flex items-center">
              <p className="text-black text-2xl">Unstake {selectedPosition.assetSymbol}</p>
              <button
                type="button"
                className="text-light-black bg-transparent hover:opacity-75 rounded-lg text-sm w-8 h-8 ml-auto"
                data-modal-hide="default-modal"
                onClick={() => setIsOpen(false)}
              >
                <ModalCloseIcon />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <p className="text-sm font-[500]">
              Please note that for security purposes, unstaking will begin a
              <b> 9-day</b> queuing period which cannot be reversed, after which
              you can withdraw.
            </p>
            <div className="flex flex-col">
              <TokenAmountInput
                action="unstake"
                token={selectedPosition.assetSymbol}
                amount={amount.string()}
                maxAmount={FixedPointNumber.fromRaw(selectedPosition.amount, selectedPosition.assetDecimals).toString()}
                onChange={(v) =>
                  setAmount(v.trim() ? Maybe.from(v) : Maybe.none())
                }
              />
            </div>
            <button
              className="bg-gradient-to-r from-orange-600 to-orange-300 hover:brightness-75 text-white py-3 px-4 rounded font-nunito text-xl font-bold w-full disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={
                checkZeroAmount(amount) ||
                Boolean(Number(amount.string()) > Number(FixedPointNumber.fromRaw(selectedPosition.amount, selectedPosition.assetDecimals).toString())) ||
                loading[selectedPosition.index]
              }
              onClick={startRedeem}
            >
              <div className="flex items-center justify-center gap-2">
                {loading[selectedPosition.index] && <Spinner />}
                {loading[selectedPosition.index] ? "Unstaking" : "Unstake"}
              </div>
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
      <table className="relative min-w-full text-left text-black table-fixed">
        <thead className="border-b border-black/10">
          <tr>
            <th scope="col" className="w-1/5 px-6 py-4 font-[500] text-sm">
              ASSET
            </th>
            <th scope="col" className="w-1/5 px-6 py-4 font-[500] text-sm">
              OPERATOR
            </th>
            <th scope="col" className="w-1/5 px-6 py-4 font-[500] text-sm">
              NETWORK
            </th>
            <th scope="col" className="w-1/5 px-6 py-4 font-[500] text-sm">
              AMOUNT
            </th>
          </tr>
        </thead>
        <tbody>
        {isPending || isError ? (
            <tr className="h-24">
              <td>
                <Spinner type="table" />
              </td>
            </tr>
          ) : positions && positions.length === 0 ? (
            <tr>
              <td className="text-base py-5 whitespace-nowrap">
                You have no{" "}
                {selectedPositionType === "Active"
                  ? "actively restaked positions."
                  : "pending withdrawals."}
              </td>
            </tr>
          ) : (
          data.map((item, index) => (
            <tr key={index}>
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                <div className="flex gap-2 items-center">
                  <Image
                    src={getTokenImg(item.assetSymbol)}
                    alt={item.assetSymbol}
                    className="size-6"
                  />
                  <p className="font-normal text-base">{item.assetSymbol}</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">{item.operatorName}</td>
              <td className="whitespace-nowrap px-6 py-4">{item.chain.name}</td>
              <td className="whitespace-nowrap px-6 py-4">{decimalFormat(
                    mapRawAmountToUi(
                      item.amount.toString(),
                      item.assetDecimals
                    )
                  )}</td>
              <td className="whitespace-nowrap px-6 py-4">
                {selectedPositionType === "Pending" ? (
                  <button
                    className="bg-primary-orange text-xs text-white font-semibold py-[6px] w-20 rounded-sm disabled:hover:cursor-not-allowed disabled:opacity-70 hover:opacity-85"
                    onClick={() => finishRedeem(item)}
                    disabled={
                      !item.readyToFinish ||
                      loading[item.index]
                    }
                  >
                    <div className="flex items-center justify-center gap-2">
                      {loading[item.index] && <Spinner small />}
                      FINISH
                    </div>
                  </button>
                ) : (
                  <button
                    className="bg-primary-orange text-xs text-white font-semibold py-[6px] w-20 rounded-sm disabled:hover:cursor-not-allowed disabled:opacity-70 hover:opacity-85"
                    onClick={() => {
                      setIsOpen(true);
                      setSelectedPosition(item);
                    }}
                  >
                    UNSTAKE
                  </button>
                )}
              </td>
            </tr>
          )))}
        </tbody>
      </table>
      {positions && positions.length > 0 && (
        <div className="flex gap-1 items-center mr-auto mt-8">
          <button
            className="flex items-center gap-1 bg-white border border-gray-200 rounded-md h-8 px-4 py-5 hover:opacity-75 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setPage(currentPage - 1)}
          >
            <ChevronLeftIcon />
            <p>Back</p>
          </button>
          {Array(pageCount).fill(null).map((_, i) => i + 1).map((page, i) => (
            <button
              key={i}
              className={`flex items-center bg-white border ${currentPage === page ? `border-black` : `border-gray-200`} rounded-md h-8 px-4 py-5 hover:opacity-75 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:opacity-50`}
              onClick={() => setPage(page)}
            >
              <p>{page}</p>
            </button>
          ))}
          <button
            className="flex items-center gap-1 bg-white border border-gray-200 rounded-md h-8 px-4 py-5 hover:opacity-75 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:opacity-50"
            disabled={currentPage === pageCount}
            onClick={() => setPage(currentPage + 1)}
          >
            <p>Next</p>
            <ChevronRightIcon />
          </button>
        </div>
      )}
    </div>
  );
};
