"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchPaymentRequest, nftId } from "../actions/migration";
import { PaymentMetadata } from "../models/paymentRequest";
import { useAccount } from "wagmi";
import { ToastNotification } from "../components/Toast/ToastNotification";
import { TicketLoader } from "../components/Loader/Loader";
import Image from "next/image";
import { TicketData } from "../models/ticket"
import { cancelTicket, fetchCancellationAmount } from "../actions/withdraw";
import { Dialog } from "@headlessui/react";
import Decimal from "decimal.js";

export default function TicketPage() {
  const searchParams = useSearchParams();
  const requestId = searchParams.get("requestId")!;
  const [paymentMetadata, setPaymentMetadata] = useState<PaymentMetadata>();
  const [isLoading, setIsLoading] = useState(true);
  const { address } = useAccount();

  useEffect(() => {
    async function loadTicketData() {
      await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
      const data = await fetchPaymentRequest(requestId);
      setPaymentMetadata(data);
      setIsLoading(false);
    }
    loadTicketData();
  }, [requestId]);

  const handleRedeem = async () => {
    // TODO: Implement redeem functionality
    // const success = await redeem();
    // if (success) {
    //   router.push("/"); // Redirect to home after successful redemption
    // }
  };

  if (isLoading) {
    return <TicketLoader/>
  }
  const ticketMetaData : TicketData = {
    movieTitle : "Test",
    showTime: paymentMetadata.showTime.toString(),
      quantity: paymentMetadata.seatIds.length,
      bookingId: paymentMetadata.requestId,
      amount: paymentMetadata.totalPrice,
      seats: paymentMetadata.seatIds,
      location : "BHOPAL"
  }

  return (
    <div className="min-h-screen w-full text-white p-10 flex flex-col items-center">
      <TicketCard ticketData={ticketMetaData}
      />
      
      {/* <div className="max-w-2xl w-full bg-gradient-to-r from-indigo-300 to-purple-300 p-8 rounded-xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Ticket</h1>
        
        <div className="bg-white/10 p-6 rounded-lg mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Ticket Details</h2>
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Active</span>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-300">Seats</span>
              <span className="font-medium">{paymentMetadata?.seatIds.join(", ")}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-300">Show Time</span>
              <span className="font-medium">{new Date(Number(paymentMetadata?.showTime) * 1000).toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-300">Amount Paid</span>
              <span className="font-medium">USD {paymentMetadata?.totalPrice.toString()}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-300">Ticket ID</span>
              <span className="font-medium">{requestId}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={handleRedeem}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition"
          >
            Redeem Ticket
          </button>
          <button
            onClick={handleCancel}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md transition"
          >
            Cancel Ticket
          </button>
        </div>
      </div> */}
    </div>
  );
}

export function TicketCard({ticketData} : {ticketData : TicketData}) {
  const router = useRouter();
  const [cancelDialogBox, setCancelDialogBox] = useState(false);
  const [cancellationAmount, setCancellationAmount] = useState<Decimal>(Decimal(0));

  useEffect(() => {
    async function loadCancellationAmount() {
      const cancellationAmount = await fetchCancellationAmount(nftId)
      setCancellationAmount(cancellationAmount);
      console.log("Set cancellation amount", cancellationAmount, nftId)
    }
    loadCancellationAmount();
  }, [])

  async function handleCancel() {
    const success = await cancelTicket(nftId);
    if (success) {
      router.push("/"); // Redirect to home after successful cancellation
    }
  };

  function handleDialogBoxClose() {
    setCancelDialogBox(false);
  }

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-[#6C3FC5] w-[320px] items-center">
      <div className="p-4">
        <div className="flex items-center gap-3">
          <Image src="/Movie.png" alt="Movie" width={60} height={80} className="rounded" onClick={() => {}}/>
          <div>
            <div className="font-bold text-lg">{ticketData.movieTitle}</div>
            <div className="text-xs">{ticketData.showTime}</div>
            <div className="text-xs text-gray-200">{ticketData.location}</div>
          </div>
        </div>
        <hr className="my-4 border-gray-400" />
        <div className="flex items-center gap-4">
          <div className="rounded">
            <Image src="/qr.png" alt="QR Code" width={90} height={70}/>
          </div>
          <div className="text-xs text-white flex flex-col gap-1">
            <div>Quantity: <b>{ticketData.quantity}</b></div>
            <div>Seat No- {ticketData.seats.join(", ")}</div>
            <div>BOOKING ID {ticketData.bookingId}</div>
          </div>
        </div>
        <div className="text-center mt-3">
          <button className="text-red-300 text-sm underline" onClick={() => {setCancelDialogBox(true)}}>
            Cancel Ticket
          </button>
        </div>
      </div>
      <div className="bg-white flex justify-between items-center px-4 py-2">
        <span className="text-gray-700 font-semibold">Total Amount</span>
        <span className="text-[#6C3FC5] font-bold text-lg">USD {ticketData.amount.toString()}</span>
      </div>
      <Dialog open={cancelDialogBox} onClose={() => {}} className="relative z-50 bg-gray">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/50">
          <Dialog.Panel className="w-full max-w-md bg-[#211F26] px-8 pt-6 pb-8 space-y-6 rounded-md">
            <div className="flex justify-between">
              <Dialog.Title className="text-gray-300 font-outfit tracking-wide font-normal">Are you sure you want to cancel?</Dialog.Title>
              <button onClick={handleDialogBoxClose} className="hover:brightness-90">
                <svg className="h-6 w-6 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            </div>
            <div className="flex justify-left space-x-2">
              <Image src="/Movie_1.png" alt="Duhh" width="50" height="100"/>
              <div>
                <div className="font-bold text-2xl">{ticketData.movieTitle}</div>
                <div className="text-sm">{ticketData.showTime}</div>
                <div className="text-sm"> Booking ID: {ticketData.bookingId}</div>
              </div>
            </div>
            <div>
              {/* TODO: Fetch cancellation amount */}
              <div className="text-sm">If you proceed, you'll receive a refund of ${cancellationAmount.toString()} to your original payment method. The refund process will begin as soon as your cancellation is confirmed. Would you like to continue?</div>
              <div className="flex align-right justify-end space-x-6 pt-6">
                <button onClick={handleDialogBoxClose} className="w-[100px] text-white font-semibold px-4 py-2 rounded hover:bg-white/20 transition border border-[#C3A7FF]">No</button>
                <button onClick={handleCancel} className="w-[100px] bg-red-400 text-black font-semibold px-4 py-2 rounded hover:bg-red-300 transition">Yes</button>
              </div>
              {/* <div>
                <div className="font-bold text-2xl">{ticketData.movieTitle}</div>
                <div className="text-sm">{ticketData.showTime}</div>
                <div className="text-sm"> Booking ID: {ticketData.bookingId}</div>
              </div> */}
            </div>
              {/* <img
                src="/awaiting.svg" // Make sure this image exists in /public
                alt="Waiting Animation"
                className="w-full h-3/4"
              />
              <p className="text-sm text-gray-300 text-center">{approved ? "Please confirm purchase" : `Please approve USDC`}</p>
              {
                !isPendingTx ? (<button
                  className="mt-6 px-4 py-2 bg-purple-600 hover:bg-purple-700 transition rounded text-sm font-medium"
                  onClick={()=> { approved ? onClickPurchase() : onClickApprove()}}
                >
                  {approved ? "Purchase" : "Confirm Approval" }
                </button>) : (
                  <h3 className="text-lg font-semibold">Waiting for confirmation</h3>
                )
              }
              <p className="text-xs text-purple-300 text-center">Do not close the web page</p> */}
            </Dialog.Panel>
          </div>
        </Dialog>
    </div>
  );
} 