import fs from 'fs';
import path from 'path';
import { PaymentMetadata } from '../../../../shared';


// Path to directory where booking data is stored
const BASE_DIR = path.resolve(__dirname, '../../data/booking/all.json');

function getSellerFilePath(): string {
  return BASE_DIR
}

function readSellerBookings(): Record<string, PaymentMetadata> {
  const filePath = getSellerFilePath();
  if (!fs.existsSync(filePath)) {
    return {};
  }
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

function writeSellerBookings( bookings: Record<string, PaymentMetadata>): void {
  const filePath = getSellerFilePath();
  const dirPath = path.dirname(filePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(filePath, JSON.stringify(bookings, null, 2), 'utf-8');
}

/**
 * Get booking data by ID
 */
export function getBookingById(bookingId: string): PaymentMetadata | null {
  const bookings = readSellerBookings();
  return bookings[bookingId] || null;
}

/**
 * Set booking data by ID (create or update)
 */
export function setBookingById(bookingId: string, data: PaymentMetadata): void {
  const bookings = readSellerBookings();
  bookings[bookingId] = data;
  writeSellerBookings(bookings);
}
