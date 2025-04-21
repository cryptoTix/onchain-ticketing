"use client";

import { getPublicClient, getWalletClient } from "@wagmi/core";
import { config } from "../contexts/Web3Provider";
import { Address, Chain, getContract, keccak256 } from "viem";
import { Master, Master__factory } from "../../../../typechain-types";
import { PurchaseLib, TicketLib } from "../../../../typechain-types/src/Master";
import { Logger } from "../utils/logger";
import { toast } from "react-hot-toast";
import { makeTxExplorerLink } from "../utils/txExplorerLink";
import { VaultSupervisor } from "../types/VaultSupervisor";
import { PaymentRequest, PaymentMetadata, ValidationSignatureRequest, ValidationSignatureResponse } from "../models/paymentRequest";
import Decimal from "decimal.js";
import { Time } from "../utils/time";
import "ethers";
import { BigNumber, ethers, providers } from "ethers";
import { joinSignature } from "@ethersproject/bytes";
import { _TypedDataEncoder } from "@ethersproject/hash";

const paymentMetadata : PaymentMetadata = {
  requestId: "",
  sellerId: "",
  showId: "",
  showTime : Number(1746978816),
  seatIds: [],
  totalPrice: new Decimal(0),
};
const seatPrice = 5.44;
const contractAddr : Address = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
const PRIVATE_KEY = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"; 
const domain = { name : "PurchaseData", version : "1.0.0" }
// Types definition
const types = {
  SeatData: [
    { name: "seatId", type: "uint128" },
    { name: "price", type: "uint128" },
  ],
  TicketData: [
    { name: "asset", type: "address" },
    { name: "showTime", type: "uint96" },
    { name: "amount", type: "uint256" },
    { name: "showId", type: "uint256" },
    { name: "seats", type: "SeatData[]" },
  ],
  PurchaseData: [
    { name: "ticketData", type: "TicketData" },
    { name: "timestamp", type: "uint256" },
    { name: "nonce", type: "uint256" },
  ],
};

// Backend needs to validate the payload before generating signature
export async function submitPaymentRequest(
  requestData : PaymentRequest
) : Promise<string> {
  const requestId = "test-req-123890"

  paymentMetadata.requestId = requestId;
  paymentMetadata.seatIds = requestData.seatIds
  paymentMetadata.sellerId = requestData.sellerId
  paymentMetadata.showId = requestData.showId
  paymentMetadata.totalPrice = new Decimal(seatPrice).mul(requestData.seatIds.length)
  // TODO: submit request to backend
  return requestId;
};


export async function fetchPaymentRequest(requestId : String) : Promise<PaymentMetadata> {
  
  return paymentMetadata

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

export async function fetchValidationSignature(requestData : ValidationSignatureRequest) : Promise<ValidationSignatureResponse> {
  const wallet = new ethers.Wallet(PRIVATE_KEY);
  // wallet.address
  const contract = new ethers.Contract(contractAddr, Master__factory.abi, wallet) as Master;
  const seatData : TicketLib.SeatDataStruct[] = [];
  paymentMetadata.seatIds.forEach((_, index) => {
    seatData.push({
      seatId : index,
      price: seatPrice * ( 10 ** 6),
    })
  })
  const ticketData : TicketLib.StateStruct = {
    asset : requestData.assetAddress,
    showTime : BigNumber.from(paymentMetadata.showTime),
    amount : BigNumber.from(paymentMetadata.totalPrice.mul(10 ** 6).toNumber()),
    showId : paymentMetadata.showId,
    seats : seatData
  };
  const purchaseData : PurchaseLib.PurchaseDataStruct = {
    ticketData : ticketData,
    timestamp : Date.now(),
    nonce : 0
  }
  const response : ValidationSignatureResponse = {
    paymentRequestId : requestData.paymentRequestId,
    contract : contractAddr,
    signature : joinSignature(wallet._signingKey().signDigest(_TypedDataEncoder.hash({name : domain.name, version : domain.version, chainId : requestData.chainId, verifyingContract : contractAddr}, types, purchaseData))),
    purchaseData : purchaseData
  };
  return response
}
