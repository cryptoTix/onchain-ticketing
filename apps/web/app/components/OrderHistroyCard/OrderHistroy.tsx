import React from "react";
import Link from "next/link";
import { OrderHistoryMetadata } from "../../models/ticket";

type OrderHistoryProps = {
  orderData: OrderHistoryMetadata;
};

const OrderHistoryCard: React.FC<OrderHistoryProps> = ({ orderData }) => {
  return (
    <div className="bg-[#4B2AAD] text-white rounded-lg p-4 flex gap-4 shadow-lg max-w-4xl w-full">
      <img
        src={orderData.posterUrl}
        alt={`${orderData.movieName} poster`}
        className="w-40 h-60 object-cover rounded-md"
      />
      <div className="flex-1 flex flex-col justify-between">
        <div className="text-sm text-white/80">
          <div className="mb-2 font-light text-xs">
            <span className="text-white/70">BOOKING DATE & TIME: </span>
            {orderData.bookingDateTime}
          </div>
          <div className="text-lg font-semibold">{orderData.movieName}</div>
          <div className="mt-2 space-y-1">
            <div className="flex justify-between">
              <span>Payment Currency</span>
              <span className="font-medium">USD</span>
            </div>
            <div className="flex justify-between">
              <span>Booking ID</span>
              <span className="font-medium">{orderData.bookingId}</span>
            </div>
            <div className="flex justify-between">
              <span>Quantity</span>
              <span className="font-medium">{orderData.quantity}</span>
            </div>
            <div className="flex justify-between">
              <span>Seat No</span>
              <span className="font-medium">{orderData.seatNumbers.join(", ")}</span>
            </div>
            <div className="flex justify-between">
              <span>Screen</span>
              <span className="font-medium">{orderData.screen}</span>
            </div>
            <div className="flex justify-between">
              <span>Ticket Price</span>
              <span className="font-medium">{orderData.ticketPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount Amount</span>
              <span className="font-medium">0</span>
            </div>
            <div className="flex justify-between">
              <span>Convenience Fees</span>
              <span className="font-medium">$1</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/30">
          <div className="text-lg font-bold text-yellow-300">
            Amount Paid: {orderData.amountPaid}
          </div>
          <Link href={`/ticket?requestId=${orderData.bookingId}`}>
            <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition">
              Booking Info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryCard;
