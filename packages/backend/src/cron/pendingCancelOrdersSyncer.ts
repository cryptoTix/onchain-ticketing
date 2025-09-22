import fs from "fs";
import path from "path";
import { OrderMetadata } from "shared";
import { cancelOrder, GetOrdersMutex } from "../helpers/ticketHelpers";
import { cancelSeatIds, GetSeatLock } from "../helpers/seatLayout";

const PENDING_CANCELS_FILE = path.resolve(
  __dirname,
  "../../data/pendingCancels.json",
);

function readPendingCancels(): OrderMetadata[] {
  try {
    if (!fs.existsSync(PENDING_CANCELS_FILE)) return [];
    const raw = fs.readFileSync(PENDING_CANCELS_FILE, "utf-8");
    if (!raw.trim()) return [];
    return JSON.parse(raw) as OrderMetadata[];
  } catch (e) {
    console.error("pendingCancelOrdersSyncer: failed to read pendingCancels.json", e);
    return [];
  }
}

const INTERVAL_MS = 5000;
let isRunning = false;

const isCancelled : Set<string> = new Set()
/**
 * Starts a lightweight cron that polls data/pendingCancels.json for pending cancel orders.
 * Logs discovered orders by default; accepts hooks for custom processing.
 */
export function startPendingCancelOrdersSyncer() {
  setInterval(async () => {
    if (isRunning) return; // avoid overlapping runs
    isRunning = true;
    try {
      const pending = readPendingCancels();
      if (pending.length > 0) {
        for (const o of pending) {
          if (isCancelled.has(o.orderId)) continue
          {
            const seatsMutex = GetSeatLock(o.seller.id, o.show.id)
            using _ = await seatsMutex.lockRW()
            cancelSeatIds(o.seller.id, o.show.id, o.seats.map((seatData) => seatData.id))
          }
          {
            const ordersMutex = GetOrdersMutex(o.paymentData.ticketOwner)
            using _ = await ordersMutex.lockRW()
            // mark order as cancelled
            cancelOrder(o.paymentData.ticketOwner, o.orderId)
          }
          isCancelled.add(o.orderId)
        }
      }
    } catch (e) {
      console.error("pendingCancelOrdersSyncer: error during poll", e);
    } finally {
      isRunning = false;
    }
  }, INTERVAL_MS);
}


