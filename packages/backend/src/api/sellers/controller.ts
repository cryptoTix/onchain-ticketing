import { Request, Response } from "express";
import { fetchBookingDataByBookingId, getSellerCyrptoCurrency, getSellers, getSellerShowId, validateBookingMetadata } from "./service";
import { ApiResponse, SellerInterface, SellerRequestInterface, SellerShowIdInterface, SellerShowIdRequestInterface, ShowInterface, SellerCurrencyRequestInterface, SellerCurrencyResponseInterface, BookingValidationRequest, BookingValidationResponse, PaymentMetadataRequest, PaymentMetadataResponse, BookingDataRequest, BookingDataResponse } from "../../../../../shared";
import { getSeatLayout } from "./service";
import { SeatLayout, SeatLayoutRequest } from "../../../../../shared";

export async function fetchSellers(
  req: Request<{},{},{},SellerRequestInterface>,
  res: Response<ApiResponse<SellerInterface[]>>,
  next: any
) {
    try {
        const {movieId, location, showDate}  = req.query
        if (movieId != "") {
            const data = await getSellers(req.query);
            
            console.log("Data for sellers", movieId, showDate, location, data)
            data.length > 0 ? 
            res.json({ success: true, data, statusCode : 200 }):
            res.status(204).json({ success: true, statusCode : 204 });
        } else {
            console.log("Failed to fetch sellers for:", movieId)
            res.status(400).json({ success: false, statusCode : 400 });
        }
        return
    } catch (error) {
        console.log("Failed to fetch sellers", error)
        res.status(500).json({ success: false, statusCode : 500 });
        return
    }
}

export async function fetchSellerShowId(
    req: Request<{},{},{},SellerShowIdRequestInterface>,
    res: Response<ApiResponse<SellerShowIdInterface>>,
    next: any
) {
    try {
        const sellerId  = req.query.sellerId
        const showId  = req.query.showId
        if (sellerId != "" && showId != "") {
            const data = await getSellerShowId(sellerId, showId);
            console.log("Data for seller's show",  data)
            data !== undefined ? 
            res.json({ success: true, data, statusCode : 200 }):
            res.status(404).json({ success: false, statusCode : 404 });
        } else {
            console.log("Failed to fetch sellers for:", req.query)
            res.status(400).json({ success: false, statusCode : 400 });
        }
        return
    } catch (error) {
        console.log("Failed to fetch seller's ShowId", error)
        res.status(500).json({ success: false, statusCode : 500 });
        return
    }
}

export async function fetchSupportedCurrencies(
    req: Request<{},{},{},SellerCurrencyRequestInterface>,
    res: Response<ApiResponse<SellerCurrencyResponseInterface>>,
    next: any
) {
    try {
        const sellerId  = req.query.sellerId
        if (sellerId != "") {
            const data = await getSellerCyrptoCurrency(sellerId);
            console.log("Data for seller's accepted currencies",  data)
            data !== undefined ? 
            res.json({ success: true, data, statusCode : 200 }):
            res.status(404).json({ success: false, statusCode : 404 });
        } else {
            console.log("Failed to fetch sellers for:", req.query)
            res.status(400).json({ success: false, statusCode : 400 });
        }
        return
    } catch (error) {
        console.log("Failed to fetch seller's currecy data", error)
        res.status(500).json({ success: false, statusCode : 500 });
        return
    }
}
  
export async function fetchSeatLayout(
    req: Request<{},{},{},SeatLayoutRequest>,
    res: Response<ApiResponse<SeatLayout>>,
    next: any
) {
    try {
        const {showId, sellerId} = req.query
        const data = await getSeatLayout(showId, sellerId);
        console.log("response for:", req.query, data)
        res.json({ success: true, data : data, statusCode : 200 });
        return
    } catch (error) {
        console.log("got err:", error)
        res.status(500).json({ success: false, statusCode : 500 });
        return
    }
}

export async function validateMetadata(
    req: Request<{},{}, BookingValidationRequest, {}>,
    res: Response<ApiResponse<BookingValidationResponse>>,
) {
    try {
        const data = await validateBookingMetadata(req.body);
        console.log("response for:", req.query, data)
        data.isValid ?
            res.json({ success: true, data : data, statusCode : 200 }) :
            res.status(400).json({ success: true, statusCode : 400 })
        return
    } catch (error) {
        console.log("got err:", error)
        res.status(500).json({ success: false, statusCode : 500 });
        return
    }
}

export async function getBookingMetadata(
    req: Request<{},{},{}, BookingDataRequest>,
    res: Response<ApiResponse<BookingDataResponse>>,
) {
    try {
        const { bookingId } = req.query
        if (bookingId) {
            const data = await fetchBookingDataByBookingId(req.query)
            console.log("response for:", req.query, data)
            data ? res.json({ success: true, data : data, statusCode : 200 }) :
                res.status(400).json({ success: true, statusCode : 400 })
        } else {
            res.status(400).json({ success: true, statusCode : 400 })
        }
    } catch (error) {
        console.log("got err:", error)
        res.status(500).json({ success: false, statusCode : 500 });
        return
    }
}