"use client";

import { getPublicClient, getWalletClient } from "@wagmi/core";
import { config } from "../contexts/Web3Provider";
import { Address, Chain, getContract } from "viem";
// import {
//   ERC20,
// } from "@repo/contracts";
import { Logger } from "../utils/logger";
import { toast } from "react-hot-toast";
import { makeTxExplorerLink } from "../utils/txExplorerLink";
import { VaultSupervisor } from "../types/VaultSupervisor";

export async function returnReceiptTokens(
  vaultSupervisorAddr: Address,
  vaultAddress: Address,
  amount: bigint,
  chain: Chain,
  tokenSymbol: string,
) {
  // const walletClient = await getWalletClient(config);
  // const publicClient = getPublicClient(config);
  
  // if (!walletClient || !publicClient) {
  //   throw new Error("wallet client or public client is still missing");
  // }
  
  // const tokenERC20 = getContract({
  //   abi: ERC20.abi,
  //   address: vaultAddress,
  //   client: walletClient,
  // });
  
  // const allowance = await tokenERC20.read.allowance([
  //   walletClient.account.address,
  //   vaultSupervisorAddr,
  // ]);
  
  // if (allowance < amount) {
  //   const approveTxHash = await tokenERC20.write.approve([
  //     vaultSupervisorAddr,
  //     amount,
  //   ]);
  //   Logger.info("Approve tx hash for returning receipt tokens:", approveTxHash);
  
  //   const txReceipt = await publicClient.waitForTransactionReceipt({
  //     hash: approveTxHash,
  //   });
  //   Logger.info(
  //     "Approve tx confirmed for returning receipt tokens - tx receipt hash:",
  //     txReceipt.transactionHash
  //   );
  // }
  
  // const vaultSupervisor = getContract({
  //   abi: VaultSupervisor.abi,
  //   address: vaultSupervisorAddr,
  //   client: {
  //     wallet: walletClient,
  //     public: publicClient,
  //   },
  // });
  
  // const txHash = await vaultSupervisor.write.returnShares([
  //   vaultAddress,
  //   amount,
  // ]);
  
  // const returnSharesTxReceipt = await publicClient.waitForTransactionReceipt({
  //   confirmations: 1,
  //   hash: txHash,
  // });
  
  // Logger.info(
  //   `Successfully returned receipt tokens to vault:`,
  //   returnSharesTxReceipt.transactionHash
  // );
  
  // const txLinkInfo = makeTxExplorerLink(chain, txHash);
  // toast.success(
  //   `Successfully returned ${tokenSymbol} receipt tokens!$${txLinkInfo.string()}`
  // );
}

export async function migrateV1Position(
  vaultSupervisorAddress: Address,
  v1VaultAddress: Address,
  selectedOperatorVaultAddr: Address,
  v1Shares: bigint,
  nonTokenizedBalance: bigint,
  withdrawingBalance: bigint,
  chain: Chain,
  assetSymbol: string,
) {
  const walletClient = await getWalletClient(config);
  const publicClient = getPublicClient(config);

  if (!walletClient || !publicClient) {
    throw new Error("wallet client or public client is still missing");
  }

  // Return required receipt tokens for receipt token enabled vault
  // where amt available to migrate is user's active balance.
  if (
    nonTokenizedBalance - withdrawingBalance <
    v1Shares
  ) {
    const receiptTokensToReturn =
      v1Shares - (nonTokenizedBalance - withdrawingBalance);
    await returnReceiptTokens(
      vaultSupervisorAddress,
      v1VaultAddress,
      receiptTokensToReturn,
      chain,
      assetSymbol,
    );
  }

  const vaultSupervisor = getContract({
    abi: VaultSupervisor.abi,
    address: vaultSupervisorAddress,
    client: {
      wallet: walletClient,
      public: publicClient,
    },
  });

  const minNewV2Shares = (v1Shares * BigInt(99)) / BigInt(100);
  const txHash = await vaultSupervisor.write.migrateToV2([
    v1VaultAddress,
    selectedOperatorVaultAddr,
    v1Shares,
    minNewV2Shares,
  ]);

  const migrateSharesTxReceipt = await publicClient.waitForTransactionReceipt({
    confirmations: 1,
    hash: txHash,
  });

  Logger.info(
    `Successfully migrated position:`,
    migrateSharesTxReceipt.transactionHash
  );

  const txLinkInfo = makeTxExplorerLink(chain, txHash);
  toast.success(
    `Successfully migrated your ${assetSymbol} position!$${txLinkInfo.string()}`
  );
}
