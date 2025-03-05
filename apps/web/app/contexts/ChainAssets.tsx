"use client";

import React, { useContext, useState, useEffect } from "react";
import {
  extractChain,
  getAddress,
} from "viem";
import { mainnet } from "viem/chains";
import { config } from "./Web3Provider";
import { Maybe } from "../utils/maybe";
import { Logger } from "../utils/logger";
import { trpc } from "../trpc";
import { Asset, OperatorVault, VaultWithOperator, ChainAssets, AllowlistedAsset } from "../types/types";
import { extractOperatorName, formatOperatorVaultsName, shuffleList } from "../utils/helpers";

export type ChainAssetsContextValue = {
  chainAssets: ChainAssets;
}

const ChainAssetsContext = React.createContext<Maybe<ChainAssetsContextValue>>(
  Maybe.none()
);

export function useChainAssets() {
  return useContext(ChainAssetsContext);
}

function fetchAssetToVaultsMap(vaults: VaultWithOperator[]) {
  return vaults.reduce<Record<string, VaultWithOperator[]>>((assetToVaultMap, vault) => {
    const key = `${vault.chainId}.${getAddress(vault.assetAddress)}`;
    if (!assetToVaultMap[key]) {
      assetToVaultMap[key] = [];
    }
    assetToVaultMap[key].push(vault);
    return assetToVaultMap;
  }, {});
}

export const ChainAssetsProvider: React.FC<any> = ({ children }) => {
  const [value, setValue] = useState<Maybe<ChainAssetsContextValue>>(Maybe.none());

  useEffect(() => {
    const fetchAllChainAssets = async () => {
      const chainAssets: ChainAssets = {};
      try {
        const allowlistedAssets: AllowlistedAsset[] = await trpc.getAllowlistedAssets.query();
        const allVaults = await trpc.getVaults.query() as VaultWithOperator[];
        const assetToVaultsMap = fetchAssetToVaultsMap(allVaults);
        for (const chain of config.chains) {
          const currentChainAssets: Asset[] = [];
          // Fetch assets for current chain we're looping over to create our chain -> assets for this chain mapping
          for (const asset of allowlistedAssets.filter((a) => a.chainId === chain.id)) {
            if (asset.asset === getAddress("0x7712c34205737192402172409a8F7ccef8aA2AEc")) { // skip BUIDL for now
              continue;
            }
            const assetKey = `${asset.chainId}.${getAddress(asset.asset)}`;
            const assetVaults = assetToVaultsMap[assetKey] ?? [];
            const assetChain = extractChain({ chains: config.chains, id: asset.chainId }) ?? mainnet; // default to mainnet if chain not found
            const assetDecimals = assetVaults[0]?.decimals ?? 18; // default to 18 decimals if none found
            const operatorVaults: OperatorVault[] = shuffleList(formatOperatorVaultsName(
              assetVaults.map((v) => ({
                name: v.operator && v.operator.name ? extractOperatorName(v.operator.name) : "N/A",
                vaultAddress: getAddress(v.address),
                operatorId: v.operator?.id ?? "",
              }))
            ));
            currentChainAssets.push({
              address: asset.asset,
              chain: assetChain,
              symbol: assetVaults[0]?.assetSymbol ?? "N/A",
              decimals: assetDecimals,
              operatorVaults,
            });
          }
          chainAssets[chain.id] = currentChainAssets;
        }
      } catch (e) {
        Logger.error('Error fetching vaults:', e);
      }
      setValue(Maybe.some({ chainAssets }));
    };

    fetchAllChainAssets();
  }, []);

  return (
    <ChainAssetsContext.Provider value={value}>{children}</ChainAssetsContext.Provider>
  );
};
