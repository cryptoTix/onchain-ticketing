"use client"
import React, { useEffect, useState } from "react"
import { OrderMetadata } from "../../../../../shared/dist"
import toast from "react-hot-toast"
import { HomepageRedirectLoader, LandingLoader, SeatLayoutLoader, TicketFetchingLoader, TicketLoader } from "../../components/Loader/Loader"
import { BookingInfo } from "../../components/BookingInfoCard/BookingInfo"
import { fetchOrders } from "../../api/fetchOrders"
import { AnimatePresence } from "framer-motion"
import MotionDiv from "../../components/Motion/MotionDiv"
import { LOADER_MOTION, PAGE_CONTENT_MOTION } from "../../components/Motion/presets"
import { QUERY_INTERVAL, TIMEOUT_INTERVAL } from "../../utils/consts"
import { useRouter } from "next/navigation"

interface TicketInfoProps  {
  bookingId : string
}
export default function TicketPage({params} : {params : TicketInfoProps}) {
  const router = useRouter()
  const [orderData, setOrderData] = useState<OrderMetadata>(null)
  const [loader, setLoader] = useState<boolean>(true)
  const [isNavigating, setIsNavigating] = useState<boolean>(false)
  
  useEffect(() => {
    setLoader(true)
    let onGoing = false;
    const startTime = Date.now();
    const id = setInterval(() => {
      if (startTime + TIMEOUT_INTERVAL < Date.now()) {
        toast.error("Unable to fetch ticket, pls refresh the page")
        clearInterval(id)
        setLoader(false)
        return
      }
      if (onGoing) return
      onGoing = true;
      async function fetchTicket() {
        if (!params) {
          console.log("undefined booking ID",params.bookingId)
          onGoing = false;
          return
        }
        const data = await fetchOrders(null, params.bookingId)
        if (!data || data.length == 0) {
          onGoing = false;
          return
        }
        console.log("Setting orderData as", data[0])
        setOrderData(data[0])
        setLoader(false)
        clearInterval(id)
        onGoing = false;
      }
      fetchTicket()
    }, QUERY_INTERVAL)
  }, [])

  if (isNavigating) {
    return <HomepageRedirectLoader/>
  }
  
  return (
    <AnimatePresence mode="wait">
      {loader || !orderData ? (
        <MotionDiv
          key="ticket-loader"
          preset={LOADER_MOTION}
        >
          <TicketFetchingLoader/>
        </MotionDiv>
      ) : (
        <MotionDiv
          key="ticket-loader"
          preset={PAGE_CONTENT_MOTION}
          className="flex"
        >
          <BookingInfo orderData={orderData} onSucessCancel={() => {
            setIsNavigating(true)
            router.push("/")
          }}/>
        </MotionDiv>
      )}
    </AnimatePresence> 
  )
}