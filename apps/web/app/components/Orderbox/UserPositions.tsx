"use client";

import { useMemo, useState } from "react";
import { UserPositionsTable } from "./UserPositionsTable";
import { useAccount } from "wagmi";
import { trpc } from "../../trpc";
import { useQuery } from "@tanstack/react-query";
import { Hex, extractChain, getAddress } from "viem";
import { config } from "../../contexts/Web3Provider";
import { UserPosition, ActiveAndPendingPositions } from "../../types/types";
import { Logger } from "../../utils/logger";
import { QUEUING_PERIOD_SECONDS } from "../../constants/constants";
import { ToastNotification } from "../Toast/ToastNotification";
import { extractOperatorName } from "../../utils/helpers";

export const UserPositions: React.FC = () => {
  const [positionType, setPositionType] = useState<string>("Active");
  const { address } = useAccount();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["restaked-positions", address],
    queryFn: async () => {
      if (!address) return;
      return await trpc.getPositions.query({ address }) as ActiveAndPendingPositions;
    },
  });
  const positionTypes = ["Active", "Pending"];

  if (isError)
    Logger.error("Error fetching user positions:", error.message);

  const handlePositionTypeChange = (selectedType: string) => {
    setPositionType(selectedType);
  };

  const userPositions = useMemo(() => {
    if (positionType === "Active") {
      return data?.activePositions.map((p, index) => {
        return {
          index,
          amount: BigInt(p.activeBalance),
          assetAddress: getAddress(p.vaultUnderlyingToken),
          assetSymbol: p.assetSymbol,
          assetDecimals: p.decimals,
          operatorName: p.operatorName ? extractOperatorName(p.operatorName) : "N/A",
          chain: extractChain({ chains: config.chains, id: p.chainId }),
          vaultAddress: getAddress(p.vault.split('.')[1] ?? ""),
        } as UserPosition
      }) ?? [];
    }

    return data?.pendingWithdrawals.map((p, index) => {
      const currentTimestamp = Math.floor(Date.now() / 1000);
      return {
        index,
        amount: BigInt(p.shares),
        assetAddress: getAddress(p.underlyingToken),
        assetSymbol: p.assetSymbol,
        assetDecimals: p.decimals,
        operatorName: p.operatorName ? extractOperatorName(p.operatorName) : "N/A",
        chain: extractChain({ chains: config.chains, id: p.chainId }),
        vaultAddress: getAddress(p.vault.split('.')[1] ?? ""),
        withdrawalKey: p.withdrawalKey as Hex,
        readyToFinish: currentTimestamp - Number(p.timestamp) > QUEUING_PERIOD_SECONDS,
      } as UserPosition
    }) ?? [];
  }, [data, positionType]);

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="flex flex-col custom-sm:flex-row gap-1 items-start custom-sm:items-center mr-auto mb-2">
        {positionTypes.map((type, index) => (
          <button
            key={index}
            className={`${positionType === type ? "bg-primary-orange text-white" : "text-primary-gray border border-gray-150"} text-base px-6 py-1 rounded-full hover:opacity-75 focus:hover:opacity-100`}
            onClick={() => handlePositionTypeChange(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <UserPositionsTable 
        selectedPositionType={positionType}
        positions={userPositions}
        isPending={isPending}
        isError={isError}
      />
      <ToastNotification />
    </div>
  );
};
