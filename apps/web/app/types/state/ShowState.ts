import { ShowType } from "../../../../../shared";

export interface ShowState {
    showId : string;
    sellerId: string;
    sellerName : string;
    sellerLocation : string;
    showTime : number;
    showType : ShowType;
    sellerUTCTDiff : number;
}