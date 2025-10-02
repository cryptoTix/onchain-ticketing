import { Address } from "viem";
import { BookingData } from "./booking";
import { MovieInterface } from "./movie";

export interface OrderMetadata extends BookingData {
    orderId : string;
    isCancelled? : boolean;
    awaitingRefund? : boolean;
};

export interface OrderHistoryRequestInterface {
  user? : Address;
  bookingId? : string
}

export interface OrderHistoryResponseInterface {
  orders : OrderMetadata[]
}