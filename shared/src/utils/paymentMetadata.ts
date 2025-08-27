import { Hex, hexToBigInt, keccak256 } from "viem";
import { PaymentMetadata } from "../types/payment";
import { AbiCoder, ethers } from "ethers";
import { TicketLib } from "../../../typechain-types/src/Master";

export function getTicketStruct(data: PaymentMetadata) : TicketLib.StateStruct {
  const seatData : TicketLib.SeatDataStruct[] = []
  for (let i = 0; i < data.selectedSeats.length; i++) {
    const seatHex : Hex = ethers.hexlify(ethers.toUtf8Bytes(data.selectedSeats[i])) as Hex;
      seatData.push({
        seatId: ethers.zeroPadBytes(seatHex, 32),
        price: data.seatPrices[i]
    })
  }
  const seatIdHex : Hex = ethers.hexlify(ethers.toUtf8Bytes(data.showId)) as Hex;
  return {
      asset : data.asset,
      showTime : data.showTime,
      owner : data.ticketOwner,
      showId : ethers.zeroPadBytes(seatIdHex, 12),
      originTimestamp : data.originTimestampUTC,
      seats : seatData,
      amount : data.totalAmount,
  }
  
}