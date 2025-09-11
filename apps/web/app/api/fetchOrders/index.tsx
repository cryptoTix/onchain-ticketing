import { Address } from "viem";
import { ApiResponse, MovieInterface, OrderHistoryRequestInterface, OrderHistoryResponseInterface, OrderMetadata } from "../../../../../shared";
import { toast } from "react-hot-toast";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

/**
 * Fetches all orders for a given wallet address.
 * @param address user's wallet address
 */
export async function fetchOrders(user : Address): Promise<OrderMetadata[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/fetchOrders?user=${user}`, {
      method: "GET",
    });
    console.log(res)
    if (!res.ok) {
        toast.error(`Failed to fetch movies`)
        return [];
    }
    const data: ApiResponse<OrderHistoryResponseInterface> = await res.json();
    return data.data.orders.sort((a ,b) => b.paymentData.originTimestampUTC - a.paymentData.originTimestampUTC);

  } catch (err: any) {
    toast.error(`Failed to fetch orders`)
    return [];
  }
}
