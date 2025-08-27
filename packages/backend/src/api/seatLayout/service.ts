import { getOrCreateSeatLayout } from "../../helpers/seatLayout";

export async function getSeatLayout(showId: string, sellerId: string) {
    return getOrCreateSeatLayout(sellerId, showId);
}
