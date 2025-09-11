"use client";

import { DSSInfo, DSSItem } from "../../types/types";
import { DSSCards } from "./DSSCards";
import { useQuery } from "@tanstack/react-query";
import { trpc } from "../../trpc";
import { Logger } from "../../utils/logger";
import { useMemo } from "react";
import { chainImageMap, dssImageMap } from "../../constants/constants";
import dssFallbackImg from "../../assets/dss.svg";
import { extractOperatorName } from "../../utils/helpers";

export const DSSs: React.FC = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["explore-dss"],
    queryFn: async () => {
      return await trpc.getDSSs.query() as DSSInfo[];
    },
    staleTime: 10 * 60 * 1000, // 10 min TTL for explore dss
  });

  if (isError)
    Logger.error("Error fetching DSSs:", error.message);

  const services = useMemo(() => {
    return data?.map((d) => {
      return {
        name: d.name ? extractOperatorName(d.name) : "N/A",
        img: dssImageMap[`${d.id}`] ?? dssFallbackImg,
        alt: d.name ? extractOperatorName(d.name) : "N/A",
        numOperators: d.operatorCount,
        networks: [chainImageMap[`${d.chainId}`] ?? ""],
      } as DSSItem
    }) ?? []
  }, [data]);

  return (
    <div className="flex flex-col items-center mt-0 w-full gap-4">
      <h2 className="text-lg mr-auto">SERVICES</h2>
      <DSSCards
        services={services}
        isPending={isPending}
        isError={isError}
      />
    </div>
  );
};
