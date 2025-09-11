"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Decimal from "decimal.js";
import { useAccount, useFeeData } from "wagmi";
import { submitPaymentRequest } from "../actions/migration";
import SeatLayoutViewer from "../components/SeatLayout";
import { SeatClass, SeatLayout, SeatLayoutRequest, SellerShowIdInterface, ShowInterface } from "../../../../shared";
import { fetchSeatLayout } from "../api/fetchSeatLayout";
import { SeatData } from "../models/paymentRequest";
import { ShowDetailsViewer } from "../components/ShowDetails/ShowDetails";
import { CurrencySelectionPage } from "../components/CurrencySelection";
import { CurrentPage } from "../types/state/SeatSelectionState";
import { fetchSellerShowData, reserveSeats } from "../api/fetchSellers";
import { fetchMovies } from "../api/fetchMovies";
import { MovieInterface } from "../models/movie";
import { ToastNotification } from "../components/Toast/ToastNotification";
import toast from "react-hot-toast";
import { ConfirmBookingDialog } from "../components/DialogBox/ConfirmBooking";
import { Address, isAddress } from "viem";

export default function SeatSelectionPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sellerId = searchParams.get("sellerId");
  const showId = searchParams.get("showId");
  const movieId = searchParams.get("movieId");

  const [selectedSeats, setSelectedSeats] = useState<Record<string, SeatClass>>({});
  const [currentPage, setCurrentPage] = useState<CurrentPage>("SEAT_SELECTION");
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [showDetails, setShowDeatils] = useState<SellerShowIdInterface | null>()
  const [movieDetails, setMovieDeatils] = useState<MovieInterface | null>()
  const [ownerAddress, setOwnerAddress] = useState<Address>(null)

  const { address, isConnected } = useAccount()

  useEffect(() => {
      async function setInitialData() {
          const showData = await fetchSellerShowData({
              sellerId : sellerId,
              showId : showId
          })
          const movieData = await fetchMovies(movieId)
          if (showData) {
              setShowDeatils(showData)
          }
          if (movieData) {
              setMovieDeatils(movieData[0])
          }
      }
      setInitialData()
  }, [movieId])

  // load seat layout from show, sellerId
  const handleSeatClick = (seat: SeatClass) => {
    const seatId = seat.id;
    setSelectedSeats((previousState) => {
      const updated = { ...previousState };
      if (updated[seatId]) {
        setTotalPrice((prev) => {
          let updated = prev;
          updated -= seat.price
          return updated
        })
        delete updated[seatId]
      } 
      else {
        updated[seatId] = seat;
        setTotalPrice((prev) => {
          let updated = prev;
          updated += seat.price
          return updated
        })
      }
      return updated
    })
  };

  async function proceedToCurrencySelection() {
    setCurrentPage("CURRENCY_SELECTION")
  }

  async function handleClickPrevious() {
    setCurrentPage("SEAT_SELECTION")
  }

  async function proceedToPurchase(bookingId : string) {
    if (!isConnected) {
      toast.error("Please connect wallet")
      console.error("Please connect wallet")
      return
    }
    if (bookingId && bookingId != "") {
      router.push(`/payment/${bookingId}`)
    }
  }

  async function resetCustomOwerAddress() {
    setOwnerAddress(null)
  }

  async function onChangeCustomOwerAddress(addr : string) {
    if (isAddress(addr)) {
      setOwnerAddress(addr)
    }
  }

  return (
    currentPage === "SEAT_SELECTION" ? 
    <div className="min-h-screen w-full text-white flex flex-col items-center">
      <ShowDetailsViewer sellerAndshowDetails={showDetails} movieDetails={movieDetails}/>
      <SeatLayoutViewer sellerId={sellerId} showId={showId} selectedSeats={selectedSeats} selectedSeatsPrice={totalPrice} onSelectSeat={handleSeatClick} onPayClick={proceedToCurrencySelection}/>
    </div> :
    <CurrencySelectionPage sellerId={sellerId} selectedSeats={selectedSeats} sellerAndshowDetails={showDetails} movieDetails={movieDetails} totalPrice={totalPrice} ticketOwner={ownerAddress} onClickPrevious={handleClickPrevious} onClickPurchase={proceedToPurchase} resetCustomOwnerAddress={resetCustomOwerAddress} onChangeCustomOwnerAddress={onChangeCustomOwerAddress}/> 
  );
}
