import React, { useEffect, useState } from "react";
import Image  from "next/image";
import { OrderMetadata } from "../../../../../shared";
import { useRouter } from "next/router";
import { cancelTicket, fetchCancellationAmount } from "../../actions/withdraw";
import { displayLongSellerDate, fetchChainName, getSeatsToStr, getUTCTimeToSellerTime } from "../../utils/helpers";
import { Dialog } from "@headlessui/react";
import { ToastNotification } from "../Toast/ToastNotification";

// export function TicketCard({
//     movieTitle,
//     showTime,
//     location,
//     quantity,
//     seats,
//     bookingId,
//     amount,
//     onCancel,
//     }: {
//     movieTitle: string;
//     showTime: string;
//     location: string;
//     quantity: number;
//     seats: string[];
//     bookingId: string;
//     amount: string;
//     onCancel: () => void;
// }) {
//     return (
//         <div className="rounded-2xl overflow-hidden shadow-lg bg-[#6C3FC5] w-[320px]">
//         <div className="p-4">
//             <div className="flex items-center gap-3">
//             <Image src="/spiderman.jpg" alt="Movie Poster" width={60} height={80} className="rounded" />
//             <div>
//                 <div className="font-bold text-lg">{movieTitle}</div>
//                 <div className="text-xs">{showTime}</div>
//                 <div className="text-xs text-gray-200">{location}</div>
//             </div>
//             </div>
//             <hr className="my-4 border-gray-400" />
//             <div className="flex items-center gap-4">
//             <div className="bg-white p-2 rounded">
//                 <Image src="/qrcode.png" alt="QR Code" width={70} height={70} />
//             </div>
//             <div className="text-xs text-white flex flex-col gap-1">
//                 <div>Quantity: <b>{quantity}</b></div>
//                 <div>Seat No- {seats.join(", ")}</div>
//                 <div>BOOKING ID {bookingId}</div>
//             </div>
//             </div>
//             <div className="text-center mt-3">
//             <button className="text-red-300 text-sm underline" onClick={onCancel}>
//                 Cancel Ticket
//             </button>
//             </div>
//         </div>
//         <div className="bg-white flex justify-between items-center px-4 py-2">
//             <span className="text-gray-700 font-semibold">Total Amount</span>
//             <span className="text-[#6C3FC5] font-bold text-lg">USD {amount}</span>
//         </div>
//         </div>
//     );
// }

export interface BookingInfoProps {
  orderData : OrderMetadata;
  onSucessCancel : () => void;
};

export const BookingInfo : React.FC<BookingInfoProps> = ({orderData, onSucessCancel}) => {
    const [cancelDialogBox, setCancelDialogBox] = useState(false);
    const [cancellationAmount, setCancellationAmount] = useState<number>(0);
    const [disableBtn, setDisableBtn] = useState<boolean>(false)
  
    useEffect(() => {
      async function loadCancellationAmount() {
        const cancellationAmount = await fetchCancellationAmount(orderData.paymentData)
        setCancellationAmount(cancellationAmount);
        console.log("Set cancellation amount", cancellationAmount, orderData.paymentData.purchaseDataHash)
      }
      loadCancellationAmount();
    }, [orderData])
  
    async function handleCancel() {
      setDisableBtn(true)
      const success = await cancelTicket(orderData.paymentData);
      setDisableBtn(false)
      if (success) {
        onSucessCancel()
      }
      handleDialogBoxClose()
    };
  
    function handleDialogBoxClose() {
      setCancelDialogBox(false);
    }
  
    return (
      <div className="rounded-2xl overflow-hidden shadow-lg bg-[#6C3FC5] w-[30%] items-center">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <Image src={orderData.movie.image} alt={orderData.movie.name} width={60} height={80} className="rounded"/>
            <div>
              <div className="font-bold text-lg">{orderData.movieName}</div>
              <div className="text-xs">{getUTCTimeToSellerTime(orderData.show.showTime, orderData.seller.utcTimeDiff)}</div>
              <div className="text-xs text-gray-200">{orderData.seller.name + " | " + orderData.seller.location}</div>
            </div>
          </div>
          <hr className="my-4 border-gray-400" />
          <div className="flex items-center gap-4">
            <div className="rounded">
              <Image src="/qr.png" alt="QR Code" width={90} height={70}/>
            </div>
            <div className="text-xs text-white flex flex-col gap-1">
              <div>Quantity: <b>{orderData.seats.length}</b></div>
              <div>Seat No- {getSeatsToStr(orderData.seats)}</div>
              <div>BOOKING ID {orderData.paymentData.purchaseDataHash.substring(0,8)}</div>
              <div>Show Time:  {getUTCTimeToSellerTime(orderData.show.showTime, orderData.seller.utcTimeDiff)}</div>
              <div>Network:  {fetchChainName(orderData.paymentData.selectedChain.toString())}</div>
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
          <span className="text-[#6C3FC5] font-bold text-lg">USD {orderData.paymentData.totalAmount / 1e6}</span>
        </div>
        <Dialog open={cancelDialogBox} onClose={() => {handleDialogBoxClose()}} className="relative z-50 bg-gray">
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/50">
            <Dialog.Panel className="w-full max-w-md bg-[#211F26] px-8 pt-6 pb-8 space-y-6 rounded-md">
              <div className="flex justify-between">
                <Dialog.Title className="text-gray-300 font-outfit tracking-wide font-normal">Are you sure you want to cancel?</Dialog.Title>
                <button onClick={handleDialogBoxClose} className="hover:brightness-90">
                  <svg className="h-6 w-6 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
                </button>
              </div>
              <div className="flex justify-left space-x-2">
                <Image src={orderData.movie.image} alt={orderData.movie.name} width="50" height="100"/>
                <div>
                  <div className="font-bold text-2xl">{orderData.movieName}</div>
                  <div className="text-sm">{getUTCTimeToSellerTime(orderData.show.showTime, orderData.seller.utcTimeDiff)}</div>
                  <div className="text-sm"> Booking ID: {orderData.paymentData.purchaseDataHash.substring(0,8)}</div>
                </div>
              </div>
              <div>
                {/* TODO: Fetch cancellation amount */}
                <div className="text-sm">If you proceed, you'll receive a refund of {cancellationAmount.toString()} {orderData.paymentData.selectedCurrency} to your original payment method. The refund process will begin as soon as your cancellation is confirmed. Would you like to continue?</div>
                <div className="flex align-right justify-end space-x-6 pt-6">
                  <button
                    onClick={handleDialogBoxClose}
                    disabled={disableBtn}
                    className={`w-[100px] text-white font-semibold px-4 py-2 rounded transition border border-[#C3A7FF] ${disableBtn ? "" : "hover:bg-white/20"}`}
                  >
                    No
                  </button>
                  <button
                    onClick={handleCancel}
                    disabled={disableBtn}
                    aria-busy={disableBtn}
                    className={`w-[100px] bg-red-400 text-black font-semibold px-4 py-2 rounded transition ${disableBtn ? "" : "hover:bg-red-300"}`}
                  >
                    {disableBtn ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Yes</span>
                      </span>
                    ) : (
                      "Yes"
                    )}
                  </button>
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
