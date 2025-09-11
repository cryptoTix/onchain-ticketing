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
import { PaymentMetadata, ValidationSignatureResponse } from "../models/paymentRequest";
import { Asset } from "../models/seller";
import { getTokenImg } from "../utils/helpers";
import { useAccount } from "wagmi";
import { approve, isApproved, purchase } from "../actions/deposit";
import { ToastNotification } from "../components/Toast/ToastNotification";
import { Dialog } from "@headlessui/react";

export default function PaymentPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const requestId = searchParams.get("requestId")!; // TODO: display some invalid page on invalid request ID
  const [paymentMetadata, setPaymentMetadata] = useState<PaymentMetadata>()
  const [validationSignatureResponse, setValidationSignatureResponse] = useState<ValidationSignatureResponse>()
  const [acceptedAssets, setAcceptedAssets] = useState<Asset[]>([])
  const [selectedChain, setSelectedChain] = useState<Chain>(mainnet);
  const [selectedAsset, setSelectedAsset] = useState<Asset>();
  const [approved, setIsApproved] = useState<boolean>(false);
  const [openDialogBox, setOpenDialogBox] = useState<boolean>(false);
  const [isPendingTx, setPendingTx] = useState<boolean>(false);
  const {isConnected, address} =  useAccount()

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
    }
    loadAssets()
  }, [paymentMetadata])

  // Set assets
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
  async function onClickApproveNPurchase() {
    if (selectedAsset !== undefined && selectedAsset.chainId === selectedChain.id){
      const validationData = await fetchValidationSignature({
        paymentRequestId : requestId,
        assetAddress : selectedAsset.address,
        chainId : selectedChain.id,
        user : address as `0x{string}`,
      })
      setValidationSignatureResponse(validationData)
      setIsApproved(await isApproved(validationData))
      setOpenDialogBox(true);
    }
  }
  async function onClickApprove() {
    if (validationSignatureResponse !== undefined ){

      if (!approved) {
        setPendingTx(true)
        const isApproved = await approve(validationSignatureResponse)
        setPendingTx(false)
        if (isApproved) {
          // set approved as true and proceed further
          setIsApproved(true)
        } else{
          // close the dialog box
          setOpenDialogBox(false)
        }
      }
    }
  }
  async function onClickPurchase() {
    if (validationSignatureResponse !== undefined ){
      if (approved) {
        setPendingTx(true)
        const status = await purchase(validationSignatureResponse)
        setPendingTx(false)
        setOpenDialogBox(false)
        if (status) { // on success redirect to ticket page
          router.push(`/ticket?requestId=${requestId}`);
        }
      }
    }
  }
    return (
      <div className="w-screen h-screen text-white flex flex-col justify-between overflow-hidden">
        <ToastNotification/>
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
            <button className={`bg-gray-800 text-white px-6 py-3 rounded-md ${!isConnected ? `opacity-50` : `` }`}  onClick={() => {onClickApproveNPurchase()}}>Approve & Purchase</button>
              <button className="border border-white text-white px-4 py-2 rounded" onClick={() => {router.back()}}>Cancel</button>
            </div>
            <br/>
            <h2 className="text-white font-semibold text-lg mb-4 items-center">ADD TIMER</h2>
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
        <Dialog open={openDialogBox} onClose={() => {}} className="relative z-50">
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="max-w-sm w-full bg-[#1A1A1A] text-white p-6 rounded-xl flex flex-col items-center space-y-4 shadow-xl border border-gray-700">
              <img
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
              <p className="text-xs text-purple-300 text-center">Do not close the web page</p>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    );
};
  

