import React from "react";
import Image  from "next/image";

export function TicketCard({
    movieTitle,
    showTime,
    location,
    quantity,
    seats,
    bookingId,
    amount,
    onCancel,
    }: {
    movieTitle: string;
    showTime: string;
    location: string;
    quantity: number;
    seats: string[];
    bookingId: string;
    amount: string;
    onCancel: () => void;
}) {
    return (
        <div className="rounded-2xl overflow-hidden shadow-lg bg-[#6C3FC5] w-[320px]">
        <div className="p-4">
            <div className="flex items-center gap-3">
            <Image src="/spiderman.jpg" alt="Movie Poster" width={60} height={80} className="rounded" />
            <div>
                <div className="font-bold text-lg">{movieTitle}</div>
                <div className="text-xs">{showTime}</div>
                <div className="text-xs text-gray-200">{location}</div>
            </div>
            </div>
            <hr className="my-4 border-gray-400" />
            <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded">
                <Image src="/qrcode.png" alt="QR Code" width={70} height={70} />
            </div>
            <div className="text-xs text-white flex flex-col gap-1">
                <div>Quantity: <b>{quantity}</b></div>
                <div>Seat No- {seats.join(", ")}</div>
                <div>BOOKING ID {bookingId}</div>
            </div>
            </div>
            <div className="text-center mt-3">
            <button className="text-red-300 text-sm underline" onClick={onCancel}>
                Cancel Ticket
            </button>
            </div>
        </div>
        <div className="bg-white flex justify-between items-center px-4 py-2">
            <span className="text-gray-700 font-semibold">Total Amount</span>
            <span className="text-[#6C3FC5] font-bold text-lg">USD {amount}</span>
        </div>
        </div>
    );
}