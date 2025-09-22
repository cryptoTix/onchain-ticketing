import { ApiResponse, SeatLayout, SeatLayoutRequest, SellerInterface, SellerRequestInterface, SellerShowIdInterface, SellerShowIdRequestInterface, ShowInterface, SellerCurrencyRequestInterface, SellerCurrencyResponseInterface, BookingValidationData, BookingValidationRequest, BookingValidationResponse, PaymentMetadataRequest, PaymentMetadataResponse, BookingDataRequest, BookingData, BookingDataResponse } from "../../../../../shared";
import { toast } from "react-hot-toast";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

/**
 * Fetches all movie order metadata from the backend for a given wallet address.
 * @param address user's wallet address
 */
export async function fetchSeatLayout(req: SeatLayoutRequest): Promise<SeatLayout> {
  try {
    console.log("fetching seat layout", req)
    const res = await fetch(`${BASE_URL}/api/seatlayout?showId=${req.showId}&&sellerId=${req.sellerId}`, {
      method: "GET",
    });
    console.log("sellers data:",res)
    if (!res.ok) {
        toast.error(`Failed to fetch sellers`)
        return {
            seatClassMap : {}
        };
    }
    const data: ApiResponse<SeatLayout> = await res.json();
    return data.data;

  } catch (err: any) {
    toast.error(`Failed to sellers layout pls try again`)
    return {
        seatClassMap : {}
    };
  }
}

export async function fetchSellers(req: SellerRequestInterface): Promise<SellerInterface[]> {
    try {
      console.log("fetching sellers with", req)
      const res = await fetch(`${BASE_URL}/api/sellers?movieId=${req.movieId}&&showDate=${req.showDate}&&location=${req.location}`, {
        method: "GET",
      });
      console.log("sellers data:",res)
      if (!res.ok) {
          toast.error(`Failed to fetch sellers`)
          return [];
      }
      if(res.status == 204) {
        return [] 
      } else {
        const data: ApiResponse<SellerInterface[]> = await res.json();
        return data.data;
      }
  
    } catch (err: any) {
      toast.error(`Failed to fetch sellers, pls try again`)
      return [];
    }
}

export async function fetchSellerShowData(req: SellerShowIdRequestInterface): Promise<SellerShowIdInterface | null> {
    try {
        console.log("fetching seller's showId with", req)
        const res = await fetch(`${BASE_URL}/api/sellers/showDetails?sellerId=${req.sellerId}&&showId=${req.showId}`, {
          method: "GET",
        });
        console.log("sellers data:",res)
        if (!res.ok) {
            toast.error(`Failed to fetch sellers`)
            return null;
        }
        const data: ApiResponse<SellerShowIdInterface> = await res.json();
        return data.data;
    
    } catch (err: any) {
        toast.error(`Failed to fetch sellers, pls try again`)
        return null;
    }
}

export async function fetchSellerAcceptedCurrencies(req : SellerCurrencyRequestInterface): Promise<SellerCurrencyResponseInterface> {
    try {
        console.log("fetching seller's showId with", req)
        const res = await fetch(`${BASE_URL}/api/sellers/supportedNetworks?sellerId=${req.sellerId}`, {
          method: "GET",
        });
        console.log("seller's accepted currencies:", res)
        if (!res.ok) {
            toast.error(`Failed to fetch seller's accepted currency`)
            return null;
        }
        const data: ApiResponse<SellerCurrencyResponseInterface> = await res.json();
        return data.data;
    
    } catch (err: any) {
        toast.error(`Failed to fetch sellers, pls try again`)
        return null;
    }
}

export async function reserveSeats(req : BookingValidationRequest): Promise<BookingValidationResponse> {
  try {
      console.log("reserving seats for", req)
      const res = await fetch(`${BASE_URL}/api/sellers/validateMetadata`, {
        method: "POST",
        headers : {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
      });
      console.log("locked seats")
      if (!res.ok) {
          toast.error(`Failed to lock seats, pls refresh and try again`)
          return null;
      }
      console.log(res)
      const data: ApiResponse<BookingValidationResponse> = await res.json();
      return data.data;
  
  } catch (err: any) {
      toast.error(`Failed to fetch booking data, pls refresh and try again`)
      return null;
  }
}

export async function getBookingMetadataById(req : BookingDataRequest): Promise<BookingData> {
  try {
      console.log("fetching booking details with", req)
      const res = await fetch(`${BASE_URL}/api/sellers/fetchBookingMetadata?bookingId=${req.bookingId}`, {
        method: "GET",
      });
      console.log("Booking details:", res)
      if (!res.ok) {
          toast.error(`Failed to fetch booking details`)
          return null;
      }
      const data: ApiResponse<BookingDataResponse> = await res.json();
      return data.data;
  
  } catch (err: any) {
      toast.error(`Failed to fetch booking data, pls try again`)
      return null;
  }
}