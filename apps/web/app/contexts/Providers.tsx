"use client";

import { ReactNode } from "react";
import { Web3Provider } from "./Web3Provider";
import { BlockedUserProvider } from "./BlockedUser";
import { ChainAssetsProvider } from "./ChainAssets";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Web3Provider>
      <ChainAssetsProvider>
        <BlockedUserProvider>{children}</BlockedUserProvider>
      </ChainAssetsProvider>
    </Web3Provider>
  );
}
