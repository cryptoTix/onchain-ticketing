import { ShowInterface } from "./movie";
import { PaymentMetadata } from "./payment";
import { SeatData } from "./seatLayout";
import { SellerMetadataInterface } from "./seller";
import { Currency, Network } from "./sellerCurrency";
import { Address, Hex } from "viem";

export interface BookingValidationData  {
  movieId : string;
  sellerId : string;
  showId : string;
  ticketOwner : Address;
  selectedSeats : string[];
  selectedChain : Network;
  selectedCurrency : Currency;
};

export interface BookingData {
  movieName : string;
  seller : SellerMetadataInterface;
  seats : SeatData[];
  show : ShowInterface;
  paymentData : PaymentMetadata
};

export interface BookingValidationRequest extends BookingValidationData {};

export interface BookingValidationResponse  {
  isValid : boolean;
  bookingId? : string;
};

export interface BookingDataRequest {
  bookingId : string
};

export interface BookingDataResponse extends BookingData {};