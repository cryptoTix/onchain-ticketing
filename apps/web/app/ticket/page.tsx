// "use client";

// import { useSearchParams, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { fetchPaymentRequest, nftId } from "../actions/migration";
// import { PaymentMetadata } from "../models/paymentRequest";
// import { useAccount } from "wagmi";
// import { ToastNotification } from "../components/Toast/ToastNotification";
// import { TicketLoader } from "../components/Loader/Loader";
// import Image from "next/image";
// import { TicketData } from "../models/ticket"
// import { cancelTicket, fetchCancellationAmount } from "../actions/withdraw";
// import { Dialog } from "@headlessui/react";
// import Decimal from "decimal.js";

// export default function TicketPage() {
//   const searchParams = useSearchParams();
//   const requestId = searchParams.get("requestId")!;
//   const [paymentMetadata, setPaymentMetadata] = useState<PaymentMetadata>();
//   const [isLoading, setIsLoading] = useState(true);
//   const { address } = useAccount();

//   useEffect(() => {
//     async function loadTicketData() {
//       await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
//       const data = await fetchPaymentRequest(requestId);
//       setPaymentMetadata(data);
//       setIsLoading(false);
//     }
//     loadTicketData();
//   }, [requestId]);

//   const handleRedeem = async () => {
//     // TODO: Implement redeem functionality
//     // const success = await redeem();
//     // if (success) {
//     //   router.push("/"); // Redirect to home after successful redemption
//     // }
//   };

//   if (isLoading) {
//     return <TicketLoader/>
//   }
//   const ticketMetaData : TicketData = {
//     movieTitle : "Test",
//     showTime: paymentMetadata.showTime.toString(),
//       quantity: paymentMetadata.seatIds.length,
//       bookingId: paymentMetadata.requestId,
//       amount: paymentMetadata.totalPrice,
//       seats: paymentMetadata.seatIds,
//       location : "BHOPAL"
//   }

//   return (
//     <div className="min-h-screen w-full text-white p-10 flex flex-col items-center">
//       <TicketCard ticketData={ticketMetaData}/>
//     </div>
//   );
// }