"use client"

import { useAccount } from "wagmi"
import { useEffect, useState } from "react"
import OrderHistoryCard from "../components/OrderHistroyCard/OrderHistroy"
import { OrderMetadata } from "../../../../shared"
import { fetchOrders } from "../api/fetchOrders"
import { BookingInfo } from "../components/BookingInfoCard/BookingInfo"

export default function OrderHistoryPage() {
    const [orders, setOrders] = useState<OrderMetadata[]>([])
    const [selectedOrder, setSelectedOrder] = useState<OrderMetadata>();
    const {isConnected, address} =  useAccount()
    useEffect(() => {
        async function loadOrders() {
            const orders = await fetchOrders(address)
            setOrders(orders)
        }
        if (isConnected) {
            loadOrders()
        } else {
            setOrders([])
        }
    },[isConnected])

    return (
        selectedOrder ? 
          <BookingInfo orderData={selectedOrder} onSucessCancel={() => {setTimeout(() => {
            setSelectedOrder(null)
          }, 1000)}}/> :
          <div className="max-w-6xl mx-auto px-4 py-8 w-full">
            <h1 className="text-xl font-bold mb-6 text-white">Your Order History</h1>
            {!isConnected ? (
              <div className="text-gray-300">Please connect your wallet to view orders.</div>
              ) : orders.length === 0 ? (
                <div className="text-gray-300">No orders found.</div>
                ) : (
                  <div className="flex flex-col gap-6">
                    {orders.map((order) => (
                      <OrderHistoryCard
                      orderData={order}
                      onSelectBookingInfo={setSelectedOrder}
                      />
                      ))}
                  </div>
                )}
          </div>
      );
}