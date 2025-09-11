import Decimal from "decimal.js"

export interface PaymentMetadata {
    requestId: string,
    sellerId : string,
    showId: string,
    showTime: number,
    seatIds : string[],
    totalPrice : Decimal,
}

export interface PaymentRequest {
    user : `0x{string}`,
    sellerId : string,
    showId: string,
    showTime: string,
    seatIds : string[],
}

export interface ValidationSignatureRequest {
    paymentRequestId : string,
    assetAddress : `0x{string}`,
    user : `0x{string}`,
    chainId : number,
}

export interface CancelRequest {
    cancelRequest : `0x{string}`
}
// export interface ValidationSignatureResponse {
//     paymentRequestId : string,
//     contract : `0x{string}`
//     purchaseData : PurchaseData,
//     signature : `0x{string}`,
//     chainId : number,
// }

export interface ValidationSignatureResponse {
    paymentRequestId : string,
    contract : `0x{string}`
    purchaseData : PurchaseData,
    signature : `0x{string}`,
    chainId : number,
}

export interface PurchaseData  {
    ticketData: TicketData;
    nonce: bigint;
};

export interface TicketData {
    asset: `0x{string}`;
    showTime: bigint;
    owner: `0x{string}`;
    amount: bigint;
    showId: bigint;
    originTimestamp: bigint;
    seats: SeatData[];
};

export interface SeatData {
    seatId: bigint;
    price: bigint 
}