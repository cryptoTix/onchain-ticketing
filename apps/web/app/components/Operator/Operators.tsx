"use client";

import { DSS, OperatorInfo, OperatorItem } from "../../types/types";
import { OperatorTable } from "../Operator/OperatorTable";
import { useQuery } from "@tanstack/react-query";
import { trpc } from "../../trpc";
import { Logger } from "../../utils/logger";
import { useMemo } from "react";
import { extractOperatorName } from "../../utils/helpers";

export const Operators: React.FC = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["explore-operators"],
    queryFn: async () => {
      return await trpc.getOperators.query() as OperatorInfo[];
    },
    staleTime: 10 * 60 * 1000, // 10 min TTL for explore operators
  });

  if (isError)
    Logger.error("Error fetching Operators:", error.message);

  const operators = useMemo(() => {
    return Array.from(
      (data ?? []).reduce((map, operator) => {
        if (operator.name && !map.has(operator.name)) {
          map.set(operator.name, {
            ...operator,
            dsss: [...operator.dsss],
            chainIds: new Set(operator.vaults.map((v) => v.chainId)),
          });
        } else {
          // Merge data for duplicate operators
          const existing = map.get(operator.name ?? "") ?? { chainIds: new Set(), dsss: []};
          existing.dsss = [...existing?.dsss, ...operator.dsss];
          operator.vaults.forEach((v) => existing.chainIds.add(v.chainId));
        }
        return map;
      }, new Map<string, { chainIds: Set<number>; dsss: DSS[] }>())
    ).map(([name, operator]) => ({
      name: extractOperatorName(name),
      dssCount: operator.dsss.length,
      networks: Array.from(operator.chainIds),
    })) as OperatorItem[];
  }, [data]);

  return (
    <div className="flex flex-col items-center mt-0 w-full gap-4 mb-16">
      <h2 className="text-lg mr-auto">OPERATORS</h2>
      <OperatorTable
        operators={operators}
        isPending={isPending}
        isError={isError}
      />
    </div>
  );
};
