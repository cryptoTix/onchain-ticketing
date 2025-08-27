import { SeatAvailabilityType } from "../types/types";

export const MASTER_ADDR = '0xDe17fF229E6a9EA25F0C255735258aA07E12739c' as `0x{string}`;
export const PRIVATE_KEY = "0x5a9cea68693a5347c31c51572d8c46f93ece71cd6332d5ffabc442ad8920a3c5" as `0x{string}`;
export const PAYMENT_DURATION = 1 * 60;
export const seatLegends: Record<SeatAvailabilityType, { bgData: string}> = {
    "AVAILABLE" : {
        bgData: "border border-gray-500"
    },
    "FILLED" : {
        bgData: "bg-purple-700"
    },
    "SELECTED" : {
        bgData : "bg-blue-500"
    }
}