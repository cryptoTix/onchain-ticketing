import { Mutex } from "mutex-ts";
import { BookingData } from "../../../../shared";
import { LOCK_DURATION_SEC } from "../helpers/consts";
import { ethers } from "ethers";
import { Master__factory } from "../../../../typechain-types";
import { Address, isAddressEqual } from "viem";
import { bookSeatIds } from "../helpers/seatLayout";
import { writeOrderHistory } from "../helpers/ticketHelpers";
import { fetchMovies } from "../api/movies/controller";
import { getMovies } from "../api/movies/service";

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
    setInterval(async () => {
    const release = await this.ordersMutex.obtain()
    try {
      for (let i = 0; i < this.pendingOrders.length; i++) {
        const order = this.pendingOrders[i];
        if (order.paymentData.originTimestampUTC + 2 * LOCK_DURATION_SEC < Date.now() / 1000) {
          this.pendingOrders[i] = this.pendingOrders[-1]
          this.pendingOrders.pop()
          i--;
        } else {
          const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
          const master = Master__factory.connect(order.paymentData.masterContract, provider);
          const tokenOwner = await master.ownerOf(order.paymentData.purchaseDataHash) as Address
          if (isAddressEqual(tokenOwner, order.paymentData.ticketOwner)) {
            if (await bookSeatIds(order.paymentData.sellerId, order.paymentData.showId, order.paymentData.selectedSeats)) {
              const movieData = await getMovies(order.paymentData.movieId)
              if (movieData && movieData.length == 1) {
                writeOrderHistory(tokenOwner, {
                  ...order,
                  orderId : order.paymentData.purchaseDataHash,
                  movie : movieData[0]
                })
                this.pendingOrders[i] = this.pendingOrders[-1]
                this.pendingOrders.pop()
                i--;
              } else {
                console.log("failed to fetch movie in cron")
              }
            }
          }
        }
      }
    } catch (error) {
      console.log("Got error", error)
    } finally {
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
      this.pendingOrders.push(data)
    } catch (error) {
      console.log("Got error", error)
    } finally {
      release()
    }
  }
}

export const paymetSyncerCron = new PaymentStatusSyncer();