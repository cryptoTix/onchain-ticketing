"use client";
import { getPublicClient, getWalletClient } from "@wagmi/core";
import { config } from "../contexts/Web3Provider";
import { erc20Abi, stringify } from "viem";
import { Logger } from "../utils/logger";
import { toast } from "react-hot-toast";
import { makeTxExplorerLink } from "../utils/txExplorerLink";
import { Master__factory } from "../../../../typechain-types";
import { getTicketStruct, PaymentMetadata } from "../../../../shared";


function makeReadonly<T>(array: T[]): ReadonlyArray<T> {
  return array
}

export async function purchase(
  purchaseMetada : PaymentMetadata
) : Promise<boolean> {
  console.log("in purchase", purchaseMetada)
  try {
    if (!purchaseMetada) {
      console.log("got purchase data", purchaseMetada)
      return false
    }
    const walletClient = await getWalletClient(config);
    const publicClient = getPublicClient(config);
    if (!walletClient || !publicClient) {
      toast.error("Please connect wallet")
      return false;
    }
    
    if (!await isApproved(purchaseMetada)) {
      toast.error("Tokens not approved, pls try again")
      return false
    }
    if (walletClient.chain.id != purchaseMetada.selectedChain) {
      walletClient.switchChain({id : purchaseMetada.selectedChain})
    }
    const masterContractAddr = purchaseMetada.masterContract;
    const obj = getTicketStruct(purchaseMetada)
    console.log("got to tx", obj)
    const purchaseHash = await publicClient.readContract({
      address : masterContractAddr,
      abi : Master__factory.abi,
      functionName : "getPurchaseDataSignatureHash",
      args : [{
        asset : obj.asset as `0x{string}`,
        showTime: obj.showTime,
        seats: makeReadonly(obj.seats.map((seat) => {
          return {
            seatId : (seat.seatId),
            price : (seat.price)
          }
        })),
        showId: obj.showId,
        originTimestamp : obj.originTimestamp,
        owner : obj.owner as `0x{string}`,
        amount : obj.amount
      }]
    })
    console.log(purchaseHash)
    const nonce = await publicClient.readContract({
      address: masterContractAddr,
      abi: Master__factory.abi,
      functionName: "getNonce",
      args: [purchaseMetada.ticketOwner],
      authorizationList: undefined
    })
    const txHash = await walletClient.writeContract({
      address : masterContractAddr,
      abi : Master__factory.abi,
      functionName : "purchase",
      args : [
          purchaseMetada.ticketOwner, {
          ticketData : {
            asset : obj.asset as `0x{string}`,
            showTime: obj.showTime,
            seats: makeReadonly(obj.seats.map((seat) => {
              return {
                seatId : BigInt(seat.seatId),
                price : BigInt(seat.price)
              }
            })),
            showId: obj.showId,
            originTimestamp : obj.originTimestamp,
            owner : obj.owner as `0x{string}`,
            amount : obj.amount
          },
          nonce
        },
        purchaseMetada.validationSignature
      ],
      account : walletClient.account.address,
      chain : undefined
    })
    toast.success(`Sent purchase TX`)
    Logger.info(
      "Purchase tx hash:",
      txHash
    );
    const purchaseTxReceipt = await publicClient.waitForTransactionReceipt({
      confirmations: 1,
      hash: txHash,
    });
    if (purchaseTxReceipt.status == "reverted") {
      toast.error(`Error purchasing ticket`);
      Logger.error(`Failed to purchase ticket: ${stringify(purchaseTxReceipt, null, 2)}`)
      return false;
    }
    toast.success(
      `Successfully purchased ticket`
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

export async function isApproved(purchaseMetada : PaymentMetadata) : Promise<boolean> {
  
  try {
    if (!purchaseMetada) {
      return false
    }
    const walletClient = await getWalletClient(config);
    const publicClient = getPublicClient(config);
    if (!walletClient || !publicClient) {
      toast.error("Please connect wallet")
      return false;
    }
  
    const masterContractAddr = purchaseMetada.masterContract;
    const amount = purchaseMetada.totalAmount;
    const asset = purchaseMetada.asset;
    if (walletClient.chain.id != purchaseMetada.selectedChain) {
      walletClient.switchChain({id : purchaseMetada.selectedChain})
    }
    const allowance = await publicClient.readContract({
      address: asset,
      abi: erc20Abi,
      functionName: "allowance",
      args: [walletClient.account.address, masterContractAddr],
      authorizationList: undefined
    })
    console.log(allowance, amount, allowance >= amount)
    return allowance >= amount
  } catch (error) {
    Logger.error(error)
    return false
  }
}

export async function approve(purchaseMetada : PaymentMetadata) : Promise<boolean> {
  if (!purchaseMetada) {
    return false
  }
  try {
    const walletClient = await getWalletClient(config);
    const publicClient = getPublicClient(config);
    if (!walletClient || !publicClient) {
      toast.error("Please connect wallet")
      return false
    }
  
    if (walletClient.chain.id != purchaseMetada.selectedChain) {
      walletClient.switchChain({id : purchaseMetada.selectedChain})
    }
  
    const masterContractAddr = purchaseMetada.masterContract;
    const amount = purchaseMetada.totalAmount;
    const asset = purchaseMetada.asset;
    const {request} = await publicClient.simulateContract({
      address : asset,
      abi : erc20Abi,
      functionName : "approve",
      args : [masterContractAddr , BigInt(amount)],
      account : walletClient.account.address
    })
    const approveTxHash = await walletClient.writeContract(request)

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
        `Successfully approved token: ${purchaseMetada.selectedCurrency}`
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