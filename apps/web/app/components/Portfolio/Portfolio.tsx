"use client";

import { trpc } from "../../trpc";
import { useAccount } from "wagmi";
import { Logger } from "../../utils/logger";
import { useQuery } from "@tanstack/react-query";
import { UserInfo } from "./UserInfo";
import { MigrateV1Positions } from "./MigrateV1Positions";
import { UserXpData, V1PortfolioData, V2Points } from "../../types/types";
import { Address } from "viem";

const emptyV1PortfolioData = {
  xp: 0,
  xpByPhase: {
    phase1: 0,
    phase2: 0,
    phase3: 0,
  },
  usersReferred: 0,
  assetInfo: {
    USD: {
      restakedRaw: "0",
      referredRaw: "0",
    },
    ETH: {
      restakedRaw: "0",
      referredRaw: "0",
    },
    BTC: {
      restakedRaw: "0",
      referredRaw: "0",
    },
    BNB: {
      restakedRaw: "0",
      referredRaw: "0",
    },
    BLAST: {
      restakedRaw: "0",
      referredRaw: "0",
    },
    ARB: {
      restakedRaw: "0",
      referredRaw: "0",
    },
    ETHFI: {
      restakedRaw: "0",
      referredRaw: "0",
    },
    MKR: {
      restakedRaw: "0",
      referredRaw: "0",
    },
    FXS: {
      restakedRaw: "0",
      referredRaw: "0",
    }, 
  },
};

const emptyXpInfoObject = {
  v2Points: 0,
  v1Points: 0,
  xpByPhase: {
    phase1: 0,
    phase2: 0,
    phase3: 0,
  },
  usersReferred: 0,
};

const fetchV1PointsInfo = async (userAddress: Address) => {
  if (!userAddress) return;

  const input = {
    '0': { wallet: userAddress },
  };
  const encodedInput = encodeURIComponent(JSON.stringify(input));
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TRPC_V1_API_URL}/getPortfolio?batch=1&input=${encodedInput}`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    Logger.error('Failed to fetch v1 xp info');
    return emptyV1PortfolioData as V1PortfolioData;
  }

  const data: any = await response.json();
  const portfolioData: V1PortfolioData = data[0].result.data;
  return portfolioData;
};

export const Portfolio: React.FC = () => {
  const { address } = useAccount();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["v2-xp", address],
    queryFn: async () => {
      if (!address) return emptyXpInfoObject;
      const v1PortfolioData = await fetchV1PointsInfo(address);
      const v2Points = await trpc.getPoints.query({ address }) as V2Points;
      return {
        v2Points: v2Points.points,
        v1Points: v1PortfolioData?.xp ?? emptyXpInfoObject.v1Points,
        xpByPhase: v1PortfolioData?.xpByPhase ?? emptyXpInfoObject.xpByPhase,
        usersReferred: v1PortfolioData?.usersReferred ?? emptyXpInfoObject.usersReferred,
      } as UserXpData;
    },
    staleTime: 10 * 60 * 1000, // 10 min TTL for xp info of portfolio
  });

  if (isError)
    Logger.error("Error fetching restaked info for portfolio:", error.message);

  return (
    <div className="flex flex-col items-center w-full gap-12">
      <UserInfo
        userXpData={data ?? emptyXpInfoObject}
        isPending={isPending}
        isError={isError}
      />
      <MigrateV1Positions />
    </div>
  );
};
