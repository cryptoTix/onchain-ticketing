import { paymentMetadata } from "../actions/migration";
import { OrderHistoryMetadata } from "../models/ticket";

var count = 1;
export async function fetchOrderHistory(user) : Promise<OrderHistoryMetadata[]> {
    const orders : OrderHistoryMetadata[] = [];
    for (let index = 0; index < count; index++) {
        orders.push({
            movieName: "Test",
            bookingDateTime: paymentMetadata.showTime.toString(),
            bookingId: paymentMetadata.requestId,
            quantity:  paymentMetadata.seatIds.length,
            seatNumbers: paymentMetadata.seatIds,
            screen: "1",
            ticketPrice: paymentMetadata.totalPrice.toString(),
            amountPaid:paymentMetadata.totalPrice.toString(),
            posterUrl: "/Movie_1.png"
        })
    }
    return orders
}