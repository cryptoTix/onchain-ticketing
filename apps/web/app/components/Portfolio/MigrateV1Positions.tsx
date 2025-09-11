"use client";

import { useMemo } from "react";
import { useAccount } from "wagmi";
import { useQuery } from "@tanstack/react-query";
import { Address, getAddress, zeroAddress } from "viem";
import { MigrateV1Position, V1Position } from "../../types/types";
import { Logger } from "../../utils/logger";
import { Maybe } from "../../utils/maybe";
import { MigrateV1PositionsTable } from "./MigrateV1PositionsTable";
import { v1VaultSupervisorAddressMap } from "../../constants/constants";
import { emptyAsset } from "../../utils/helpers";
import { useChainAssets } from "../../contexts/ChainAssets";
import { ToastNotification } from "../Toast/ToastNotification";

const fetchV1Positions = async (userAddress: Address | undefined) => {
  if (!userAddress) return;

  const input = {
    '0': { wallet: userAddress },
  };
  const encodedInput = encodeURIComponent(JSON.stringify(input));
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TRPC_V1_API_URL}/getPositionsToMigrate?batch=1&input=${encodedInput}`,
    {
      method: "GET",
    }
  );

  if (!response.ok)
    throw new Error('Failed to fetch v1 positions to migrate.');

  const data: any = await response.json();
  const remainingPositions: V1Position[] = data[0].result.data.remainingPositions;
  return remainingPositions;
};

export const MigrateV1Positions: React.FC = () => {
  const { address } = useAccount();
  const chainAssets = useChainAssets();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["v1-positions", address],
    queryFn: () => fetchV1Positions(address),
  });

  if (isError)
    Logger.error("Error fetching user positions:", error.message);

  const v1PositionsToMigrate = useMemo(() => {
    return (data ?? []).map((v1Position, index) => {
      return {
        index,
        v1VaultSupervisorAddress: v1VaultSupervisorAddressMap[v1Position.chainId] ?? zeroAddress,
        v1VaultAddress: getAddress(v1Position.vault),
        amount: BigInt(v1Position.activeBalance),
        asset: chainAssets
          .flatMap((d) =>
            Maybe.from(
              d.chainAssets[v1Position.chainId]?.find(
                (a) =>
                  a.address === getAddress(v1Position.underlyingTokenAddress) &&
                  a.chain.id === v1Position.chainId
              )
            )
          )
          .getOrElse(emptyAsset),
        nonTokenizedBalance: BigInt(v1Position.nonTokenizedBalance),
        withdrawingBalance: BigInt(v1Position.withdrawingBalance),
      } as MigrateV1Position
    });
  }, [data, chainAssets]);

  if (!address || v1PositionsToMigrate.length === 0) {
    return (
      <div />
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full mt-4">
      <h2 className="text-light-black text-xl font-nunito pb-1 mr-auto">
        V1 POSITIONS
      </h2>
      <div className="bg-white border border-light-gray-border rounded-md p-8 w-full">
        <MigrateV1PositionsTable 
          positions={v1PositionsToMigrate}
          isPending={isPending}
          isError={isError}
        />
      </div>
      <ToastNotification />
    </div>
  );
};
