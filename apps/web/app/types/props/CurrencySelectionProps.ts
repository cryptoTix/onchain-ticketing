import { Address } from "viem";
import { SeatClass } from "../../../../../shared";
import { ShowDetailsProp } from "./ShowDetailsProps";

export interface CurrencySelectionProps extends ShowDetailsProp {
  sellerId : string;
  selectedSeats : Record<string, SeatClass>;
  totalPrice : number;
  ticketOwner : Address;
  onClickPrevious : () => void;
  onClickPurchase : (bookingId : string) => void;
  onChangeCustomOwnerAddress : (addr : string) => void;
  resetCustomOwnerAddress : () => void;
}