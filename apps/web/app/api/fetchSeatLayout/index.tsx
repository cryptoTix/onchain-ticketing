import { ApiResponse, SeatLayout, SeatLayoutRequest, SellerInterface } from "../../../../../shared";
import { toast } from "react-hot-toast";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

/**
 * Fetches all movie order metadata from the backend for a given wallet address.
 * @param address user's wallet address
 */
export async function fetchSeatLayout(req: SeatLayoutRequest): Promise<SeatLayout> {
  try {
    console.log("fetching seat layout", req)
    const res = await fetch(`${BASE_URL}/api/sellers/seatlayout?showId=${req.showId}&&sellerId=${req.sellerId}`, {
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
    toast.error(`Failed to fetch sellers`)
    return {
        seatClassMap : {}
    };
  }
}
