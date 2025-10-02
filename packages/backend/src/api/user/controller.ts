import { Request, Response } from "express";
import { ApiResponse, OrderHistoryRequestInterface, OrderHistoryResponseInterface } from "shared";
import { fetchUserOrders } from "./service";

export async function fetchOrders(
  req: Request<{},{},{},OrderHistoryRequestInterface>,
  res: Response<ApiResponse<OrderHistoryResponseInterface>>,
  next: any
) {
    try {
        const { user, bookingId } = req.query
        const data = await fetchUserOrders(user, bookingId);
        console.log("response for:",user,data)
        res.json({ success: true, data, statusCode : 200 });
        return
    } catch (error) {
        console.log("got err:", error)
        res.status(500).json({ success: false, statusCode : 500 });
        return
    }
}
