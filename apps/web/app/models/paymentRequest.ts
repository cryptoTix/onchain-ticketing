import Decimal from "decimal.js"
import { Address, Hex } from "viem"
import { Bytes } from "ethers";
import { } from "../../../../typechain-types";
import { PurchaseLib } from "../../../../typechain-types/src/Master";

export interface PaymentMetadata {
    requestId: string,
    sellerId : string,
    showId: string,
    showTime: Number,
    seatIds : string[],
    totalPrice : Decimal,
}

export interface PaymentRequest {
    user : Address | undefined,
    sellerId : string,
    showId: string,
    showTime: string,
    seatIds : string[],
}

export interface ValidationSignatureRequest {
    paymentRequestId : string,
    assetAddress : Address,
    chainId : number,
}

export interface ValidationSignatureResponse {
    paymentRequestId : string,
    contract : Address,
    purchaseData : PurchaseLib.PurchaseDataStruct,
    signature : string
}