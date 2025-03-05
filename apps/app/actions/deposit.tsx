"use client"; // Ensures it runs only in the browser

import { useState } from "react";
import { ethers } from "ethers";
import { useWalletProvider } from "../hooks/useWalletProvider";

export async function Deposit() {
  const { provider, account, connectWallet } = useWalletProvider();
  const [amount, setAmount] = useState("");

  const handleDeposit = async () => {
    if (!provider || !account) {
      alert("Please connect your wallet first!");
      return;
    }

    try {
      const signer = provider.getSigner();
      const transaction = await signer.sendTransaction({
        to: "0xYourContractAddress", // Replace with actual contract or recipient address
        value: ethers.utils.parseEther(amount),
      });

      console.log("Transaction sent:", transaction);
      alert(`Transaction Hash: ${transaction.hash}`);
    } catch (error) {
      console.error("Transaction failed", error);
      alert("Deposit failed!");
    }
  };

  return (
    <div>
      {!account ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <>
          <h2>Connected: {account}</h2>
          <input
            type="text"
            placeholder="Enter amount in ETH"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={handleDeposit}>Deposit ETH</button>
        </>
      )}
    </div>
  );
};

export default Deposit;
