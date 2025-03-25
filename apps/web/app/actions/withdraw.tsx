"use client";

import { getPublicClient, getWalletClient } from "@wagmi/core";
import { config, karak } from "../contexts/Web3Provider";
import { Address, Chain, Hex, getContract } from "viem";
// import {
//   ERC20,
//   Vault,
//   IWETH9,
// } from "@repo/contracts";
import { FixedPointNumber } from "../utils/fixedPoint";
import { Logger } from "../utils/logger";
import { toast } from "react-hot-toast";
import { makeTxExplorerLink } from "../utils/txExplorerLink";
import { KARAK_WETH_ADDRESS } from "../constants/constants";

export async function startRedeemAsset(
  amount: FixedPointNumber,
  vaultAddress: Address, // this also maps to receipt token address
  assetSymbol: string,
  chain: Chain,
  userAddress: Address,
): Promise<void> {
  // const walletClient = await getWalletClient(config);
  // const publicClient = getPublicClient(config);

  // if (!walletClient || !publicClient) {
  //   throw new Error("wallet client or public client is still missing");
  // }

  // const receiptTokenERC20 = getContract({
  //   abi: ERC20.abi,
  //   address: vaultAddress,
  //   client: walletClient,
  // });

  // const allowance = await receiptTokenERC20.read.allowance([
  //   walletClient.account.address,
  //   vaultAddress,
  // ]);

  // if (allowance < amount.toBigInt()) {
  //   const approveTxHash = await receiptTokenERC20.write.approve([
  //     vaultAddress,
  //     amount.toBigInt(),
  //   ]);
  //   Logger.info("Approve tx hash for returning receipt tokens:", approveTxHash);

  //   const txReceipt = await publicClient.waitForTransactionReceipt({
  //     confirmations: 1,
  //     hash: approveTxHash,
  //   });
  //   Logger.info(
  //     "Approve tx confirmed for returning receipt tokens - tx receipt hash:",
  //     txReceipt.transactionHash
  //   );
  // }

  // const vault = getContract({
  //   abi: Vault.abi,
  //   address: vaultAddress,
  //   client: {
  //     wallet: walletClient,
  //     public: publicClient,
  //   },
  // });

  // const txHash = await vault.write.startRedeem([
  //   amount.toBigInt(),
  //   userAddress,
  // ]);

  // await publicClient.waitForTransactionReceipt({
  //   confirmations: 1,
  //   hash: txHash,
  // });

  // Logger.info(
  //   `Successfully started unstake from ${assetSymbol} vault:`,
  //   txHash
  // );
    
  // const txLinkInfo = makeTxExplorerLink(chain, txHash);
  // toast.success(
  //   `Successfully started ${assetSymbol} unstake!$${txLinkInfo.string()}`
  // );
}

export async function finishRedeemAsset(
  amount: FixedPointNumber,
  vaultAddress: Address, // this also maps to receipt token address
  assetAddress: Address,
  assetSymbol: string,
  chain: Chain,
  withdrawalKey: Hex,
) {
  // const walletClient = await getWalletClient(config);
  // const publicClient = getPublicClient(config);

  // if (!walletClient || !publicClient) {
  //   throw new Error("wallet client or public client is still missing");
  // }

  // const vault = getContract({
  //   abi: Vault.abi,
  //   address: vaultAddress,
  //   client: {
  //     wallet: walletClient,
  //     public: publicClient,
  //   },
  // });

  // const txHash = await vault.write.finishRedeem([
  //   withdrawalKey,
  // ]);

  // await publicClient.waitForTransactionReceipt({
  //   confirmations: 1,
  //   hash: txHash,
  // });

  // Logger.info(
  //   `Successfully finished unstake from ${assetSymbol} vault:`,
  //   txHash
  // );

  // if (
  //   chain.id === karak.id &&
  //   assetAddress === KARAK_WETH_ADDRESS
  // ) {
  //   const wethContract = getContract({
  //     abi: IWETH9.abi,
  //     address: assetAddress,
  //     client: walletClient,
  //   });

  //   const wethWithdrawTXHash =
  //     await wethContract.write.withdraw([amount.toBigInt()]);

  //   await publicClient.waitForTransactionReceipt({
  //     confirmations: 1,
  //     hash: wethWithdrawTXHash,
  //   });

  //   Logger.info(`Successfully unwrapped WETH:`, wethWithdrawTXHash);
  // }

  // const txLinkInfo = makeTxExplorerLink(chain, txHash);
  // toast.success(
  //   `Successfully finished ${assetSymbol} unstake!$${txLinkInfo.string()}`
  // );
}
