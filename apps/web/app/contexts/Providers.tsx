"use client";

import { ReactNode } from "react";
import { Web3Provider } from "./Web3Provider";
import { BlockedUserProvider } from "./BlockedUser";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Web3Provider>
        <BlockedUserProvider>{children}</BlockedUserProvider>
    </Web3Provider>
  );
}
