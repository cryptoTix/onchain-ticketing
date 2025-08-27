"use client";

import { getPublicClient, getWalletClient, waitForTransactionReceipt, writeContract } from "@wagmi/core";
import { config } from "../contexts/Web3Provider";
import { Address, erc20Abi, Hex, hexToBigInt, stringify } from "viem";

import { Logger } from "../utils/logger";
import { toast } from "react-hot-toast";
import { makeTxExplorerLink } from "../utils/txExplorerLink";
import { MASTER_ADDR } from "../utils/consts";
import { Master__factory } from "../../../../typechain-types";
import { nftId } from "./migration";
import Decimal from "decimal.js";
import { erc20 } from "../../../../typechain-types/factories/@openzeppelin/contracts/token";


export async function cancelTicket(
  nftId: Hex,
) {
  const walletClient = await getWalletClient(config);
  const publicClient = getPublicClient(config);

  if (!walletClient || !publicClient) {
    toast.error("Please connect wallet")
    return false;
  }

  const txHash = await writeContract(config, {
    address: MASTER_ADDR,
    abi: Master__factory.abi,
    functionName: "cancel",
    args: [hexToBigInt(nftId)],
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
    toast.error(`Error cacnelling ticket`);
    Logger.error(`Failed to cancel ticket: ${stringify(cancelTxReciept, null, 2)}`)
    return false;
  }
  Logger.info( 
    "Successfully cancelled ticket:",
    cancelTxReciept.transactionHash
  );
  const txLinkInfo = makeTxExplorerLink(walletClient.chain, txHash);
  toast.success(
    `Successfully cancelled ticket $${txLinkInfo.string()}`
  );
  return true
}

export async function fetchCancellationAmount(ticketId : Hex) : Promise<number> {
  const walletClient = await getWalletClient(config);
  const publicClient = getPublicClient(config);

  if (!walletClient || !publicClient) {
    throw new Error("wallet client or public client is still missing");
  }
  const [asset, refundAmount] = await publicClient.readContract({
    abi : Master__factory.abi,
    address: MASTER_ADDR,
    functionName : "getCancellationAmount",
    args : [hexToBigInt(ticketId)],
  })
  const decimal = await publicClient.readContract({
    abi: erc20Abi,
    address: asset,
    functionName: "decimals"
  })
  return new Decimal(refundAmount.toString()).div(new Decimal(10 ** (decimal))).toNumber()
}