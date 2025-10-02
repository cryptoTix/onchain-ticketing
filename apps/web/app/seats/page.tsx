"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import { BookingDataLoader, SeatLayoutLoader } from "../components/Loader/Loader";

import { useAccount } from "wagmi";
import SeatLayoutViewer from "../components/SeatLayout";
import { SeatClass, SellerShowIdInterface } from "../../../../shared";
import { ShowDetailsViewer } from "../components/ShowDetails/ShowDetails";
import { CurrencySelectionPage } from "../components/CurrencySelection";
import { SeatSelectionPage } from "../types/state/PageState";
import { fetchSellerShowData } from "../api/fetchSellers";
import { fetchMovies } from "../api/fetchMovies";
import { MovieInterface } from "../models/movie";
import toast from "react-hot-toast";
import { Address, isAddress } from "viem";
import { MAIN_LOADER_TIMER, SUB_PAGE_LOADER_TIMER } from "../utils/consts";
import { AnimatePresence } from "framer-motion";
import MotionDiv from "../components/Motion/MotionDiv";
import { LOADER_MOTION, PAGE_CONTENT_MOTION } from "../components/Motion/presets";

function SeatsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sellerId = searchParams.get("sellerId");
  const showId = searchParams.get("showId");
  const movieId = searchParams.get("movieId");

  const [selectedSeats, setSelectedSeats] = useState<Record<string, SeatClass>>({});
  const [currentPage, setCurrentPage] = useState<SeatSelectionPage>("SEAT_SELECTION");
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [showDetails, setShowDeatils] = useState<SellerShowIdInterface | null>()
  const [movieDetails, setMovieDeatils] = useState<MovieInterface | null>()
  const [ownerAddress, setOwnerAddress] = useState<Address>(null)
  const [loadingData, setLoadingData] = useState<boolean>(true)
  const [isNavigating, setIsNavigating] = useState<boolean>(false)

  const { address, isConnected } = useAccount()

  useEffect(() => {
    setLoadingData(true)
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
          setTimeout(() => {
            setLoadingData(false)
          }, MAIN_LOADER_TIMER);
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
      setIsNavigating(true)
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

  if (isNavigating) {
    return <BookingDataLoader/>;
    
  }
  return (
    <AnimatePresence mode="wait">
      {loadingData ? (
        <MotionDiv
          key="seat-loader"
          preset={LOADER_MOTION}
        >
          <SeatLayoutLoader/>
        </MotionDiv>
      ) : (
        currentPage === "SEAT_SELECTION" ? (
          <MotionDiv
            key="seat-content"
            preset={PAGE_CONTENT_MOTION}
            className="w-full"
          >
            <div className="min-h-screen w-full text-white flex flex-col items-center">
              <ShowDetailsViewer sellerAndshowDetails={showDetails} movieDetails={movieDetails}/>
              <SeatLayoutViewer sellerId={sellerId} showId={showId} selectedSeats={selectedSeats} selectedSeatsPrice={totalPrice} onSelectSeat={handleSeatClick} onPayClick={proceedToCurrencySelection}/>
            </div>
          </MotionDiv>
          ) : (
          <MotionDiv
            key="payment-page-content"
            preset={PAGE_CONTENT_MOTION}
            className="w-full"
          >
            <CurrencySelectionPage sellerId={sellerId} selectedSeats={selectedSeats} sellerAndshowDetails={showDetails} movieDetails={movieDetails} totalPrice={totalPrice} ticketOwner={ownerAddress} onClickPrevious={handleClickPrevious} onClickPurchase={proceedToPurchase} resetCustomOwnerAddress={resetCustomOwerAddress} onChangeCustomOwnerAddress={onChangeCustomOwerAddress}/>
          </MotionDiv>
        )
      )}
    </AnimatePresence>
  );
}

export default function Seats() {
  return (
    <Suspense fallback={<SeatLayoutLoader />}> 
      <SeatsContent />
    </Suspense>
  );
}