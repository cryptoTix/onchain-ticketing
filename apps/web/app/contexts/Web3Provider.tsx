"use client";

import React from "react";
import { WagmiProvider, createConfig } from "wagmi";
import { defineChain } from "viem";
import { arbitrum, fraxtal, sepolia, bsc, mantle, mainnet, arbitrumSepolia } from "viem/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { Config } from "@wagmi/core";


export const anvil = defineChain({
  id: 31337,
  name: 'ANVIL',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['http://127.0.0.1:8545'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Etherscan',
      url: 'https://etherscan.io',
      apiUrl: 'https://api.etherscan.io/api',
    },
  },
  contracts: {
    ensRegistry: {
      address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    },
    ensUniversalResolver: {
      address: '0xce01f8eee7E479C928F8919abD53E553a36CeF67',
      blockCreated: 19_258_213,
    },
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 14_353_601,
    },
  },
})
export const config: Config = createConfig(
  getDefaultConfig({
    chains: [
      arbitrumSepolia,
      sepolia,
      anvil
    ],
    walletConnectProjectId: "3c2a0a26bc7892ad1101134ccfcf4b57",
    appName: "KryptoTix",
    ssr: true,
  })
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider
          debugMode
          options={{ avoidLayoutShift: false }}
          theme="midnight"
        >
          {children}
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
