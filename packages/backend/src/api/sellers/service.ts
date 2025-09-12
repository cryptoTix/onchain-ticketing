import { SellerShowIdInterface, SellerCurrencyResponseInterface, BookingValidationData, BookingValidationResponse, PaymentMetadata, PaymentMetadataRequest, PaymentMetadataResponse, getTicketStruct, SeatClass, BookingDataRequest, BookingDataResponse, SeatData, SellerRequestInterface } from "../../../../../shared/index";
import { SellerInterface } from "../../../../../shared";
import { getAllSellerShowsForMovie, findSellerShowById } from "../../helpers/sellerShows";
import { getAssetAddress, getMasterContract, getPriceToCurrencyExponent, getSellerCurrencies } from "../../helpers/cryptoCurrencies";
import { getOrCreateSeatLayout, updateSeatLayoutFile } from "../../helpers/seatLayout";
import { LOCK_DURATION_SEC, PRIVATE_KEY } from "../../helpers/consts";
import { Hex, hexToBigInt, keccak256 } from "viem";
import {MasterLib, PurchaseLib, TicketLib} from "../../../../../typechain-types/src/Master"
import { AbiCoder, ethers } from "ethers";
import { Master__factory } from "../../../../../typechain-types";
import { privateKeyToAccount } from "viem/accounts";
import { getBookingById, setBookingById } from "../../helpers/bookingHelpers";
import crypto from "crypto";
import { getMovies } from "../movies/service";
import { fetchSellerShowId } from "./controller";
import { Mutex } from "mutex-ts";
import { paymetSyncerCron } from "../../cron/paymentStatusSyncer";

// {
//   id: "grand-indonesia-cgv",
//   name: "Grand Indonesia CGV",
//   location: "JL. MH. TAHRIN NO.1",
//   formats: [
//     { type: "Regular 2D", price: "20.88 USD", times: ["11:00", "13:45", "14:40", "15:40", "17:15"] },
//     { type: "Gold Class 2D", price: "20.88 USD", times: ["12:40", "15:40", "18:35", "17:10"] },
//   ],
// },
// {
//   id: "mangga-dua-cinepolis",
//   name: "Mangga Dua Square Cinépolis",
//   location: "JL. MH. TAHRIN NO.1",
//   formats: [{ type: "2D", price: "20.88 USD", times: ["13:45", "17:15", "20:00"] }],
// },
// {
//   id: "plaza-indonesia-xxi",
//   name: "Plaza Indonesia XXI",
//   location: "JL. MH. TAHRIN NO.1",
//   formats: [{ type: "2D", price: "Rp. 50.000", times: ["12:10", "16:45", "19:45"] }],
// },
// TODO: Fetch these from api. (showId) => {sellersData}
// Map of movie Id to sellers
const sellers : Record<string, SellerInterface[]> = {
    "0" : [
        {
            id : "0",
            name: "INOX",
            location: "BHOPAL",
            utcTimeDiff : 0,
            shows : {
                "2D": [
                    {
                        id: "0",
                        movieId: "0",
                        type: "2D",
                        price: 5.4,
                        showTime: new Date(Date.now()).setHours(10, 0, 0, 0),
                        screenId: "2"
                    },
                    {
                        id: "1",
                        movieId: "0",
                        type: "2D",
                        price: 5.4,
                        showTime: new Date(Date.now()).setHours(10, 30, 0, 0),
                        screenId: "2"
                    },
                    {
                        id: "2",
                        movieId: "0",
                        type: "2D",
                        price: 5.4,
                        showTime: new Date(Date.now()).setHours(12, 0, 0, 0),
                        screenId: "2"
                    },
                    {
                        id: "3",
                        movieId: "0",
                        type: "2D",
                        price: 5.4,
                        showTime: new Date(Date.now()).setHours(17, 0, 0, 0),
                        screenId: "2"
                    },
                ],
                "3D": [
                    {
                        id: "4",
                        movieId: "0",
                        type: "3D",
                        price: 5.4,
                        showTime: new Date(Date.now()).setHours(14, 0, 0, 0),
                        screenId: "2"
                    },
                    {
                        id: "5",
                        movieId: "0",
                        type: "3D",
                        price: 5.4,
                        showTime: new Date(Date.now()).setHours(16, 0, 0, 0),
                        screenId: "2"
                    },
                    {
                        id: "6",
                        movieId: "0",
                        type: "3D",
                        price: 5.4,
                        showTime: new Date(Date.now()).setHours(23, 59, 0, 0),
                        screenId: "2"
                    },
                    {
                        id: "7",
                        movieId: "0",
                        type: "3D",
                        price: 5.4,
                        showTime: new Date(Date.now() + 24 * 60 * 60 * 1000).setHours(10, 0, 0, 0),
                        screenId: "2"
                    },
                ]
            }
        },
        {
            id : "1",
            name: "PVR",
            location: "DELHI",
            utcTimeDiff : 0,
            shows : {
                "2D": [
                {
                    id : "0",
                    movieId : "0",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(11, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "1",
                    movieId : "0",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(11, 30, 0, 0),
                    screenId : "2"
                },
                {
                    id : "2",
                    movieId : "0",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(12, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "3",
                    movieId : "0",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(19, 0, 0, 0),
                    screenId : "2"
                },
            ],
            "3D" :[
                {
                    id : "4",
                    movieId : "0",
                    type : "3D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(13, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "5",
                    movieId : "0",
                    type : "3D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(17, 0, 0, 0),
                    screenId : "2"
                },
            ]    
            }
        },
        {
            id : "2",
            name: "Test Ver",
            location: "MUMBAI",
            utcTimeDiff : 0,
            shows : {
                "2D": [
                {
                    id : "0",
                    movieId : "0",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(11, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "1",
                    movieId : "0",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(11, 30, 0, 0),
                    screenId : "2"
                },
                {
                    id : "2",
                    movieId : "0",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(12, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "3",
                    movieId : "0",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(19, 0, 0, 0),
                    screenId : "2"
                },
            ],
            "3D" :[
                {
                    id : "4",
                    movieId : "0",
                    type : "3D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(13, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "5",
                    movieId : "0",
                    type : "3D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(17, 0, 0, 0),
                    screenId : "2"
                },
            ]    
            }
        }
    ],
    "1" : [
        {
            id : "0",
            name: "INOX",
            location: "BHOPAL",
            utcTimeDiff : 0,
            shows : {
                "2D": [
                {
                    id : "0",
                    movieId : "1",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(11, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "1",
                    movieId : "1",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(11, 30, 0, 0),
                    screenId : "2"
                },
                {
                    id : "2",
                    movieId : "1",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(12, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "3",
                    movieId : "1",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(19, 0, 0, 0),
                    screenId : "2"
                },
            ],
            "3D" :[
                {
                    id : "4",
                    movieId : "1",
                    type : "3D",
                    price : 6.4,
                    showTime : new Date(Date.now()).setHours(13, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "5",
                    movieId : "1",
                    type : "3D",
                    price : 6.4,
                    showTime : new Date(Date.now()).setHours(17, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "5",
                    movieId : "1",
                    type : "3D",
                    price : 6.4,
                    showTime : new Date(Date.now()).setHours(20, 0, 0, 0),
                    screenId : "2"
                },
            ]    
            }
        },
        {
            id : "1",
            name: "PVR",
            location: "DELHI",
            utcTimeDiff : 0,
            shows : {
                "2D": [
                {
                    id : "0",
                    movieId : "1",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(11, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "1",
                    movieId : "1",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(11, 30, 0, 0),
                    screenId : "2"
                },
                {
                    id : "2",
                    movieId : "1",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(12, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "3",
                    movieId : "1",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(19, 0, 0, 0),
                    screenId : "2"
                },
            ],
            "3D" :[
                {
                    id : "4",
                    movieId : "1",
                    type : "3D",
                    price : 6.4,
                    showTime : new Date(Date.now()).setHours(13, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "5",
                    movieId : "1",
                    type : "3D",
                    price : 6.4,
                    showTime : new Date(Date.now()).setHours(17, 0, 0, 0),
                    screenId : "2"
                },
            ]    
            }
        },
        {
            id : "2",
            name: "Test Ver",
            location: "MUMBAI",
            utcTimeDiff : 0,
            shows : {
                "2D": [
                {
                    id : "0",
                    movieId : "1",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(11, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "1",
                    movieId : "1",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(11, 30, 0, 0),
                    screenId : "2"
                },
                {
                    id : "2",
                    movieId : "1",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(12, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "3",
                    movieId : "1",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(19, 0, 0, 0),
                    screenId : "2"
                },
            ],
            "3D" :[
                {
                    id : "4",
                    movieId : "1",
                    type : "3D",
                    price : 6.4,
                    showTime : new Date(Date.now()).setHours(13, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "5",
                    movieId : "1",
                    type : "3D",
                    price : 6.4,
                    showTime : new Date(Date.now()).setHours(17, 0, 0, 0),
                    screenId : "2"
                },
            ]    
            }
        }
    ],
    "2" : [
        {
            id : "0",
            name: "INOX",
            location: "BHOPAL",
            utcTimeDiff : 0,
            shows : {
                "2D": [
                {
                    id : "0",
                    movieId : "2",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(11, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "1",
                    movieId : "2",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(11, 30, 0, 0),
                    screenId : "2"
                },
                {
                    id : "2",
                    movieId : "2",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(12, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "3",
                    movieId : "2",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(19, 0, 0, 0),
                    screenId : "2"
                },
            ],
            "3D" :[
                {
                    id : "4",
                    movieId : "2",
                    type : "3D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(13, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "5",
                    movieId : "2",
                    type : "3D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(17, 0, 0, 0),
                    screenId : "2"
                },
            ]    
            }
        },
        {
            id : "1",
            name: "PVR",
            location: "DELHI",
            utcTimeDiff : 0,
            shows : {
                "2D": [
                {
                    id : "0",
                    movieId : "2",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(11, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "1",
                    movieId : "2",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(11, 30, 0, 0),
                    screenId : "2"
                },
                {
                    id : "2",
                    movieId : "2",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(12, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "3",
                    movieId : "2",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(19, 0, 0, 0),
                    screenId : "2"
                },
            ],
            "3D" :[
                {
                    id : "4",
                    movieId : "2",
                    type : "3D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(13, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "5",
                    movieId : "2",
                    type : "3D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(17, 0, 0, 0),
                    screenId : "2"
                },
            ]    
            }
        },
        {
            id : "2",
            name: "Test Ver",
            location: "MUMBAI",
            utcTimeDiff : 0,
            shows : {
                "2D": [
                {
                    id : "0",
                    movieId : "2",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(11, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "1",
                    movieId : "2",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(11, 30, 0, 0),
                    screenId : "2"
                },
                {
                    id : "2",
                    movieId : "2",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(12, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "3",
                    movieId : "2",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(19, 0, 0, 0),
                    screenId : "2"
                },
            ],
            "3D" :[
                {
                    id : "4",
                    movieId : "2",
                    type : "3D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(13, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "5",
                    movieId : "2",
                    type : "3D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(17, 0, 0, 0),
                    screenId : "2"
                },
            ]    
            }
        }
    ],
    "3" : [
        {
            id : "0",
            name: "INOX",
            location: "BHOPAL",
            utcTimeDiff : 0,
            shows : {
                "2D": [
                {
                    id : "0",
                    movieId : "3",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(11, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "1",
                    movieId : "3",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(11, 30, 0, 0),
                    screenId : "2"
                },
                {
                    id : "2",
                    movieId : "3",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(12, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "3",
                    movieId : "3",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(19, 0, 0, 0),
                    screenId : "2"
                },
            ],
            "3D" :[
                {
                    id : "4",
                    movieId : "3",
                    type : "3D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(13, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "5",
                    movieId : "3",
                    type : "3D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(17, 0, 0, 0),
                    screenId : "2"
                },
            ]    
            }
        },
        {
            id : "1",
            name: "PVR",
            location: "DELHI",
            utcTimeDiff : 0,
            shows : {
                "2D": [
                {
                    id : "0",
                    movieId : "3",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(11, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "1",
                    movieId : "3",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(11, 30, 0, 0),
                    screenId : "2"
                },
                {
                    id : "2",
                    movieId : "3",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(12, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "3",
                    movieId : "3",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(19, 0, 0, 0),
                    screenId : "2"
                },
            ],
            "3D" :[
                {
                    id : "4",
                    movieId : "3",
                    type : "3D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(13, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "5",
                    movieId : "3",
                    type : "3D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(17, 0, 0, 0),
                    screenId : "2"
                },
            ]    
            }
        },
        {
            id : "2",
            name: "Test Ver",
            location: "MUMBAI",
            utcTimeDiff : 0,
            shows : {
                "2D": [
                {
                    id : "0",
                    movieId : "3",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(11, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "1",
                    movieId : "3",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(11, 30, 0, 0),
                    screenId : "2"
                },
                {
                    id : "2",
                    movieId : "3",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(12, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "3",
                    movieId : "3",
                    type : "2D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(19, 0, 0, 0),
                    screenId : "2"
                },
            ],
            "3D" :[
                {
                    id : "4",
                    movieId : "3",
                    type : "3D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(13, 0, 0, 0),
                    screenId : "2"
                },
                {
                    id : "5",
                    movieId : "3",
                    type : "3D",
                    price : 5.4,
                    showTime : new Date(Date.now()).setHours(17, 0, 0, 0),
                    screenId : "2"
                },
            ]    
            }
        }
    ],
};
const seatMutex = new Mutex();

export async function getSellers(req: SellerRequestInterface): Promise<SellerInterface[]> {
    const dateStr = req.showDate;
    if (!dateStr) {
        throw("invalid showDate sent");
    }
    const sellersForMovie = await getAllSellerShowsForMovie(dateStr, req.movieId);

    // Apply additional filters:
    // 1) If location is provided, match seller location
    const filtered: SellerInterface[] = [];

    for (const s of sellersForMovie) {
        if (req.location && req.location.localeCompare(s.location) !== 0) {
            continue;
        }
        const showsByType: typeof s.shows = {} as any;
        for (const [type, arr] of Object.entries(s.shows)) {
            if (arr.length > 0) {
                showsByType[type as keyof typeof s.shows] = arr;
            }
        }
        if (Object.keys(showsByType).length > 0) {
            filtered.push({ ...s, shows: showsByType });
        }
    }

    return filtered;
}

export async function getSellerShowId(sellerId: string, showId : string) : Promise<SellerShowIdInterface | undefined> {
    return findSellerShowById(sellerId, showId)
    /*
    let res : (SellerShowIdInterface) | undefined = undefined;
    Object.entries(sellers).map(([_, sellers]) => {
        if (res) {
            return
        }
        sellers.forEach(seller => {
            if (seller.id.localeCompare(sellerId) == 0) {
                Object.entries(seller.shows).map(([_, shows]) => {
                    shows.forEach(show => {
                        if(show.id.localeCompare(showId) == 0) {
                            res = {
                                id : seller.id,
                                location : seller.location,
                                name : seller.name,
                                utcTimeDiff : seller.utcTimeDiff,
                                show : show
                            }
                        }
                    })
                })
            }
        })
    })
    return res;
    */
}

export async function getSellerCyrptoCurrency(sellerId: string) : Promise<SellerCurrencyResponseInterface> {
    return await getSellerCurrencies(sellerId);
}

export async function getSeatLayout(showId: string, sellerId: string) {
    return getOrCreateSeatLayout(sellerId, showId);
}

export async function validateBookingMetadata(data : BookingValidationData) : Promise<BookingValidationResponse> {
    console.log("got booking request for", data)
    const res : BookingValidationResponse = {
        isValid : true
    }
    // need mutex lock for get to set
    const release = await seatMutex.obtain();
    try {
        const seatLayout = await getSeatLayout(data.showId, data.sellerId);
        let selectedSeatIdx = 0;
        let found = true;
        while (found) {
            found = false;
            console.log("findig seat", data.selectedSeats[selectedSeatIdx], selectedSeatIdx, data.selectedSeats.length)
            Object.entries(seatLayout.seatClassMap).map(([_, blockData]) => {
                if (!res.isValid || selectedSeatIdx == data.selectedSeats.length || found) {
                    return
                }
                for (let i = 0; i < blockData.length; i++) {
                    const rowData = blockData[i];
                    for (let j = 0; j < rowData.length; j++) {
                        if (rowData[j].isSeat) {                        
                            const seatData = new SeatClass(rowData[j].seatData!);
                            const selectedSeatId = data.selectedSeats[selectedSeatIdx];
                            // console.log(seatData)
                            if (selectedSeatId.localeCompare(seatData.id) == 0) {
                                console.log("found seatId", selectedSeatId, selectedSeatIdx)
                                if (seatData.isBooked || seatData.isLocked) {
                                    console.log("seat already booked", seatData)
                                    res.isValid = false;
                                } else {
                                    console.log("locking seats", seatData)
                                    // lock the seats
                                    rowData[j].seatData!.lockedTill = new Date(Date.now() + LOCK_DURATION_SEC * 1000).getTime()
                                }
                                found = true;
                                selectedSeatIdx++;
                                return;
                            }
                        }
                    }
                }
            })
        }
        if (selectedSeatIdx != data.selectedSeats.length) {
            console.log("invalid selected seats")
            res.isValid = false;
        }
        if (res.isValid) {
            // locks the seat in backend
            updateSeatLayoutFile(data.sellerId, data.showId, seatLayout);
            const payemtMetadata = await createPaymentMetadataObj(data)
            if (!payemtMetadata) {
                release()
                return res
            }
            res.bookingId = await generateURL();
            setBookingById(res.bookingId, payemtMetadata)
            const bookingDataObj = await fetchBookingDataByBookingId({bookingId : res.bookingId})
            if (bookingDataObj) {
                paymetSyncerCron.AddPendingOrderData(bookingDataObj)
            } else {

            }
        }
    } catch (err) {
        console.log("got error",err)
    } finally {
        release()
    }
    return res;
}

export async function fetchBookingDataByBookingId(req : BookingDataRequest) : Promise<BookingDataResponse | null> {
    const paymentData = getBookingById(req.bookingId)
    if (paymentData) {
        const movie = await getMovies({movieId : paymentData.movieId})
        if (movie.length != 1 || (!movie[0].name || movie[0].name === "")) {
            return null
        }
        const movieName = movie[0].name;
        const seller = sellers[paymentData.movieId]
        if (!seller || seller.length == 0) {
            return null
        }
        const showInterface = await getSellerShowId(paymentData.sellerId, paymentData.showId)
        if (!showInterface) {
            return null;
        }
        const seats = await getSelectedSeats(paymentData.selectedSeats, paymentData.showId, paymentData.sellerId)
        return {
            movieName,
            seller : {
                id : showInterface.id,
                name : showInterface.name,
                location : showInterface.location,
                utcTimeDiff : showInterface.utcTimeDiff
            },
            show : showInterface.show,
            seats,
            paymentData : paymentData
        }
    }
    return null;
}

async function createPaymentMetadataObj(data: BookingValidationData) : Promise<PaymentMetadata | null> {
    const seatPrices : number[] = [];
    var totalAmount : number = 0;
    const seatLayout = await getSeatLayout(data.showId, data.sellerId);
    for (let k = 0; k < data.selectedSeats.length; k++) {
    Object.entries(seatLayout.seatClassMap).map(([_, blockData]) => {
        for (let i = 0; i < blockData.length; i++) {
            const rowData = blockData[i];
            for (let j = 0; j < rowData.length; j++) {
                const seatData = rowData[j];
                    if (seatData.isSeat) {
                        const selectedSeatId = data.selectedSeats[k];
                        if (selectedSeatId.localeCompare(seatData.seatData!.id) == 0) {
                            seatPrices.push(seatData.seatData!.price)
                        }
                    }
                }
            }
        })
    }
    for (let i = 0; i < seatPrices.length; i++) {
        seatPrices[i] = await getPriceToCurrencyExponent(seatPrices[i], data.selectedChain, data.selectedCurrency);
        totalAmount += seatPrices[i];
    }

    if (seatPrices.length != data.selectedSeats.length) {
        console.log("mismathc lengths", seatPrices.length , data.selectedSeats.length)
        return null
    }
    const showTime = await getSellerShowId(data.sellerId, data.showId);
    const asset = await getAssetAddress(data.selectedChain, data.selectedCurrency)
    const masterContract = await getMasterContract(data.selectedChain, data.sellerId)
    let nowSeconds = Date.now()
    nowSeconds -= nowSeconds%1000;
    nowSeconds/=1000;
    const utcSeconds = nowSeconds;
    if (!showTime || !asset || !masterContract) {
        return null
    }
    const paymentMetadata: PaymentMetadata = {...data, 
        showTime : showTime.show.showTime - showTime.utcTimeDiff,
        seatPrices : seatPrices,
        totalAmount : totalAmount,
        asset,
        masterContract,
        originTimestampUTC : utcSeconds,
        purchaseDataHash : `0x`,
        validationSignature : `0x`
    }
    paymentMetadata.showTime = paymentMetadata.showTime - paymentMetadata.showTime % 1000;
    paymentMetadata.showTime /= 1000;
    const res = await signMetadata(paymentMetadata)
    paymentMetadata.purchaseDataHash = res[0]
    paymentMetadata.validationSignature = res[1]
    return paymentMetadata;
}

async function signMetadata(data: PaymentMetadata) : Promise<[Hex, Hex]> {
    const ticketData = getTicketStruct(data)
    // Need the url to fetched from config
    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
    const signer = privateKeyToAccount(PRIVATE_KEY);
    const masterContract = Master__factory.connect(data.masterContract, provider)
    console.log(ticketData)
    const signatureHash = await masterContract.getPurchaseDataSignatureHash(ticketData) as Hex;
    console.log(signatureHash)
    const verificationSignature = await signer.sign({hash : signatureHash})
    console.log(verificationSignature)
    return [signatureHash, verificationSignature]
}

async function generateURL() : Promise<string> {
    return crypto.randomUUID();
}

async function getSelectedSeats(selectedSeatIds: string[], showId : string, sellerId : string) : Promise<SeatData[]> {
    const seatLayout = await getSeatLayout(showId, sellerId);
    let selectedSeatIdx = 0;
    const seats : SeatData[] = [];
    let found = true;
    while (found) {
        found = false;
        Object.entries(seatLayout.seatClassMap).map(([_, blockData]) => {
            if (selectedSeatIdx == selectedSeatIds.length || found) {
                return
            }
            for (let i = 0; i < blockData.length; i++) {
                const rowData = blockData[i];
                for (let j = 0; j < rowData.length; j++) {
                    if (rowData[j].isSeat) {                        
                        const seatData = new SeatClass(rowData[j].seatData!);
                        const selectedSeatId = selectedSeatIds[selectedSeatIdx];
                        if (selectedSeatId.localeCompare(seatData.id) == 0) {
                            seats.push(rowData[j].seatData!)
                            found = true;
                            selectedSeatIdx++;
                            return;
                        }
                    }
                }
            }
        })
    }
    return seats
}

// async function bookingSanityChecks(data : BookingValidationData) : Promise<boolean> {
//     const sellers = await getSellers({movieId: data.movieId, showDate : Date.now()})
//     let isValid = false;
//     sellers.forEach((seller) => {
//         if(seller.id.localeCompare(data.sellerId) == 0) {
//             Object.entries(seller.shows).map(([_, shows]) => {
//                 shows.forEach(show => {
//                     if (show.id.localeCompare(data.showId) == 0 && show.showTime >= Date.now()) {
//                         isValid = true;
//                     }
//                 })
//             })
//         }
//     })
//     return isValid;
// }
