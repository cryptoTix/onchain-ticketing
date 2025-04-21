// pages/payment.tsx
"use client"
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { fetchPaymentRequest, fetchValidationSignature } from "../actions/migration";
import { fetchSellerAcceptedAssets } from "../utils/showlist";
import { Chain } from "viem";
import { mainnet } from "viem/chains";
import { Menu } from "@headlessui/react";
import { config } from "../contexts/Web3Provider";
import { chainImageMap } from "../constants/constants";
import { DarkChevronDownIcon } from "../components/Shared/shared";
import { PaymentMetadata } from "../models/paymentRequest";
import { Asset } from "../models/seller";
import { getTokenImg } from "../utils/helpers";
import { useAccount } from "wagmi";

export default function PaymentPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const requestId = searchParams.get("requestId")!; // TODO: display some invalid page on invalid request ID
  const [paymentMetadata, setPaymentMetadata] = useState<PaymentMetadata>()
  const [isAssetFetched, setIsAssetFetched] = useState<boolean>(false)
  const [acceptedAssets, setAcceptedAssets] = useState<Asset[]>([])
  const [selectedChain, setSelectedChain] = useState<Chain>(mainnet);
  const [selectedAsset, setSelectedAsset] = useState<Asset>();
  const {isConnected} =  useAccount()

  // Fetch and load the payment metadata for requestId
  useEffect(() => {
    async function loadPaymentData() {
      const data = await fetchPaymentRequest(requestId);
      setPaymentMetadata(data)
    }
    loadPaymentData()
  }, [])

  // Fetch the assets accepted by seller
  useEffect(() => {
    async function loadAssets() {
      const assets = paymentMetadata !== undefined ? 
      await fetchSellerAcceptedAssets(paymentMetadata.sellerId) : []
      for (let index = 0; index < assets.length; index++) {
        if (assets[index]!.chainId === selectedChain.id) {
          setSelectedAsset(assets[index]);
          break;
        }
      }
      setAcceptedAssets(assets)
      setIsAssetFetched(true)
    }
    setIsAssetFetched(false)
    loadAssets()
  }, [paymentMetadata])

  // Set 
  useEffect(() => {
    setSelectedAsset({
      symbol : ""
    } as Asset)
    for (let index = 0; index < acceptedAssets.length; index++) {
      if (acceptedAssets[index]!.chainId === selectedChain.id) {
        setSelectedAsset(acceptedAssets[index]);
        break;
      }
      if(index === acceptedAssets.length - 1) setSelectedAsset({symbol : ""} as Asset)
    }
  }, [selectedChain])
  async function onClickPurchase() {
    const signature = selectedAsset !== undefined && selectedAsset.chainId === selectedChain.id ? 
    await fetchValidationSignature( {
      paymentRequestId : requestId,
      assetAddress : selectedAsset.address,
      chainId : selectedChain.id
    }) : "Not fetched"
    console.log(signature)
  }
    return (
      <div className="w-screen h-screen text-white flex flex-col justify-between overflow-hidden">
        <main className="flex justify-center items-start gap-10 px-10 py-10 flex-grow max-w-7xl mx-auto w-full">
          <section className="bg-gradient-to-r from-indigo-300 to-purple-300 p-12 rounded-xl w-[80%]">
            <h2 className="text-lg font-semibold mb-4">PAYMENT</h2>
        
            <div className="flex gap-8 mb-6">
              <div className="w-1/2">
                <p className="text-light font-semibold text-sm">CHAIN</p>
                <Menu>
                  <Menu.Button className="w-full p-2 rounded bg-gray text-white border border-white">
                    <div className="flex gap-2 items-center">
                      <Image
                        src={chainImageMap[selectedChain.id] ?? ""}
                        alt={selectedChain.name.toLowerCase() ?? ""}
                        className="size-6"
                      />
                      <p className="font-semibold text-base">
                        {selectedChain.name}
                      </p>
                      <div className="ml-auto">
                        <DarkChevronDownIcon />
                      </div>
                    </div>
                  </Menu.Button>
                  <div className="relative w-full">
                    {config.chains.length > 1 && (
                      <Menu.Items className="w-full bg-purple-400 p-2 rounded text-white border border-white">
                        {config.chains.map((chain, index) => (
                          <Menu.Item key={index}>
                            <div
                              className="hover:bg-purple-100 hover:cursor-pointer rounded-[0.3rem]"
                              onClick={() => setSelectedChain(chain)}
                            >
                              <div className="flex gap-2 py-2 px-2">
                                <Image
                                  src={chainImageMap[chain.id] ?? ""}
                                  alt={chain.name.toLowerCase()}
                                  className="size-6"
                                />
                                <p className="font-[500] text-base">
                                  {chain.name}
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
                      {!selectedAsset ? (
                        <div className="animate-pulse flex space-x-4 w-full">
                          <div className="rounded-md bg-gray-300 h-8 w-full" />
                        </div>
                      ) : (
                        <>
                          <Image
                            src={getTokenImg(selectedAsset.symbol)}
                            alt={selectedAsset.symbol}
                            className="size-6"
                          />
                          <p className="font-semibold text-base">
                            {selectedAsset.symbol }
                          </p>
                          <div className="ml-auto">
                            <DarkChevronDownIcon />
                          </div>
                        </>
                      )}
                    </div>
                  </Menu.Button>
                  <div className="relative w-full">
                    {acceptedAssets.length > 1 && (
                      <Menu.Items className="w-full bg-purple-400 p-2 rounded text-white border border-white">
                        {acceptedAssets.filter((asset) => { asset.chainId === selectedChain.id}).map((asset, index) => (
                          <Menu.Item key={index}>
                            <div
                              className="hover:bg-purple-100 hover:cursor-pointer rounded-[0.3rem]"
                              onClick={() => setSelectedAsset(asset)}
                            >
                              <div className="flex gap-2 py-2 px-2">
                              <Image
                                src={getTokenImg(asset.symbol)}
                                alt={asset.symbol}
                                className="size-6"
                                />
                                <p className="font-semibold text-base">
                                  {asset.symbol }
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
  
            <div className="flex gap-4">
            <button className={`bg-gray-800 text-white px-6 py-3 rounded-md ${!isConnected ? `opacity-50` : `` }`} disabled = {isConnected}  onClick={() => {onClickPurchase()}}>Purchase</button>
              <button className="border border-white text-white px-4 py-2 rounded" onClick={() => {router.back()}}>Cancel</button>
            </div>
          </section>
  
          {paymentMetadata !== undefined ? (<section className="bg-[#0b0033] p-6 rounded-xl h-[50vh] w-[30%] overflow-auto space-y-12">
            <h2 className="text-white font-semibold text-lg mb-4">BOOKING SUMMARY</h2>
            <p className="text-sm mb-1">{paymentMetadata.seatIds.toString() + " (" + paymentMetadata.seatIds.length + "Tickets)"}</p>
            <p className="text-xs text-gray-400 mb-4">Screen 2, 01:20 PM</p>
  
            <div className="border-t border-gray-700 py-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Booking amount</span>
                <span>USD {paymentMetadata?.totalPrice.sub(1).toString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Convenience fees</span>
                <span>USD 1</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2">
                <span>Sub total</span>
                <span>USD {paymentMetadata?.totalPrice.toString()}</span>
              </div>
            </div>
  
            <div className="bg-purple-700 text-white px-4 py-2 mt-4 flex justify-between rounded">
              <span>Amount Payable</span>
              <span>USD {paymentMetadata?.totalPrice.sub(1).toString()}</span>
            </div>
          </section>) : (<section className="bg-[#0b0033] rounded-xl h-[50vh] w-[30%] overflow-auto space-y-12 animate-pulse">
                          <div className="rounded-md bg-purple-300 w-full h-full" />
                        </section>)}
        </main>
  
        <footer className="px-10 py-6 flex justify-between items-center border-t border-gray-700">
          <h2 className="text-yellow-400 font-bold text-xl">CRYPTOTIX</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Contact For Partnership</button>
          <div className="flex gap-4">
            <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" /></a>
            <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
          </div>
        </footer>
      </div>
    );
  };
  

