import { LargeNumberLike } from "crypto";
import { Address } from "viem";
import { OrderHistoryResponseInterface } from "../../../../../shared";
import { readOrderHistory } from "../../helpers/ticketHelpers";

export async function fetchUserOrders(user: Address) : Promise<OrderHistoryResponseInterface> {
  return { orders : readOrderHistory(user)}
}