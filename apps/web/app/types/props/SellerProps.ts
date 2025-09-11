import { SellerInterface } from "../../../../../shared";
import { ShowState } from "../state/ShowState";

export interface SellerProps {
    sellerData : SellerInterface;
    index : number;
    selectedDate : Date;
    onSelectShowId: (show: ShowState) => void;
}
  