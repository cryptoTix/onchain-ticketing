import { ShowType } from "../../../../../shared";

export interface ShowState {
    showId : string;
    sellerId: string;
    sellerName : string;
    sellerLocation : string;
    showTime : Date;
    showType : ShowType;
}