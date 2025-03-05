"use client";

import { useState, useMemo } from "react";
import { OperatorItem } from "../../types/types";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, Spinner } from "../Shared/shared";
import operatorFallbackImg from "../../assets/operator.svg";
import { chainImageMap } from "../../constants/constants";

interface Props {
  operators: OperatorItem[];
  isPending: boolean;
  isError: boolean;
}

export const OperatorTable: React.FC<Props> = ({ operators, isPending, isError }) => {
  const MAX_ROWS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = operators
    ? Math.ceil(operators.length / MAX_ROWS_PER_PAGE)
    : 1;

  const data = useMemo(() => {
    return operators.slice(
      (currentPage - 1) * MAX_ROWS_PER_PAGE,
      Math.min(currentPage * MAX_ROWS_PER_PAGE, operators.length)
    );
  }, [currentPage, operators]);

  const setPage = (selectedPage: number) => {
    if (selectedPage < 1 || selectedPage > pageCount) return;
    setCurrentPage(selectedPage);
  };

  return (
    <div className="flex flex-col items-center w-full gap-6 bg-white border border-light-gray-border rounded-md p-8">
      <div className="w-full !overflow-x-auto">
        <table className="relative min-w-full text-left text-black table-fixed">
          <thead className="border-b border-black/10">
            <tr>
              <th scope="col" className="w-1/5 px-6 py-4 font-[500] text-sm">
                OPERATOR
              </th>
              <th scope="col" className="w-1/5 px-6 py-4 font-[500] text-sm">
                SERVICES
              </th>
              <th scope="col" className="w-1/5 px-6 py-4 font-[500] text-sm">
                NETWORKS
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
              <tr
                key={index}
                className="border-b border-light-gray-border"
              >
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  <div className="flex gap-2 items-center">
                    <Image src={operatorFallbackImg} alt={item.name} className="size-6" />
                    <p className="font-normal text-base">{item.name}</p>
                  </div>
                </td>
                <td className="whitespace-nowrap w-1/7 px-6 py-4">
                  <div className="flex items-center">
                    {item.dssCount}
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center ml-2">
                    {item.networks.map((elem, index) => (
                      <Image
                        key={index}
                        src={chainImageMap[elem] ?? ""}
                        alt="chain"
                        className={`size-6 ml-[2px]`}
                      />
                    ))}
                  </div>
                </td>
              </tr>
            )))}
          </tbody>
        </table>
        {operators && operators.length > 0 && (
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
    </div>
  );
};
