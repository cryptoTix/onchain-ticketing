"use client";
import { getPublicClient, getWalletClient } from "@wagmi/core";
import { config } from "../contexts/Web3Provider";
import { erc20Abi, stringify, getContract } from "viem";
import { Logger } from "../utils/logger";
import { toast } from "react-hot-toast";
import { makeTxExplorerLink } from "../utils/txExplorerLink";
import { Master__factory } from "../../../../typechain-types";
import { ValidationSignatureResponse } from "../models/paymentRequest";
import { nftId } from "./migration";

export async function purchase(
  purchaseMetada : ValidationSignatureResponse
) : Promise<boolean> {
  const walletClient = await getWalletClient(config);
  const publicClient = getPublicClient(config);
  if (!walletClient || !publicClient) {
    throw new Error("wallet client or public client is still missing");
  }

  if (walletClient) {
    if (walletClient.chain.id != purchaseMetada.chainId) {
      // console.log(walletClient.chain.id, purchaseMetada)
      throw new Error("Wallet chainId diffrent than selected one");
    }
  }
  const masterContractAddr = purchaseMetada.contract;
  const amount = purchaseMetada.purchaseData.ticketData.amount;
  const asset = purchaseMetada.purchaseData.ticketData.asset;


  const tokenERC20 = getContract({
    abi : erc20Abi,
    address : asset,
    client : {
      wallet: walletClient,
      public: publicClient
    }
  })
  const allowance = await tokenERC20.read.allowance([
    walletClient.account.address,
    masterContractAddr,
  ]);
  if (allowance < amount) {
    toast.error("Tokens not approved, pls try again")
    return false
  }
  const masterContract = getContract({
    abi : Master__factory.abi,
    address : masterContractAddr,
    client : {
      wallet : walletClient,
    }
  })

  try {
    const txHash = await masterContract.write.purchase([walletClient.account.address, purchaseMetada.purchaseData, purchaseMetada.signature])
  
    toast.success(`Sent purchase TX`)
    Logger.info(
      "Purchase tx hash:",
      txHash
    );
    const depositTxReceipt = await publicClient.waitForTransactionReceipt({
      confirmations: 1,
      hash: txHash,
    });
    
    if (depositTxReceipt.status == "reverted") {
      toast.error(`Error purchasing ticket`);
      Logger.error(`Failed to purchase ticket: ${stringify(depositTxReceipt, null, 2)}`)
      return false;
    } else {
      toast.success(
        `Successfully purchased ticket`
      );
    }
    Logger.info(
      depositTxReceipt.status == "success" ? 
      "Successfully deposited into vault:" : "tx reverted",
      depositTxReceipt.transactionHash
    );
    const txLinkInfo = makeTxExplorerLink(walletClient.chain, txHash);
    toast.success(
      `Successfully purchased ticket $${txLinkInfo.string()}`
    );
    return true
  } catch (error) {
    toast.error(
      `Failed to purchase`
    );
    Logger.error(error)
    return false
  }
}

export async function isApproved(purchaseMetada : ValidationSignatureResponse) : Promise<boolean> {
  const walletClient = await getWalletClient(config);
  const publicClient = getPublicClient(config);
  if (!walletClient || !publicClient) {
    throw new Error("wallet client or public client is still missing");
  }

  if (walletClient) {
    if (walletClient.chain.id != purchaseMetada.chainId) {
      // console.log(walletClient.chain.id, purchaseMetada)
      throw new Error("Wallet chainId diffrent than selected one");
    }
  }
  const masterContractAddr = purchaseMetada.contract;
  const amount = purchaseMetada.purchaseData.ticketData.amount;
  const asset = purchaseMetada.purchaseData.ticketData.asset;


  const tokenERC20 = getContract({
    abi : erc20Abi,
    address : asset,
    client : {
      wallet: walletClient,
      public: publicClient
    }
  })
  console.log(publicClient.chain)
  console.log(walletClient.chain)
  // publicClient.getCode(asset)
  // const allowance = await publicClient.readContract({
  //   address: asset,
  //   abi : erc20Abi,
  //   functionName : "balanceOf",
  //   args : [walletClient.account.address]
  // })
  const allowance = await tokenERC20.read.allowance([
    walletClient.account.address,
    masterContractAddr,
  ]);
  return allowance >= amount
}

export async function approve(purchaseMetada : ValidationSignatureResponse) : Promise<boolean> {
  const walletClient = await getWalletClient(config);
  const publicClient = getPublicClient(config);
  if (!walletClient || !publicClient) {
    throw new Error("wallet client or public client is still missing");
  }

  if (walletClient) {
    if (walletClient.chain.id != purchaseMetada.chainId) {
      // console.log(walletClient.chain.id, purchaseMetada)
      throw new Error("Wallet chainId diffrent than selected one");
    }
  }
  const masterContractAddr = purchaseMetada.contract;
  const amount = purchaseMetada.purchaseData.ticketData.amount;
  const asset = purchaseMetada.purchaseData.ticketData.asset;


  const tokenERC20 = getContract({
    abi : erc20Abi,
    address : asset,
    client : {
      wallet: walletClient,
      public: publicClient
    }
  })
  try {
    const approveTxHash = await tokenERC20.write.approve([
      masterContractAddr,
      amount,
    ]);
    toast.success(`Sent approve successfully`)
    Logger.info("Approve tx hash:", approveTxHash);

    const txReceipt = await publicClient.waitForTransactionReceipt({
      confirmations : 1,
      hash: approveTxHash,
    });
    if (txReceipt.status == "reverted") {
      toast.error(`Approve revered`);
      Logger.error(
        "Approve tx failed",
        stringify(txReceipt)
      );
      return false
    } else {
      toast.success(
        `Successfully approved token: ${asset}`
      );
    }
    Logger.info(
      "Approve tx confirmed - tx receipt hash:",
      txReceipt.transactionHash
    );
    return true
  } catch (error) {
    toast.error(
      `Failed to approve`
    );
    Logger.error(error)
    return false
  }
}