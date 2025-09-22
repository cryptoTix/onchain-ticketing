import React from "react";
import { OrderMetadata } from "../../../../../shared";
import { getLocalTime, getSeatsToStr, getUTCTimeToSellerTime } from "../../utils/helpers";

type OrderHistoryProps = {
  orderData: OrderMetadata;
  onSelectBookingInfo : (order : OrderMetadata) => void;
};

const OrderHistoryCard: React.FC<OrderHistoryProps> = ({ orderData, onSelectBookingInfo }) => {
  return (
    <div className={`bg-[#482690] text-white rounded-lg p-4 flex shadow-lg max-w-4xl w-[70%]`}>
      <div className="relative">
      <img
        src={orderData.movie.image}
        alt={`${orderData.movieName} poster`}
        className={`${orderData.isCancelled ? "opacity-70" : ""} w-[80%] object-cover rounded-lg`}
        />
        {orderData.isCancelled && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            CANCELLED
          </span>
        )}
      </div>
      <div className={`flex-1 flex flex-col justify-between ${orderData.isCancelled ? `opacity-70` : ``}`}>
        <div className="text-sm text-white/80">
          <div className="mb-2 font-light text-xs">
            <span className="text-white/70">BOOKING DATE & TIME: </span>
            {getLocalTime(orderData.paymentData.originTimestampUTC)}
          </div>
          <div className="text-lg font-semibold">{orderData.movieName}</div>
          <div className="mt-2 space-y-1">
            <div className="flex justify-between">
              <span>Payment Currency</span>
              <span className="font-medium">{orderData.paymentData.selectedCurrency}</span>
            </div>
            <div className="flex justify-between">
              <span>Booking ID</span>
              <span className="font-medium">{orderData.orderId.substring(0,8)}</span>
            </div>
            <div className="flex justify-between">
              <span>Show Date & Time {`(seller local time)`}:</span>
              <span className="font-medium">{getUTCTimeToSellerTime(orderData.show.showTime, orderData.seller.utcTimeDiff)}</span>
            </div>
            <div className="flex justify-between">
              <span>Quantity</span>
              <span className="font-medium">{orderData.seats.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Seat No</span>
              <span className="font-medium">{getSeatsToStr(orderData.seats)}</span>
            </div>
            <div className="flex justify-between">
              <span>Screen</span>
              <span className="font-medium">{orderData.show.screenId}</span>
            </div>
            <div className="flex justify-between">
              <span>Ticket Price</span>
              <span className="font-medium">{orderData.paymentData.totalAmount / 1e6} {` ${orderData.paymentData.selectedCurrency}`}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount Amount</span>
              <span className="font-medium">0</span>
            </div>
            <div className="flex justify-between">
              <span>Convenience Fees</span>
              <span className="font-medium">0</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/30">
          <div className="text-lg font-bold text-yellow-300">
            Amount Paid: {orderData.paymentData.totalAmount / 1e6} {` ${orderData.paymentData.selectedCurrency}`}
          </div>
            <button className={`${orderData.isCancelled ? "" : "hover:bg-yellow-300 transition"} bg-yellow-400  text-black font-semibold px-4 py-2 rounded`}
              onClick={() => {onSelectBookingInfo(orderData)}}
              disabled={orderData.isCancelled}>
              Booking Info
            </button>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryCard;
