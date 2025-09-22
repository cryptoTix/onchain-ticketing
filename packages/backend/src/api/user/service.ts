import { LargeNumberLike } from "crypto";
import { Address } from "viem";
import { OrderHistoryResponseInterface } from "shared";
import { GetOrdersMutex, readOrderHistory } from "../../helpers/ticketHelpers";

export async function fetchUserOrders(user: Address) : Promise<OrderHistoryResponseInterface> {
  const mutex = GetOrdersMutex(user)
  let obj : OrderHistoryResponseInterface;
  {
    using _ = await mutex.lockRO()
    obj = { orders : readOrderHistory(user)}
  }
  return obj
}