"use client"; // Ensures it runs only in the browser

import { useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";

const ConnectWallet = () => {
  const [provider, setProvider] = useState<any>(null);

  useEffect(() => {
    async function loadProvider() {
      const ethProvider = await detectEthereumProvider();

      if (ethProvider) {
        setProvider(ethProvider);
        console.log("Ethereum provider detected:", ethProvider);
      } else {
        console.log("No Ethereum provider found");
      }
    }

    loadProvider();
  }, []);

  return <button disabled={!provider}>Connect Wallet</button>;
};

export default ConnectWallet;
