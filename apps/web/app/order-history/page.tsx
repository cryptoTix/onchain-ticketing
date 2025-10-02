"use client"

import { useAccount } from "wagmi"
import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import MotionDiv from "../components/Motion/MotionDiv"
import { LOADER_MOTION, PAGE_CONTENT_MOTION } from "../components/Motion/presets"
import OrderHistoryCard from "../components/OrderHistroyCard/OrderHistroy"
import { OrderMetadata } from "../../../../shared"
import { fetchOrders } from "../api/fetchOrders"
import { TicketFetchingLoader, TicketLoader } from "../components/Loader/Loader"
import { MAIN_LOADER_TIMER } from "../utils/consts"
import { useRouter } from "next/navigation"

export default function OrderHistoryPage() {
    const router = useRouter();
    const [orders, setOrders] = useState<OrderMetadata[]>([])
    const [loader, setLoader] = useState<boolean>(true)
    const [isNavigating, setIsNavigating] = useState<boolean>(false)
    const {isConnected, address} =  useAccount()
    useEffect(() => {
      setLoader(true)
      async function loadOrders() {
          const orders = await fetchOrders(address)
          setOrders(orders)
          setTimeout(() => {
            setLoader(false)
          }, MAIN_LOADER_TIMER);
      }
      if (address) {
          loadOrders()
      } else {
          setOrders([])
          setLoader(false)
      }
    },[address])

    async function onSelectBookingInfo(order : OrderMetadata) {
      setIsNavigating(true)
      router.push(`/order-history/${order.bookingId}`)
    }
    if (isNavigating) return <TicketFetchingLoader/>

    return (
      <AnimatePresence mode="wait">
        {loader ? (
          <MotionDiv
            key="history-loader"
            preset={LOADER_MOTION}
          >
            <TicketLoader />
          </MotionDiv>
        ) : (
          <MotionDiv
            key="history-content"
            preset={PAGE_CONTENT_MOTION}
            className="max-w-6xl mx-auto px-4 py-8 w-full"
          >
            <h1 className="text-xl font-bold mb-6 text-white">Your Order History</h1>
            {!isConnected ? (
              <div className="text-gray-300">Please connect your wallet to view orders.</div>
            ) : orders.length === 0 ? (
              <div className="text-gray-300">No orders found.</div>
            ) : (
              <div className="flex flex-col gap-6">
                {orders.map((order) => (
                  <OrderHistoryCard
                    key={order.bookingId}
                    orderData={order}
                    onSelectBookingInfo={onSelectBookingInfo}
                  />
                ))}
              </div>
            )}
          </MotionDiv>
        )}
      </AnimatePresence>
    )
}
