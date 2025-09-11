"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useAccount, useSwitchChain } from "wagmi";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, DarkChevronDownIcon, ModalCloseIcon } from "../Shared/shared";
import { Dialog, Menu } from "@headlessui/react";
import { toast } from "react-hot-toast";
import { MigrateV1Position, OperatorVault } from "../../types/types";
import {
  isValidPositionToMigrate,
  decimalFormat,
  mapRawAmountToUi,
  emptyOperator,
  emptyAsset,
  getTokenImg,
  filterHiddenVaultsOnDeposit,
} from "../../utils/helpers";
import { zeroAddress } from "viem";
import { Logger } from "../../utils/logger";
import { Spinner } from "../Shared/shared";
import { migrateV1Position } from "../../actions/migration";

interface Props {
  positions: MigrateV1Position[];
  isPending: boolean;
  isError: boolean;
}

export const MigrateV1PositionsTable: React.FC<Props> = ({
  positions,
  isPending,
  isError
}) => {
  const MAX_ROWS_PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean[]>(Array(positions.length).fill(false));
  const [selectedPosition, setSelectedPosition] = useState<MigrateV1Position>({
    index: 0,
    v1VaultSupervisorAddress: zeroAddress,
    v1VaultAddress: zeroAddress,
    asset: emptyAsset(),
    amount: BigInt(0),
    nonTokenizedBalance: BigInt(0),
    withdrawingBalance: BigInt(0),
  });
  const [selectedOperator, setSelectedOperator] = useState<OperatorVault>(
    selectedPosition.asset.operatorVaults[0] ?? emptyOperator()
  );
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

  useEffect(() => {
    const filteredVaults = filterHiddenVaultsOnDeposit(
      selectedPosition.asset.chain.id,
      selectedPosition.asset.operatorVaults
  );
    if (
      filteredVaults.length > 0 &&
      filteredVaults[0]
    ) {
      setSelectedOperator(filteredVaults[0]);
    } else {
      setSelectedOperator(emptyOperator());
    }
  }, [selectedPosition]);

  const migrate = useCallback(async (): Promise<void> => {
    if (!address || !chain || !isValidPositionToMigrate(selectedPosition, selectedOperator))
      return;

    try {
      updateLoadingState(selectedPosition.index, true);
  
      if (chain.id !== selectedPosition.asset.chain.id) {
        await switchChainAsync({ chainId: selectedPosition.asset.chain.id });
      }

      await migrateV1Position(
        selectedPosition.v1VaultSupervisorAddress,
        selectedPosition.v1VaultAddress,
        selectedOperator.vaultAddress,
        selectedPosition.amount,
        selectedPosition.nonTokenizedBalance,
        selectedPosition.withdrawingBalance,
        selectedPosition.asset.chain,
        selectedPosition.asset.symbol,
      );
  
      updateLoadingState(selectedPosition.index, false);
      setIsOpen(false);
    } catch (error) {
      updateLoadingState(selectedPosition.index, false);
      Logger.error(`Error migrating ${selectedPosition.asset.symbol} position:`, error);
      toast.error(`Error migrating ${selectedPosition.asset.symbol} position`);
    }
  }, [
    address,
    chain,
    selectedPosition,
    selectedOperator,
    switchChainAsync,
  ]);

  return (
    <div className="w-full !overflow-x-auto">
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="flex flex-col gap-4 m-auto rounded-md bg-white w-full custom-sm:w-[400px] py-11 px-8">
            <div className="flex items-center">
              <p className="text-black text-2xl">Migrate Position</p>
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
            <div className="py-4">
              <p className="text-light-black mb-3 text-sm">SELECTED OPERATOR</p>
              <Menu>
                <Menu.Button className="w-full border-0.2 border-primary-orange h-16 py-2 px-4 rounded-[0.25rem]">
                    <div className="flex gap-2 items-center">
                      <p className="font-semibold text-base">
                        {selectedPosition.asset.chain.id === 1 && selectedOperator.name.includes("Chainnodes") ? "Chainnodes" : selectedOperator.name.includes("BwareLabs.com") ? "BwareLabs" : selectedOperator.name}
                      </p>
                      <div className="ml-auto">
                        <DarkChevronDownIcon />
                      </div>
                    </div>
                </Menu.Button>
                <div className="relative w-full">
                  {selectedPosition.asset.operatorVaults.length > 1 && (
                    <Menu.Items
                      className="bg-white border-0.2 border-primary-orange mt-2 p-2 rounded-[0.25rem] absolute z-20 w-full max-h-[6rem] overflow-scroll"
                    >
                      {filterHiddenVaultsOnDeposit(selectedPosition.asset.chain.id, selectedPosition.asset.operatorVaults).map((operator, index) => (
                        <Menu.Item key={index}>
                          <div
                            className="hover:bg-gray-100 hover:cursor-pointer rounded-[0.3rem]"
                            onClick={() => setSelectedOperator(operator)}
                          >
                            <div className="flex gap-2 py-2 px-2">
                              <p className="font-[500] text-base">
                                {selectedPosition.asset.chain.id === 1 && operator.name.includes("Chainnodes") ? "Chainnodes" : operator.name.includes("BwareLabs.com") ? "BwareLabs" : operator.name}
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
            <button
              className="bg-gradient-to-r from-orange-600 to-orange-300 hover:brightness-75 text-white py-3 px-4 rounded font-nunito text-xl font-bold w-full disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={
                selectedPosition.amount === BigInt(0) ||
                selectedOperator.vaultAddress === zeroAddress ||
                loading[selectedPosition.index]
              }
              onClick={migrate}
            >
              <div className="flex items-center justify-center gap-2">
                {loading[selectedPosition.index] && <Spinner />}
                {loading[selectedPosition.index] ? "Migrating" : "Migrate"}
              </div>
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
      <table className="relative min-w-full text-left text-black table-fixed">
        <thead className="border-b border-black/10">
          <tr>
            <th scope="col" className="w-1/4 px-6 py-4 font-[500] text-sm">
              ASSET
            </th>
            <th scope="col" className="w-1/4 px-6 py-4 font-[500] text-sm">
              NETWORK
            </th>
            <th scope="col" className="w-1/4 px-6 py-4 font-[500] text-sm">
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
          ) : (
          data.map((item, index) => (
            <tr key={index}>
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                <div className="flex gap-2 items-center">
                  <Image
                    src={getTokenImg(item.asset.symbol)}
                    alt={item.asset.symbol}
                    className="size-6"
                  />
                  <p className="font-normal text-base">{item.asset.symbol}</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">{item.asset.chain.name}</td>
              <td className="whitespace-nowrap px-6 py-4">{decimalFormat(
                mapRawAmountToUi(
                  item.amount.toString(),
                  item.asset.decimals
                ))}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <button
                  className="bg-primary-orange text-xs text-white font-semibold py-[6px] w-20 rounded-sm disabled:hover:cursor-not-allowed disabled:opacity-70 hover:opacity-85"
                  onClick={() => {
                    setIsOpen(true);
                    setSelectedPosition(item);
                  }}
                >
                  MIGRATE
                </button>
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
