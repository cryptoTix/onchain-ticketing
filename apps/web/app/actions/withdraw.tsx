"use client";

import { getPublicClient, getWalletClient, waitForTransactionReceipt, writeContract } from "@wagmi/core";
import { config } from "../contexts/Web3Provider";
import { erc20Abi, hexToBigInt, stringify } from "viem";

import { Logger } from "../utils/logger";
import { toast } from "react-hot-toast";
import { Master__factory } from "../../../../typechain-types";
import Decimal from "decimal.js";
import { PaymentMetadata } from "../../../../shared";


export async function cancelTicket(
  ticketData : PaymentMetadata
) {
  try {
    const walletClient = await getWalletClient(config);
    const publicClient = getPublicClient(config);
  
    if (!walletClient || !publicClient) {
      toast.error("Please connect wallet")
      return false;
    }
    if (walletClient.chain.id != ticketData.selectedChain) {
      walletClient.switchChain({id : ticketData.selectedChain})
    }
    const txHash = await writeContract(config, {
      address: ticketData.masterContract,
      abi: Master__factory.abi,
      functionName: "cancel",
      args: [hexToBigInt(ticketData.purchaseDataHash)],
      chain: walletClient.chain,
      account: walletClient.account
    })
    const cancelTxReciept = await waitForTransactionReceipt(config, {
      confirmations : 1,
      hash : txHash
    })
    toast.success(`Sent cancel TX`)
      Logger.info(
        "Cancel tx hash:",
        txHash
      );
  
    if (cancelTxReciept.status == "reverted") {
      console.log("in revert")
      toast.error(`Error cacnelling ticket`);
      Logger.error(`Failed to cancel ticket: ${stringify(cancelTxReciept, null, 2)}`)
      return false;
    }
    Logger.info( 
      "Successfully cancelled ticket:",
      cancelTxReciept.transactionHash
    );
    toast.success(
      `Successfully cancelled ticket`
    );
  } catch (error) {
    Logger.error("Failed with reason", error)
    toast.error("Failed to cancel ticket")
    return false
  }
  return true
}

export async function fetchCancellationAmount(ticketData : PaymentMetadata) : Promise<{amount: number, passed : boolean}> {
  try {
    const walletClient = await getWalletClient(config);
    const publicClient = getPublicClient(config);
    if (!walletClient || !publicClient) {
      toast.error("pls connect wallet")
      return { amount : 0, passed : false }
    }
    if (publicClient.chain.id != ticketData.selectedChain) {
      walletClient.switchChain({ id : ticketData.selectedChain})
    }
    const [asset, refundAmount] = await publicClient.readContract({
      abi: Master__factory.abi,
      address: ticketData.masterContract,
      functionName: "getCancellationAmount",
      args: [hexToBigInt(ticketData.purchaseDataHash)],
      authorizationList: undefined
    })
    const decimal = await publicClient.readContract({
      abi: erc20Abi,
      address: asset,
      functionName: "decimals",
      authorizationList: undefined
    });
    return {amount : new Decimal(refundAmount.toString()).div(new Decimal(10 ** (decimal))).toNumber(), passed : true}
  } catch (error) {
    Logger.error("Unable to fetch bal with error", error);
  }
  return {amount : 0, passed : false};
}