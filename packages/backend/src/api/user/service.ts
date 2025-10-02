import { Address } from "viem";
import { OrderHistoryResponseInterface } from "shared";
import { GetOrdersMutex, readOrderHistory } from "../../helpers/ticketHelpers";
import { getBookingById } from "../../helpers/bookingHelpers";
import assert from "assert";

export async function fetchUserOrders(user?: Address, bookingId?: string) : Promise<OrderHistoryResponseInterface> {
  if (!user && !bookingId) {
    return { orders : []}
  }
  if (bookingId) {
    const data = getBookingById(bookingId);
    if (!data) {
      return {orders : []}
    }
    user = data.paymentData.ticketOwner
  }
  assert(user, "User should be defined or populated")
  const mutex = GetOrdersMutex(user)
  let obj : OrderHistoryResponseInterface;
  {
    using _ = await mutex.lockRO()
    obj = { orders : readOrderHistory(user)}
  }
  if (bookingId) {
    return { orders: obj.orders.filter((order) => order.bookingId.localeCompare(bookingId) == 0)}
  }
  return obj
}