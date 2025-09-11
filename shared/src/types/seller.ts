import { ShowInterface, ShowType } from "./movie";


export type SellerMetadataInterface = {
    id : string;
    name : string;
    location : string;
    utcTimeDiff : number;
}

export type SellerInterface = SellerMetadataInterface & {
    shows : Record<ShowType, ShowInterface[]>;
}

export type SellerRequestInterface = {
    movieId : string;
    showDate : number;
}

export type SellerShowIdRequestInterface = {
    sellerId : string;
    showId : string;
}

export type SellerShowIdInterface = SellerMetadataInterface & {
    show : ShowInterface
}