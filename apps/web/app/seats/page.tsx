"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchShow, fetchSingature } from "../utils/showlist";
import { ShowInterface } from "../models/show";
import Decimal from "decimal.js";
import { useAccount } from "wagmi";
import { submitPaymentRequest } from "../actions/migration";

const seatRows = ["A", "B", "C", "D", "E", "F", "G", "H"];
const seatNumbers = Array.from({ length: 10 }, (_, i) => i + 1);
const filledSeats = new Set(["A9", "A10", "B3", "B4", "B5", "B7", "B9", "B10"]);
const ticketPrice = 5.44;

export default function SeatSelectionPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sellerId = searchParams.get("sellerId")!;
  const showId = searchParams.get("showId")!;
  const selectedTime = searchParams.get("time")!;

  const [show, setShow] = useState<ShowInterface>();
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const {address} = useAccount()

  useEffect(() => {
    async function loadShowData(id:string) {
        const data = await fetchShow(id);
        setShow(data!);
    }
    loadShowData(showId);
  })
  const handleSeatClick = (seat: string) => {
    if (filledSeats.has(seat)) return;
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  async function handlePurchaseClick() {
    const seatPrice : Decimal[]= [];
    selectedSeats.forEach(() => {
      seatPrice.push(new Decimal(ticketPrice))
    })
    // Send request
    const requestId = await submitPaymentRequest({
      user : address,
      sellerId : sellerId,
      showId : showId,
      seatIds : selectedSeats,
      showTime : selectedTime
    })
    router.push(`/payment?requestId=${requestId}`)
  }
  return (
    <div className="min-h-screen w-full text-white p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Seat Selection</h1>
      <p className="text-lg text-gray-400">Seller: {sellerId}</p>
      <p className="text-lg text-gray-400">Show: {show?.name}</p>
      <p className="text-lg text-gray-400">Time: {selectedTime}</p>

      <div className="grid grid-cols-2 gap-10">
        {Array(2)
          .fill(0)
          .map((_, sectionIndex) => (
            <div key={sectionIndex} className="grid grid-cols-10 gap-2">
              {seatRows.map((row) =>
                seatNumbers.map((num) => {
                  const seat = `${row}${num + sectionIndex * 10}`;
                  const isFilled = filledSeats.has(seat);
                  const isSelected = selectedSeats.includes(seat);
                  return (
                    <button
                      key={seat}
                      className={`w-10 h-10 border border-gray-500 text-sm rounded-md ${
                        isFilled ? "bg-purple-700 text-white" : isSelected ? "bg-blue-500" : "hover:bg-gray-700"
                      }`}
                      disabled={isFilled}
                      onClick={() => handleSeatClick(seat)}
                    >
                      {seat}
                    </button>
                  );
                })
              )}
            </div>
          ))}
      </div>
      {/* Seat Legends */}
      <div className="mt-6 flex gap-6 text-gray-300">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 bg-purple-700 rounded-md"></span> Filled
        </div>
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 border border-gray-500 rounded-md"></span> Available
        </div>
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 bg-blue-500 rounded-md"></span> Selected
        </div>
      </div>

      <div className="mt-10 w-full max-w-none p-6 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 text-black">
        <h2 className="text-xl font-bold">Summary</h2>
        <div className="flex justify-between mt-3">
          <p className="text-lg">Total</p>
          <p className="text-lg font-bold">{(selectedSeats.length * ticketPrice).toFixed(2)} USD</p>
        </div>
        <div className="flex justify-between mt-1">
          <p className="text-lg">Selected Seats</p>
          <p className="text-lg font-bold">{selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}</p>
        </div>

        <div className="mt-6 flex justify-between">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-md" onClick={() => { router.back()}}>Cancel</button>
          <button className={`bg-gray-800 text-white px-6 py-3 rounded-md ${selectedSeats.length == 0 ? `opacity-50` : `` }`} disabled = {selectedSeats.length === 0}  onClick={() => { handlePurchaseClick()}}>Purchase</button>
        </div>
      </div>
    </div>
  );
}
