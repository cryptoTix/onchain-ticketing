"use client";

import React from "react";
import { WagmiProvider, createConfig } from "wagmi";
import { defineChain } from "viem";
import { arbitrum, fraxtal, sepolia, bsc, mantle, mainnet } from "viem/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { Config } from "@wagmi/core";

const KARAK_RPC = "https://rpc.karak.network";
export const karak = defineChain({
  id: 2410,
  name: "K2",
  nativeCurrency: {
    name: "Karak Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [KARAK_RPC],
    },
    public: {
      http: [KARAK_RPC],
      webSocket: ["wss://wss.rpc.karak.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://explorer.karak.network",
    },
  },
  contracts: {
    multicall3: {
      address: "0x73331e33f1552E706D56aa453ce19BCE314B4F59",
    },
  },
});

export const sepoliaTestnet = {
  ...sepolia,
  rpcUrls: {
    ...sepolia.rpcUrls,
    default: {
      http: [
        "https://eth-sepolia.g.alchemy.com/v2/UTT30PES9ztsrkU5f_pNiGaScEmVab7r",
      ],
    },
    public: {
      http: [
        "https://eth-sepolia.g.alchemy.com/v2/UTT30PES9ztsrkU5f_pNiGaScEmVab7r",
      ],
    },
  },
};

const ARB_MAINNET_QUIKNODE_RPC =
  "https://polished-wispy-borough.arbitrum-mainnet.quiknode.pro/df66b735db9f5dfe3060f6987639f58676a9f49d";
const ARB_MAINNET_PUBLIC_NODE_RPC = "https://arbitrum-one.publicnode.com";
export const arbMainnet = {
  ...arbitrum,
  name: "Arbitrum",
  rpcUrls: {
    ...arbitrum.rpcUrls,
    default: {
      http: [ARB_MAINNET_QUIKNODE_RPC, ARB_MAINNET_PUBLIC_NODE_RPC],
    },
    public: {
      http: [ARB_MAINNET_QUIKNODE_RPC, ARB_MAINNET_PUBLIC_NODE_RPC],
    },
  },
};

export const bscMainnet = {
  ...bsc,
  name: "BSC",
  rpcUrls: {
    ...bsc.rpcUrls,
    default: {
      http: [
        "https://young-crimson-liquid.bsc.quiknode.pro",
        "https://bsc-dataseed1.binance.org/",
        "https://bsc-dataseed1.defibit.io/",
        "https://bsc-dataseed1.ninicoin.io/",
        "https://bsc-rpc.publicnode.com",
      ],
    },
    public: {
      http: [
        "https://young-crimson-liquid.bsc.quiknode.pro",
        "https://bsc-dataseed1.binance.org/",
        "https://bsc-dataseed1.defibit.io/",
        "https://bsc-dataseed1.ninicoin.io/",
        "https://bsc-rpc.publicnode.com",
      ],
    },
  },
};

export const mantleMainnet = {
  ...mantle,
  rpcUrls: {
    ...mantle.rpcUrls,
    default: {
      http: [
        "https://palpable-sly-hill.mantle-mainnet.quiknode.pro",
        "https://mantle.public-rpc.com",
        "https://mantle-mainnet.public.blastapi.io",
        "https://mantle-mainnet.public.blastapi.io",
      ],
    },
    public: {
      http: [
        "https://palpable-sly-hill.mantle-mainnet.quiknode.pro",
        "https://mantle.public-rpc.com",
        "https://mantle-mainnet.public.blastapi.io",
        "https://mantle-mainnet.public.blastapi.io",
      ],
    },
  },
};

const MAINNET_RPC =
  "https://wandering-billowing-season.quiknode.pro/e0273c2a0c7ab0a50a1f0cb663ee50500628eb8d";
const MAINNET_PUBLIC_NODE_RPC = "https://ethereum-rpc.publicnode.com";
export const ethMainnet = {
  ...mainnet,
  rpcUrls: {
    ...mainnet.rpcUrls,
    default: {
      http: [MAINNET_RPC, MAINNET_PUBLIC_NODE_RPC],
    },
    public: {
      http: [MAINNET_RPC, MAINNET_PUBLIC_NODE_RPC],
    },
  },
};

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
      arbMainnet,
      fraxtal,
      // karak,
      bscMainnet,
      mantleMainnet,
      ethMainnet,
      anvil
    ],
    walletConnectProjectId: "c57993d078245f9d020900fa488586fd",
    appName: "Karak Restaking",
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
