"use client"; // Ensures it runs only on the client-side

import { useState, useEffect } from "react";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum?: any; // Ensure TypeScript recognizes window.ethereum
  }
}

export const useWalletProvider = () => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    async function loadProvider() {
      if (typeof window !== "undefined" && window.ethereum) {
        const ethProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(ethProvider);

        // Get connected accounts
        const accounts = await ethProvider.send("eth_accounts", []);
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }
      }
    }

    loadProvider();
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask is required!");
      return;
    }

    try {
      const ethProvider = new ethers.providers.Web3Provider(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const signer = ethProvider.getSigner();
      const account = await signer.getAddress();
      setAccount(account);
      setProvider(ethProvider);
    } catch (error) {
      console.error("Wallet connection failed", error);
    }
  };

  return { provider, account, connectWallet };
};
