import { Request, Response } from "express";
import { getSeatLayout } from "./service";
import { ApiResponse, MovieInterface, MovieRequestInterface, SeatLayout, SeatLayoutRequest } from "shared";

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
