import { Mutex } from "mutex-ts";
import { BookingData } from "shared";
import { LOCK_DURATION_SEC } from "../helpers/consts";
import { ethers } from "ethers";
import { Master__factory } from "typechain-types";
import { Address, isAddressEqual } from "viem";
import { bookSeatIds, GetSeatLock } from "../helpers/seatLayout";
import { GetOrdersMutex, writeOrderHistory } from "../helpers/ticketHelpers";
import { fetchMovies } from "../api/movies/controller";
import { getMovies } from "../api/movies/service";
import assert from "assert";
import { getRPCProvider } from "../helpers/chains";

class PaymentStatusSyncer {
  private pendingOrders: BookingData[];
  private ordersMutex : Mutex;
  constructor() {
    this.ordersMutex = new Mutex();
    this.pendingOrders = [];
  }
  /**
   * Start
   */
  public async Start() {
    console.log("Started cron")
    let isRunning = false;
    setInterval(async () => {
    
    const release = await this.ordersMutex.obtain()
    if (isRunning) {
      release()
      return 
    }
    isRunning = true
    try {
      for (let i = 0; i < this.pendingOrders.length; i++) {
        const order = this.pendingOrders[i];
        console.log("validating cron for", order, i, this.pendingOrders.length)
        assert(order && order != undefined, "Order isn't present")
        if ((order.paymentData.originTimestampUTC + 1.2 * LOCK_DURATION_SEC) * 1000 < Date.now()) {
          this.pendingOrders[i] = this.pendingOrders[this.pendingOrders.length - 1]
          this.pendingOrders.pop()
          i--;
        } else {
          const rpcUrl = await getRPCProvider(order.paymentData.selectedChain)
          const provider = new ethers.JsonRpcProvider(rpcUrl);
          const master = Master__factory.connect(order.paymentData.masterContract, provider);
          const tokenOwner = await master.ownerOf(order.paymentData.purchaseDataHash) as Address
          if (isAddressEqual(tokenOwner, order.paymentData.ticketOwner)) {
            {
              const seatsMutex = GetSeatLock(order.seller.id, order.show.id)
              using _ = await seatsMutex.lockRW()
              await bookSeatIds(order.seller.id, order.show.id, order.seats.map((seat) => seat.id))
            }
            const movieData = await getMovies({movieId : order.paymentData.movieId})
            assert(movieData && movieData.length == 1, `failed to fetch movie in cron ${order.paymentData.movieId}`)
            {
              const mutex = GetOrdersMutex(order.paymentData.ticketOwner)
              using _ = await mutex.lockRW()
              writeOrderHistory(tokenOwner, {
                ...order,
                orderId : order.paymentData.purchaseDataHash,
              })
            }
            this.pendingOrders[i] = this.pendingOrders[this.pendingOrders.length - 1]
            this.pendingOrders.pop()
            i--;
          }
        }
      }
    } catch (error) {
      console.log("Got error", error)
    } finally {
      isRunning = false
      release()
    }
    }, 5000)
  }

  /**
   * AddPendingOrderData
   */
  public async AddPendingOrderData(data: BookingData) {
    const release = await this.ordersMutex.obtain()
    try {
      console.log("Added to queue", data)
      this.pendingOrders.push(data)
    } catch (error) {
      console.log("Got error", error)
    } finally {
      release()
    }
  }
}

export const paymetSyncerCron = new PaymentStatusSyncer();