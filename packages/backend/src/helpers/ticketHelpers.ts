import fs from "fs";
import path from "path";
import { OrderMetadata } from "shared";
import assert from "assert";
import { MutexRW } from "mutex-ts";

const ORDER_HISTORY_DIR = path.resolve(__dirname, "../../data/orderHistory");
const PENDING_CANCELS_FILE = path.resolve(
  __dirname,
  "../../data/pendingCancels.json",
);

const ordersLock : Map<string, MutexRW> = new Map();

/**
 * Ensures the directory exists before read/write.
 */
function ensureOrderHistoryDir() {
  if (!fs.existsSync(ORDER_HISTORY_DIR)) {
    fs.mkdirSync(ORDER_HISTORY_DIR, { recursive: true });
  }
}

function ensurePendingCancelsDir() {
  const dir = path.dirname(PENDING_CANCELS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function appendPendingCancel(order: OrderMetadata) {
  ensurePendingCancelsDir();
  let pending: OrderMetadata[] = [];
  if (fs.existsSync(PENDING_CANCELS_FILE)) {
    try {
      const raw = fs.readFileSync(PENDING_CANCELS_FILE, "utf-8");
      pending = JSON.parse(raw) as OrderMetadata[];
    } catch (e) {
      // If parsing fails, start fresh to avoid breaking cancellations persistence
      pending = [];
    }
  }
  pending.push(order);
  fs.writeFileSync(PENDING_CANCELS_FILE, JSON.stringify(pending, null, 2), "utf-8");
}

/**
 * Reads order history for a given wallet address.
 * @param address Wallet address (case-insensitive).
 * @returns Array of OrderMetadata objects (empty if none).
 */
export function readOrderHistory(address: string): OrderMetadata[] {
  ensureOrderHistoryDir();
  const filePath = path.join(ORDER_HISTORY_DIR, `${address.toLowerCase()}.json`);

  if (!fs.existsSync(filePath)) {
    return [];
  }

  const fileData = fs.readFileSync(filePath, "utf-8");
  try {
    console.log("got res", fileData)
    return JSON.parse(fileData) as OrderMetadata[];
  } catch (err) {
    console.error(`Error parsing order history for ${address}:`, err);
    return [];
  }
}

/**
 * Appends a new order to the address file.
 * @param address Wallet address
 * @param order OrderMetadata object
 */
export function writeOrderHistory(address: string, order: OrderMetadata) {
  ensureOrderHistoryDir();
  const filePath = path.join(ORDER_HISTORY_DIR, `${address.toLowerCase()}.json`);

  let orders = readOrderHistory(address);
  orders.push(order);

  fs.writeFileSync(filePath, JSON.stringify(orders, null, 2), "utf-8");
}

/**
 * cancels an existing order in the order history for the given address.
 * @param address Wallet address (case-insensitive)
 * @param orderId OrderId.
 * @returns true if modification succeeded, false otherwise
 */

export async function cancelOrderHistory(
  address: string,
  orderId: string,
): Promise<boolean> {
  ensureOrderHistoryDir();
  const filePath = path.join(ORDER_HISTORY_DIR, `${address.toLowerCase()}.json`);

  if (!fs.existsSync(filePath)) {
    return false;
  }

  let orders = readOrderHistory(address);
  let modified = false;
  let cancelledOrder: OrderMetadata | undefined = undefined;

  orders.map((order) => {
    if (order.orderId.localeCompare(orderId) == 0) {
      console.log("setting order as cancelled", order)
      modified = true;
      order.isCancelled = true;
      cancelledOrder = order;
      return order;
    }
    return order;
  });

  assert(modified, `No orders found for Id ${orderId}`)
  if (cancelledOrder) {
    appendPendingCancel(cancelledOrder);
  }

  return modified;
}

export async function cancelOrder(
  address: string,
  orderId: string,
): Promise<boolean> {
  ensureOrderHistoryDir();
  const filePath = path.join(ORDER_HISTORY_DIR, `${address.toLowerCase()}.json`);

  if (!fs.existsSync(filePath)) {
    return false;
  }

  let orders = readOrderHistory(address);
  let modified = false;
  let cancelledOrder: OrderMetadata | undefined = undefined;

  orders = orders.map((order) => {
    if (order.orderId.localeCompare(orderId) == 0) {
      console.log("setting order as cancelled", order)
      modified = true;
      order.isCancelled = true;
      cancelledOrder = order;
      return order;
    }
    return order;
  });

  assert(modified, `No orders found for Id ${orderId}`)
  fs.writeFileSync(filePath, JSON.stringify(orders, null, 2), "utf-8");

  return modified;
}
export function GetOrdersMutex(address: string) : MutexRW {
  return ordersLock.has(address.toLowerCase()) ? ordersLock.get(address.toLowerCase())! : ordersLock.set(address.toLowerCase(), new MutexRW()) && ordersLock.get(address.toLowerCase())!
}