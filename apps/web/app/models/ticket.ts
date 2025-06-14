import Decimal from "decimal.js";

export interface TicketData  {
    movieTitle: string;
    showTime: string;
    location: string;
    quantity: number;
    seats: string[];
    bookingId: string;
    amount: Decimal;
}

export interface OrderHistoryMetadata {
    movieName: string;
    bookingDateTime: string;
    bookingId: string;
    quantity: number;
    seatNumbers: string[];
    screen: string;
    ticketPrice: string;
    amountPaid: string;
    posterUrl: string;
  };