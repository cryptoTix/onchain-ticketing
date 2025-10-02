"use client";

import React, { useEffect, useState } from "react";
import { SupportedCurrency } from "../../../../../shared";
import { CurrencySelectionProps } from "../../types/props/CurrencySelectionProps";
import { fetchSellerAcceptedCurrencies, reserveSeats } from "../../api/fetchSellers";
import { chainImageMap } from "../../constants/constants";
import { getSeatIdsToStr, getTokenImg, getUTCTimeToSellerTime, trimAddress } from "../../utils/helpers";
import { ToastNotification } from "../Toast/ToastNotification";
import { ConfirmBookingDialog } from "../DialogBox/ConfirmBooking";
import { useAccount } from "wagmi";
import toast from "react-hot-toast";
import { CustomTicketOwner } from "../CustomTicketOwner/CustomTicketOwner";
import { InfoButton } from "../Button/infoButton";
import { ConnectButton } from "../ConnectButton/ConnectButton";
import { DropdownCard } from "../DropdownMenu/DropdownCard";

export const CurrencySelectionPage : React.FC<CurrencySelectionProps> = ({
    sellerId, selectedSeats, sellerAndshowDetails, movieDetails, totalPrice, ticketOwner,
    onClickPrevious, onClickPurchase, onChangeCustomOwnerAddress, resetCustomOwnerAddress
  }) => {
  const [supportedNetworks, setSupportedNetworks] = useState<SupportedCurrency>({tokens : {}});
  const [selectedNetwork, setSelectedNetwork] = useState<string>("");
  const [selectedCurrency, setSelectedCurrency] = useState<string>("");
  const [openConfirmBooking, setOpenConfirmBooking] = useState<boolean>(false)
  const [lockingSeats, setLockingSeats] = useState<boolean>(false)
  const {isConnected, address} = useAccount()

  useEffect(() => {
    async function setInitialComponents() {
      const data = await fetchSellerAcceptedCurrencies({
        sellerId
      });
      setSupportedNetworks(data);
      if(Object.entries(data.tokens).length > 0) {
        setSelectedNetwork(Object.entries(data.tokens)[0][0])
      }
    }
    setInitialComponents()
  }, [sellerId])

  useEffect(() => {
    if (supportedNetworks.tokens[selectedNetwork] &&
       supportedNetworks.tokens[selectedNetwork].length > 0) {
      setSelectedCurrency(supportedNetworks.tokens[selectedNetwork][0])
    }
  }, [selectedNetwork])

  async function openConfirmBookingDialogBox() {
    if (!isConnected) {
      toast.error("Please connect wallet")
      setOpenConfirmBooking(false);
      return
    }
    setOpenConfirmBooking(true);
  }

  async function handleConfirmPurchase() {
    if (!isConnected) {
      toast.error("Please connect wallet")
      console.error("Please connect wallet")
      setOpenConfirmBooking(false)
      return
    }
    setLockingSeats(true)
    const bookingId = await reserveSeats({
      movieId : movieDetails.id,
      sellerId,
      showId : sellerAndshowDetails.show.id,
      ticketOwner : ticketOwner ? ticketOwner : address,
      selectedSeats : Object.entries(selectedSeats).map(([seatId]) => seatId),
      selectedChain : parseInt(selectedNetwork),
      selectedCurrency : selectedCurrency
    })
    setOpenConfirmBooking(false)
    if (bookingId) {
      onClickPurchase(bookingId.bookingId)
    }
    setLockingSeats(false)
  }

  function onCloseConfirmTicket() {
    setOpenConfirmBooking(false)
  }
  return (
      <div className={`w-full mt-12 ${openConfirmBooking&&"opacity-50"}`}>
        <ConfirmBookingDialog isOpen={openConfirmBooking} onClose={onCloseConfirmTicket} onConfirm={handleConfirmPurchase} seatCount={Object.entries(selectedSeats).length} totalPrice={totalPrice} lockingSeats={lockingSeats}/>
        <div className="flex items-start justify-between">
          <div className="bg-gradient-to-r from-indigo-300 to-purple-300 rounded-xl w-[65%] space-y-4 p-4 text-black">
            <h2 className="text-lg font-semibold">PAYMENT</h2>
            <div className="flex gap-8 mb-6">
              <div className="w-1/2">
                <p className="font-semibold text-sm">Select Chain</p>
                <DropdownCard
                  selectedItemVal={selectedNetwork}
                  items={Object.entries(supportedNetworks.tokens).map(([network, _]) => { return {itemImage : chainImageMap[parseInt(network)], itemValue : network}})}
                  onClickItem={(val) => setSelectedNetwork(val)}
                  isNetwork={true}/>
              </div>
              <div className="w-1/2">
                <p className="text-light font-semibold text-sm">Select Cryptocurrency</p>
                {selectedCurrency == "" ? 
                <div className="animate-pulse flex space-x-4 w-full">
                  <div className="rounded-md bg-gray-300 h-8 w-full" />
                </div> :
                <DropdownCard
                  selectedItemVal={selectedCurrency}
                  items={supportedNetworks.tokens[parseInt(selectedNetwork)].map(token => { return {itemImage : getTokenImg(token), itemValue : token}})}
                  onClickItem={(val) => setSelectedCurrency(val)}
                  isNetwork={false}/>}
              </div>
            </div>
            {
              <div className="flex w-[55%] justify-start gap-4">
                {!isConnected ?
                <ConnectButton/> :
                <button className="w-[45%] bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-500 transition" onClick={openConfirmBookingDialogBox}>Purchase</button>}
                <button className="w-[45%] border border-black py-3 rounded-xl hover:bg-gray-300 transition" onClick={onClickPrevious}>Go back</button>
              </div>
            }
            <CustomTicketOwner ticketOwner={ticketOwner} resetTicketOwner={resetCustomOwnerAddress} setTicketOwner={onChangeCustomOwnerAddress}/>
          </div>
          <div className="bg-[#0b0033] p-6 rounded-xl w-[30%] overflow-auto">
            <h2 className="text-white font-semibold text-lg mb-4">BOOKING SUMMARY</h2>
            <p className="text-sm mt-8">{getSeatIdsToStr(selectedSeats) + " (" + (selectedSeats ? Object.entries(selectedSeats).length : 0)  + "Tickets)"}</p>
            <p className="text-sm mt-4">{"Screen: " + sellerAndshowDetails.show.screenId}</p>
            <p className="text-sm mt-2 mb-2">{movieDetails.name + ": " + sellerAndshowDetails.name + ", " + sellerAndshowDetails.location + " | " + getUTCTimeToSellerTime(sellerAndshowDetails.show.showTime, sellerAndshowDetails.utcTimeDiff)}</p>
            <div className="flex">
              <InfoButton message="Can only modify and view ticket"/>
              <p className="text-sm">Ticket Owner:  {ticketOwner ? trimAddress(ticketOwner) : (address ? trimAddress(address) : "None")}</p>
            </div>

            <div className="border-t border-gray-700 py-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Booking amount</span>
                <span>USD {totalPrice}</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2">
                <span>Sub total</span>
                <span>USD {totalPrice}</span>
              </div>
            </div>
  
            <div className="text-yellow-500 font-bold mt-4 flex justify-between rounded">
              <span>Amount Payable</span>
              <span>USD {totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
  );
}
