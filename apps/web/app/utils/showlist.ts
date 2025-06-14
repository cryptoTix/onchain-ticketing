import { ShowInterface } from "../models/show";
import "../../public/Frame_36.png";
import { PaymentMetadata } from "../models/paymentRequest";
import { Hex } from "viem";
import {  } from "../../../../packages/contracts/ts-artifacts/PurchaseLib.sol/PurchaseLib";
import { Asset } from "../models/seller";
import { Asset } from "next/font/google";

type FetchShowsParams = {
  showFeatured?: boolean;
};

const showMap: Record<string, ShowInterface> = {
  '0' : {
    id: "0",
    name: "Furiosa",
    image: "/Movie.png",
    genre: "Thriller",
    duration: "01:20 Hrs",
    actor: "Chandu",
    rating: "4.9",
}, 
  '1' : {
    id: "1",
    name: "IF",
    image: "/Movie_1.png",
    genre: "Comedy",
    duration:"2:40 Hrs",
    actor: "mama",
    rating: "4.98",
}, 
  '2' : {
    id: "2",
    name: "Civil War",
    image: "/Movie_2.png",
    genre: "Action",
    duration:"2:40 Hrs",
    actor: "amgay",
    rating: "3.98",
}, 
  '3' : {
    id: "3",
    name: "DUHH",
    image: "/Movie_3.png",
    genre: "WDYT",
    duration:"2:40 Hrs",
    actor: "duhh",
    rating: "3.78",
}, 
};

// Fetch properties from the API
export async function fetchShows({
  showFeatured = false,
}: FetchShowsParams = {}) {
    const shows = [] as ShowInterface[];
    for (const key in showMap) {
      shows.push(showMap[key]!);
    }
    return shows;
//   try {
//     if (!apiDomain) return showFeatured ? [] : { properties: [], total: 0 };
//     const response = await fetch(
//       `${apiDomain}/properties${showFeatured ? "/featured" : ""}`,
//       {
//         cache: "no-store",
//       }
//     );
//     if (!response.ok) throw new Error("Failed to fetch data");
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//     return showFeatured ? [] : { properties: [], total: 0 };
//   }
}

// Fetch a single property from the API
export async function fetchShow(
  id: string
): Promise<ShowInterface | null> {
  return showMap[id]!;
  // try {
  //   if (!apiDomain) return null;
  //   const response = await fetch(`${apiDomain}/properties/${id}`);
  //   if (!response.ok) throw new Error("Failed to fetch data");
  //   return await response.json();
  // } catch (error) {
  //   console.log(error);
  //   return null;
  // }
}
const acceptedAssets : Asset[] = [{
  name : "USD Coin",
  symbol: "USDC",
  chainId: 1,
  address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" as `0x{string}`
},
{
  name : "USD Coin",
  symbol: "USDC",
  chainId: 31337,
  address: "0x41a78AA83bb0274b2CC60c31534E8500AD571eaA" as `0x{string}`
}]

export async function fetchSellerAcceptedAssets(sellerId : string) : Promise<Asset[]> {
  return acceptedAssets;
}