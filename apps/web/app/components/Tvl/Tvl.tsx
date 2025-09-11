"use client";

import { formatTvl } from "../../utils/helpers";
import { trpc } from "../../trpc";
import { Logger } from "../../utils/logger";
import { useQuery } from "@tanstack/react-query";

export const Tvl: React.FC = () => {
  const {
    isPending: isTvlPending,
    isError: isTvlError,
    data: tvlData,
    error: tvlError,
  } = useQuery({
    queryKey: ["tvl"],
    queryFn: async () => {
      const res = await trpc.getTvl.query();
      return res;
    },
  });

  if (isTvlError) Logger.error("Error fetching tvl:", tvlError.message);

  return (
    <div className="flex flex-col items-center w-full gap-12 mt-4">
      <div className="fixed bottom-2 right-4 bg-white rounded-md shadow-2xl p-4 text-light-black text-xl tracking-wide font-semibold !z-50">
        {isTvlPending || isTvlError ? (
          <div className="flex items-center gap-2">
            TVL:
            <div className="animate-pulse flex space-x-4 w-full">
              <div className="rounded-md bg-gray-700 h-7 w-[9.5rem] mr-auto" />
            </div>
          </div>
        ) : (
          <>TVL: ${formatTvl(tvlData)}</>
        )}
      </div>
    </div>
  );
};
