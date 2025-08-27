"use client";

import React, { useEffect, useState } from "react";
import { SupportedCurrency } from "../../../../../shared";
import { CurrencySelectionProps } from "../../types/props/CurrencySelectionProps";
import { fetchSellerAcceptedCurrencies, reserveSeats } from "../../api/fetchSellers";
import { Menu } from "@headlessui/react";
import { DarkChevronDownIcon } from "../Shared/shared";
import { chainImageMap } from "../../constants/constants";
import Image from "next/image";
import { displayLongDate, displayTime, fetchChainName, getSeatIdsToStr, getTokenImg, trimAddress } from "../../utils/helpers";
import { ToastNotification } from "../Toast/ToastNotification";
import { ConfirmBookingDialog } from "../DialogBox/ConfirmBooking";
import { useAccount } from "wagmi";
import toast from "react-hot-toast";
import { CustomTicketOwner } from "../CustomTicketOwner/CustomTicketOwner";
import { InfoButton } from "../Button/infoButton";

export const CurrencySelectionPage : React.FC<CurrencySelectionProps> = ({
    sellerId, selectedSeats, sellerAndshowDetails, movieDetails, totalPrice, ticketOwner,
    onClickPrevious, onClickPurchase, onChangeCustomOwnerAddress, resetCustomOwnerAddress
  }) => {
  const [supportedNetworks, setSupportedNetworks] = useState<SupportedCurrency>({tokens : {}});
  const [selectedNetwork, setSelectedNetwork] = useState<string>("");
  const [selectedCurrency, setSelectedCurrency] = useState<string>("");
  const [openConfirmBooking, setOpenConfirmBooking] = useState<boolean>(false)
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
  }
  return (
      <div className="w-full text-white mt-12">
        <ToastNotification/>
        <ConfirmBookingDialog isOpen={openConfirmBooking} onClose={() => setOpenConfirmBooking(false)} onConfirm={handleConfirmPurchase} seatCount={Object.entries(selectedSeats).length} totalPrice={totalPrice}/>
        <main className="flex items-start justify-between">
          <section className="bg-gradient-to-r from-indigo-300 to-purple-300 p-8 rounded-xl w-[65%] h-[30vh]">
            <h2 className="text-lg font-semibold mb-4">PAYMENT</h2>
            <div className="flex gap-8 mb-6">
              <div className="w-1/2">
                <p className="text-light font-semibold text-sm">Select Chain</p>
                <Menu>
                  <Menu.Button className="w-full p-2 rounded text-white border border-white">
                    <div className="flex gap-2 items-center">
                      <Image
                        src={chainImageMap[parseInt(selectedNetwork)] ?? ""}
                        alt={fetchChainName(selectedNetwork) ?? ""}
                        className="size-6"
                      />
                      <p className="font-semibold text-base">
                        {fetchChainName(selectedNetwork)}
                      </p>
                      <div className="ml-auto">
                        <DarkChevronDownIcon />
                      </div>
                    </div>
                  </Menu.Button>
                  <div className="relative w-full">
                    {Object.entries(supportedNetworks.tokens).length > 1 && (
                      <Menu.Items className="absolute z-10 w-full bg-gradient-to-r from-indigo-300 to-purple-300 p-2 rounded text-white border border-white">
                        {Object.entries(supportedNetworks.tokens).map(([network], index) => (
                          <Menu.Item key={index}>
                            <div
                              className="hover:bg-purple-100 hover:cursor-pointer rounded-[0.3rem]"
                              onClick={() => setSelectedNetwork(network)}
                            >
                              <div className="flex gap-2 py-2 px-2">
                                <Image
                                  src={chainImageMap[parseInt(network)] ?? ""}
                                  alt={fetchChainName(network)}
                                  className="size-6"
                                />
                                <p className="font-[500] text-base">
                                  {fetchChainName(network)}
                                </p>
                              </div>
                            </div>
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    )}
                  </div>
                </Menu>
              </div>
              <div className="w-1/2">
                <p className="text-light font-semibold text-sm">Select Cryptocurrency</p>
                <Menu>
                  <Menu.Button className="w-full p-2 rounded bg-gray text-white border border-white">
                    <div className="flex gap-2 items-center">
                      {selectedCurrency == "" ? (
                        <div className="animate-pulse flex space-x-4 w-full">
                          <div className="rounded-md bg-gray-300 h-8 w-full" />
                        </div>
                      ) : (
                        <>
                          <Image
                            src={getTokenImg(selectedCurrency)}
                            alt={selectedCurrency}
                            className="size-6"
                          />
                          <p className="font-semibold text-base">
                            {selectedCurrency}
                          </p>
                          <div className="ml-auto">
                            <DarkChevronDownIcon />
                          </div>
                        </>
                      )}
                    </div>
                  </Menu.Button>
                  <div className="relative w-full">
                    {supportedNetworks.tokens[selectedNetwork] && supportedNetworks.tokens[selectedNetwork].length > 1 && (
                      <Menu.Items className="absolute z-10 w-full bg-gradient-to-r from-indigo-300 to-purple-300 p-2 rounded text-white border border-white">
                        {supportedNetworks.tokens[parseInt(selectedNetwork)].map((asset, index) => (
                          <Menu.Item key={index}>
                            <div
                              className="hover:bg-purple-100 hover:cursor-pointer rounded-[0.3rem]"
                              onClick={() => setSelectedCurrency(asset)}
                            >
                              <div className="flex gap-2 py-2 px-2">
                              <Image
                                src={getTokenImg(asset)}
                                alt={asset}
                                className="size-6"
                                />
                                <p className="font-semibold text-base">
                                  {asset}
                                </p>
                              </div>
                            </div>
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    )}
                  </div>
                </Menu>
              </div>
            </div>
            {/* <h2 className="text-white font-semibold text-lg mb-4 items-center">ADD TIMER</h2> */}
            <div className="flex w-[55%] justify-start mt-14 gap-4">
              <button className="w-[45%] bg-purple-700 border border-white py-3 rounded-xl hover:bg-purple-500 transition" onClick={openConfirmBookingDialogBox}>Purchase</button>
              <button className="w-[45%] border border-white py-3 rounded-xl hover:bg-gray-300 transition" onClick={onClickPrevious}>Go back</button>
            </div>
            <CustomTicketOwner ticketOwner={ticketOwner} resetTicketOwner={resetCustomOwnerAddress} setTicketOwner={onChangeCustomOwnerAddress}/>
          </section>
        <section className="bg-[#0b0033] p-6 rounded-xl w-[30%] overflow-auto">
            <h2 className="text-white font-semibold text-lg mb-4">BOOKING SUMMARY</h2>
            <p className="text-sm mt-8">{getSeatIdsToStr(selectedSeats) + " (" + (selectedSeats ? Object.entries(selectedSeats).length : 0)  + "Tickets)"}</p>
            <p className="text-sm mt-4">{"Screen: " + sellerAndshowDetails.show.screenId}</p>
            <p className="text-sm mt-2 mb-2">{movieDetails.name + ": " + sellerAndshowDetails.name + ", " + sellerAndshowDetails.location + " | " + displayLongDate(new Date(sellerAndshowDetails.show.showTime)) + " " + displayTime(new Date(sellerAndshowDetails.show.showTime))}</p>
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
  
            <div className="bg-purple-700 text-white px-4 py-2 mt-4 flex justify-between rounded">
              <span>Amount Payable</span>
              <span>USD {totalPrice}</span>
            </div>
        </section>
        </main>
      </div>
  );
}
