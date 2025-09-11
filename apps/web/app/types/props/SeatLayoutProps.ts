import { SeatClass, SeatLayout } from "../../../../../shared";

export interface SeatLayoutProps {
    sellerId: string;
    showId: string;
    selectedSeats: Record<string, SeatClass>;
    selectedSeatsPrice: number;
    onSelectSeat : (seatObj : SeatClass) => void;
    onPayClick : () => void;
}