import fs from "fs";
import path from "path";
import { OrderMetadata } from "../../../../shared";

const ORDER_HISTORY_DIR = path.resolve(__dirname, "../../data/orderHistory");

/**
 * Ensures the directory exists before read/write.
 */
function ensureOrderHistoryDir() {
  if (!fs.existsSync(ORDER_HISTORY_DIR)) {
    fs.mkdirSync(ORDER_HISTORY_DIR, { recursive: true });
  }
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
 * Modifies an existing order in the order history for the given address.
 * @param address Wallet address (case-insensitive)
 * @param matcher Function that identifies the order to modify (e.g., match by order ID)
 * @param modifier Function that modifies the matched order in-place
 * @returns true if modification succeeded, false otherwise
 */
export function modifyOrderHistory(
  address: string,
  matcher: (order: OrderMetadata) => boolean,
  modifier: (order: OrderMetadata) => void
): boolean {
  ensureOrderHistoryDir();
  const filePath = path.join(ORDER_HISTORY_DIR, `${address.toLowerCase()}.json`);

  if (!fs.existsSync(filePath)) {
    return false;
  }

  let orders = readOrderHistory(address);
  let modified = false;

  orders = orders.map((order) => {
    console.log("curr order", order)
    if (matcher(order)) {
      modifier(order);
      console.log("setting order as cancelld", order.isCancelled)
      modified = true;
    }
    return order;
  });

  if (modified) {
    fs.writeFileSync(filePath, JSON.stringify(orders, null, 2), "utf-8");
  }

  return modified;
}
