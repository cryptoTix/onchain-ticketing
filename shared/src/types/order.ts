import { Address } from "viem";
import { BookingData } from "./booking";
import { MovieInterface } from "./movie";

export interface OrderMetadata extends BookingData {
    orderId : string;
    movie : MovieInterface;
    isCancelled? : boolean;
};

export interface OrderHistoryRequestInterface {
  user : Address;
}

export interface OrderHistoryResponseInterface {
  orders : OrderMetadata[]
}