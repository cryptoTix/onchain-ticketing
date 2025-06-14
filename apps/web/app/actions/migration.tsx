import { Master, Master__factory } from "../../../../typechain-types";
import { PaymentRequest, PaymentMetadata, ValidationSignatureRequest, ValidationSignatureResponse, SeatData, TicketData, PurchaseData } from "../models/paymentRequest";
import Decimal from "decimal.js";
import { Time } from "../utils/time";
import { ethers } from "ethers";
import { privateKeyToAccount } from "viem/accounts";
import { MASTER_ADDR, PRIVATE_KEY } from "../utils/consts";
import { erc20Abi, Hex } from "viem";

export const paymentMetadata : PaymentMetadata = {
  requestId: "",
  sellerId: "",
  showId: "",
  showTime : Number(1780265189),
  seatIds: [],
  totalPrice: new Decimal(0),
};
export var nftId : Hex;
const seatPrice = 5.44;

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
  await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
  // TODO: Call must be done to backend for data
  return paymentMetadata
}

export async function fetchNftIdByRequest(requestId : String) : Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
  // TODO: Call must be done to backend for data
  return nftId
}

export async function fetchValidationSignature(requestData : ValidationSignatureRequest) : Promise<ValidationSignatureResponse> {
  // Locks must be acquired on DB before generating signature
  const provider = new ethers.JsonRpcProvider("http://localhost:8545");
  const account = privateKeyToAccount(PRIVATE_KEY);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
  const contract = new ethers.Contract(MASTER_ADDR, Master__factory.abi, provider) as unknown as  Master;
  const assetERC20 = new ethers.Contract(requestData.assetAddress, erc20Abi, wallet);

  var currentTime = Time.now.toMilliseconds()
  currentTime = currentTime - currentTime%1000
  currentTime/=1000
  var totalAmount = BigInt(0);
  const seatData : SeatData[] = [];
  paymentMetadata.seatIds.forEach((_, index) => {
    seatData.push({
      seatId : BigInt(index),
      price: BigInt(seatPrice * ( 10 ** 6)),
    });
    totalAmount += seatData[seatData.length - 1].price;
  })
  const ticketData : TicketData = {
    asset : requestData.assetAddress,
    showTime : BigInt(paymentMetadata.showTime),
    amount : totalAmount,
    showId : BigInt(0),
    owner : requestData.user,
    originTimestamp : BigInt(currentTime),
    seats : seatData
  };
  const nonce : ethers.BigNumberish = (await contract.getNonce(requestData.user))
  const purchaseData : PurchaseData = {
    ticketData : ticketData,
    nonce : ethers.getBigInt(nonce)
  }

  console.log(ticketData)
  const purchaseDataHash = await contract.getPurchaseDataSignatureHash(ticketData) as `0x{string}`
  console.log(purchaseDataHash)
  const sign = await account.sign({hash : purchaseDataHash}) as `0x{string}`
  console.log(sign)
  const response : ValidationSignatureResponse = {
    paymentRequestId : requestData.paymentRequestId,
    contract : MASTER_ADDR,
    signature : sign,
    purchaseData : purchaseData,
    chainId : requestData.chainId
  };
  nftId = purchaseDataHash
  return response
}

/*
Might come handy later
function hashArray(arr: string[], type : string) : string{
  const typeArr: string[] = [];
  arr.forEach(() => {
    typeArr.push("type");
  })
  return ethers.utils.keccak256(ethers.utils.solidityPack(typeArr, arr));
}
async function encodePurchaseData(purchaseData : PurchaseData, contract : Constants) {
    const seatHashes : `0x{string}`[] = [];
    const defaultAbiCoder = ethers.utils.defaultAbiCoder;
    const SEATDATA_TYPEHASH = await contract.SEATDATA_TYPEHASH();
    const TICKETDATA_TYPEHASH = await contract.TICKETDATA_TYPEHASH();
    const PURCHASE_DATA_TYPEHASH = await contract.PURCHASE_DATA_TYPEHASH(); 
    purchaseData.ticketData.seats.forEach(async seat => {
      seatHashes.push(ethers.utils.keccak256(defaultAbiCoder.encode(["bytes32", "uint128", "uint128"], [SEATDATA_TYPEHASH, seat.seatId, seat.price])) as `0x{string}`)
    })
    const ticketDataHash = ethers.utils.keccak256(defaultAbiCoder.encode(["bytes32","address","uint96","uint256","uint256","bytes32"], [TICKETDATA_TYPEHASH, purchaseData.ticketData.asset, purchaseData.ticketData.showTime, purchaseData.ticketData.amount, purchaseData.ticketData.showId, hashArray(seatHashes, "bytes32")])) as `0x{string}`
    const purchaseDataHash = ethers.utils.keccak256(defaultAbiCoder.encode(["bytes32", "bytes32", "address", "uint96", "uint256"], [PURCHASE_DATA_TYPEHASH, ticketDataHash, purchaseData.user, purchaseData.nonce]))
    return purchaseDataHash
}
//*/