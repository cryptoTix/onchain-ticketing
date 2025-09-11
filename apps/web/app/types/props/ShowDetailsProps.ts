import { SellerShowIdInterface } from "../../../../../shared";
import { MovieInterface } from "../../models/movie";

export interface ShowDetailsProp {
    sellerAndshowDetails: SellerShowIdInterface;
    movieDetails: MovieInterface;
}