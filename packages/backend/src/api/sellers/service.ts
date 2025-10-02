import { SellerShowIdInterface, SellerCurrencyResponseInterface, BookingValidationData, BookingValidationResponse, PaymentMetadata, PaymentMetadataRequest, PaymentMetadataResponse, getTicketStruct, SeatClass, BookingDataRequest, BookingDataResponse, SeatData, SellerRequestInterface, BookingData } from "shared";
import { SellerInterface } from "shared";
import { getAllSellerShowsForMovie, findSellerShowById } from "../../helpers/sellerShows";
import { getAssetAddress, getMasterContract, getPriceToCurrencyExponent, getSellerCurrencies } from "../../helpers/cryptoCurrencies";
import { getOrCreateSeatLayout, GetSeatLock, lockSeats, unlockSeats, updateSeatLayoutFile } from "../../helpers/seatLayout";
import { LOCK_DURATION_SEC, PRIVATE_KEY } from "../../helpers/consts";
import { Hex, hexToBigInt, keccak256 } from "viem";
import { ethers } from "ethers";
import { Master__factory } from "typechain-types";
import { privateKeyToAccount } from "viem/accounts";
import { getBookingById, setBookingById } from "../../helpers/bookingHelpers";
import crypto from "crypto";
import { getMovies } from "../movies/service";
import { paymetSyncerCron } from "../../cron/paymentStatusSyncer";
import { GetCurrentUTCTimestamp } from "../../helpers/utils";
import assert from "assert";
import { getRPCProvider } from "../../helpers/chains";

export async function getSellers(req: SellerRequestInterface): Promise<SellerInterface[]> {
    const dateStr = req.showDate;
    if (!dateStr) {
        throw("invalid showDate sent");
    }
    const sellersForMovie = await getAllSellerShowsForMovie(dateStr, req.movieId);

    // Apply additional filters:
    // 1) If location is provided, match seller location
    const filtered: SellerInterface[] = [];

    const nowUTC = GetCurrentUTCTimestamp()
    for (const s of sellersForMovie) {
        if (req.location && req.location.localeCompare(s.location) !== 0) {
            continue;
        }
        const showsByType: typeof s.shows = {} as any;
        for (const [type, arr] of Object.entries(s.shows)) {
            const validShows = arr.filter((show) => show.showTime >= nowUTC)
            if (validShows.length > 0) {
                showsByType[type as keyof typeof s.shows] = validShows;
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
        isValid : false
    }
    const movie = await getMovies({movieId : data.movieId})
    if (movie.length != 1 || (!movie[0].name || movie[0].name === "")) {
        return res
    }
    const showInterface = await getSellerShowId(data.sellerId, data.showId)
    if (!showInterface) {
        return res
    }
    // need mutex lock for get to set
    const lock = GetSeatLock(data.sellerId, data.showId)
    try {
        let isLocked = false;
        {
            using _ = await lock.lockRW()
            // locks the seat in backend
            isLocked = await lockSeats(data.sellerId, data.showId, data.selectedSeats)
        }
        if (isLocked) {
            const seats = await getSelectedSeats(data.selectedSeats, data.showId, data.sellerId)
            const payemtMetadata = await createPaymentMetadataObj(data)
            console.log(payemtMetadata)
            assert(payemtMetadata, "Unable to sign data")
            assert(payemtMetadata.showTime >= Date.now() / 1000, "Can't book passed show")
            res.isValid = true
            res.bookingId = await generateURL();
            const bookingMetadataObj : BookingData = {
                bookingId : res.bookingId,
                movie : movie[0],
                seller : showInterface,
                show : showInterface.show,
                seats : seats,
                paymentData : payemtMetadata
            }
            await setBookingById(res.bookingId, bookingMetadataObj)
            paymetSyncerCron.AddPendingOrderData(bookingMetadataObj)
        }
    } catch (err) {
        console.error("got error",err)
        {
            using _ = await lock.lockRW()
            unlockSeats(data.sellerId, data.showId, data.selectedSeats)
        }
        res.isValid = false
        delete res.bookingId
    }
    return res;
}

export async function fetchBookingDataByBookingId(req : BookingDataRequest) : Promise<BookingDataResponse | null> {
    return getBookingById(req.bookingId)
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

    assert(seatPrices.length == data.selectedSeats.length, "Unable to fetch prices for all seats")
    const showTime = await getSellerShowId(data.sellerId, data.showId);
    const asset = await getAssetAddress(data.selectedChain, data.selectedCurrency)
    const masterContract = await getMasterContract(data.selectedChain, data.sellerId)
    let nowSeconds = Date.now()
    nowSeconds -= nowSeconds%1000;
    nowSeconds/=1000;
    const utcSeconds = nowSeconds;
    if (!showTime || !asset || !masterContract) {
        console.log("Couldn't fetch", showTime, asset, masterContract)
        return null
    }
    const paymentMetadata: PaymentMetadata = {...data, 
        showTime : showTime.show.showTime,
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
    const rpcUrl = await getRPCProvider(data.selectedChain);
    console.log("fetched provider for", data.selectedChain, rpcUrl)
    assert(rpcUrl && rpcUrl.localeCompare("") != 0, "No rpc url's for the chain")
    
    const provider = new ethers.JsonRpcProvider(rpcUrl, {chainId : data.selectedChain , name: "sepolia"});
    const signer = privateKeyToAccount(PRIVATE_KEY);
    const masterContract = Master__factory.connect(data.masterContract, provider)
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
