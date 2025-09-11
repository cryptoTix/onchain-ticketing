import { SellerInterface } from "../../../../../shared";
import { ShowState } from "../state/ShowState";

export interface SellerProps {
    sellerData : SellerInterface;
    index : number;
    selectedShowId : string;
    onSelectShowId: (show: ShowState) => void;
}
  