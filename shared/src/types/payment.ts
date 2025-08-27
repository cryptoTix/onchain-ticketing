import { Address, Hex } from "viem";
import { BookingValidationData } from "./booking";
// export interface PaymentMetadata {
//   paymentRequestId : string,
//   contract : `0x{string}`
//   purchaseData : PurchaseData,
//   signature : `0x{string}`,
//   chainId : number,
// }


// export interface PurchaseData {
//   ticketData: TicketData;
//   nonce: bigint;
// };

// export interface TicketData {
//   asset: `0x{string}`;
//   showTime: bigint;
//   owner: `0x{string}`;
//   amount: bigint;
//   showId: bigint;
//   originTimestamp: bigint;
//   seats: SeatData[];
// };

// export interface SeatData {
//   seatId: bigint;
//   price: bigint 
// }

export interface PaymentMetadata extends BookingValidationData {
  showTime : number;
  seatPrices : number[];
  totalAmount : number;
  asset : Address;
  masterContract : Address;
  originTimestampUTC : number;
  purchaseDataHash : Hex;
  validationSignature : Hex;
}

export interface PaymentMetadataRequest { 
  bookingId : string
}

export interface PaymentMetadataResponse extends PaymentMetadata {}