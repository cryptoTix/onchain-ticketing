import fs from "fs/promises";
import path from "path";
import { SeatLayout, BlockData, SeatData, SeatClass } from "shared";
import { Mutex, MutexRW } from "mutex-ts";
import assert from "assert";
import { LOCK_DURATION_MILLI_SEC, LOCK_DURATION_SEC } from "./consts";

const LAYOUT_DIR = path.resolve(__dirname, "../../data/layouts");

const seatLayoutLock : Map<string, MutexRW> = new Map();

export async function getOrCreateSeatLayout(sellerId: string, showId: string): Promise<SeatLayout> {
  console.log("fethcing for", sellerId, showId)
  const filePath = path.join(LAYOUT_DIR, sellerId, `${showId}.json`);

  try {
    // Check if file exists
    const data = await fs.readFile(filePath, "utf-8");
    console.log("exists data", sellerId, showId)
    return JSON.parse(data) as SeatLayout;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") {
      console.log("desn't exists data", sellerId, showId)
      // File doesn't exist — generate and save
      const layout = generateRandomSeatLayout(); // you already have this logic
      const sellerDir = path.join(LAYOUT_DIR, sellerId);

      await fs.mkdir(sellerDir, { recursive: true });
      await fs.writeFile(filePath, JSON.stringify(layout, null, 2), "utf-8");

      return layout;
    } else {
      throw err; // Propagate other unexpected errors
    }
  }
}

/**
 * Updates the seat layout file with the new layout
 * @param sellerId - Unique ID of the seller
 * @param showId - Unique ID of the show
 * @param seatLayout - Complete seat layout to be saved
 */
export async function updateSeatLayoutFile(sellerId: string, showId: string, seatLayout: SeatLayout) {
  const filePath = path.join(LAYOUT_DIR, sellerId, `${showId}.json`);

  try {
    // Check if file exists
    await fs.readFile(filePath, "utf-8");
    await fs.writeFile(filePath, JSON.stringify(seatLayout, null, 2), "utf-8");
  } catch (err) {
    throw err; // Propagate other unexpected errors
  }
}

/**
 * Books the seats
 * @param sellerId - Unique ID of the seller
 * @param showId - Unique ID of the show
 * @param seatIds - seatIds to book
 */
export async function bookSeatIds(sellerId: string, showId: string, seats: string[]) : Promise<boolean> {
  try {
    const seatLayout = await getOrCreateSeatLayout(sellerId, showId);
    let selectedSeatIdx = 0;
    while (selectedSeatIdx < seats.length) {
      let found = false;
      Object.entries(seatLayout.seatClassMap).map(([_, blockData]) => {
        if (selectedSeatIdx == seats.length) {
          return
        }
        for (let i = 0; i < blockData.length; i++) {
            const rowData = blockData[i];
            for (let j = 0; j < rowData.length; j++) {
                if (rowData[j].isSeat) {                        
                    const seatData = new SeatClass(rowData[j].seatData!);
                    const selectedSeatId = seats[selectedSeatIdx];
                    if (selectedSeatId.localeCompare(seatData.id) == 0) {
                        found = true;
                        console.log("found seatId", selectedSeatId, selectedSeatIdx)
                        assert(!seatData.isBooked, `seat already booked ${seatData}`)
                        rowData[j].seatData!.isBooked = true
                        selectedSeatIdx++;
                        return;
                    }
                }
            }
        }
      })
      assert(found, `couldn't find seatId to cancel ${seats[selectedSeatIdx]}`)
    }

    updateSeatLayoutFile(sellerId, showId, seatLayout)
    return (selectedSeatIdx == seats.length)
  } catch (error) {
    console.log("got error", error)
    return false
  }
}

/**
 * Lock seatIds for given sellerId, showId
 */

export async function lockSeats(sellerId: string, showId: string, seats: string[]) : Promise<boolean> {
  let isValid: boolean = true;
  try {
      const seatLayout = await getOrCreateSeatLayout(sellerId, showId);
      let selectedSeatIdx = 0;
      let found = true;
      while (found) {
          found = false;
          if (!isValid || selectedSeatIdx == seats.length || found) {
            break
          }
          console.log("finding seat", seats[selectedSeatIdx], selectedSeatIdx, seats.length)
          Object.entries(seatLayout.seatClassMap).map(([_, blockData]) => {
              if (!isValid || selectedSeatIdx == seats.length || found) {
                  return
              }
              for (let i = 0; i < blockData.length; i++) {
                  const rowData = blockData[i];
                  for (let j = 0; j < rowData.length; j++) {
                      if (rowData[j].isSeat) {                        
                          const seatData = new SeatClass(rowData[j].seatData!);
                          const selectedSeatId = seats[selectedSeatIdx];
                          if (selectedSeatId.localeCompare(seatData.id) == 0) {
                              console.log("found seatId", selectedSeatId, selectedSeatIdx)
                              if (seatData.isBooked || seatData.isLocked) {
                                  console.log("seat already booked", seatData)
                                  isValid = false;
                              } else {
                                  console.log("locking seats", seatData)
                                  // lock the seats
                                  rowData[j].seatData!.lockedTill = Date.now() + LOCK_DURATION_MILLI_SEC
                              }
                              found = true;
                              selectedSeatIdx++;
                              return;
                          }
                      }
                  }
              }
          })
      }
      if (selectedSeatIdx != seats.length) {
          console.log("invalid selected seats")
          return false;
      }
      updateSeatLayoutFile(sellerId, showId, seatLayout);
  } catch (err) {
      console.error("got error",err)
      isValid = false
  }
  return isValid
}

/**
 * Unlock seatIds for given sellerId, showId
 */

export async function unlockSeats(sellerId: string, showId: string, seats: string[]) : Promise<boolean> {
  try {
      const seatLayout = await getOrCreateSeatLayout(sellerId, showId);
      let selectedSeatIdx = 0;
      let found = true;
      while (found) {
          found = false;
          console.log("finding seat", seats[selectedSeatIdx], selectedSeatIdx, seats.length)
          Object.entries(seatLayout.seatClassMap).map(([_, blockData]) => {
              if (selectedSeatIdx == seats.length || found) {
                  return
              }
              for (let i = 0; i < blockData.length; i++) {
                  const rowData = blockData[i];
                  for (let j = 0; j < rowData.length; j++) {
                      if (rowData[j].isSeat) {                        
                        const seatData = new SeatClass(rowData[j].seatData!);
                        const selectedSeatId = seats[selectedSeatIdx];
                        if (selectedSeatId.localeCompare(seatData.id) == 0) {
                              console.log("unlock", selectedSeatId, selectedSeatIdx, seatData)
                              assert(seatData.isLocked, "Attempting to unlock a locked seat")
                              assert(!seatData.isBooked, "Attempting to unlock a booked seat")
                              rowData[j].seatData!.lockedTill = 0
                              found = true;
                              selectedSeatIdx++;
                              return;
                          }
                      }
                  }
              }
          })
      }
      if (selectedSeatIdx != seats.length) {
          console.log("Not all seatId present")
          return false;
      }
      updateSeatLayoutFile(sellerId, showId, seatLayout);
  } catch (err) {
      console.error("got error",err)
      return false
  }
  return true
}
/**
 * Cancels the seats (marks as not booked) if they are currently booked and locked
 * @param sellerId - Unique ID of the seller
 * @param showId - Unique ID of the show
 * @param seats - seatIds to cancel
 */
export async function cancelSeatIds(sellerId: string, showId: string, seats: string[]) : Promise<boolean> {
  try {
    const seatLayout = await getOrCreateSeatLayout(sellerId, showId);
    let selectedSeatIdx = 0;
    while (selectedSeatIdx < seats.length) {
      if (selectedSeatIdx == seats.length) {
        break;
      }
      let found = false;
      Object.entries(seatLayout.seatClassMap).map(([_, blockData]) => {
        if (selectedSeatIdx == seats.length) {
          return;
        }
        for (let i = 0; i < blockData.length; i++) {
          const rowData = blockData[i];
          for (let j = 0; j < rowData.length; j++) {
            if (rowData[j].isSeat) {
              const seatData = new SeatClass(rowData[j].seatData!);
              const selectedSeatId = seats[selectedSeatIdx];
              if (selectedSeatId.localeCompare(seatData.id) == 0) {
                found = true;
                console.log("found seatId for cancel", selectedSeatId, selectedSeatIdx)
                assert(seatData.isBooked, "seat not booked")
                rowData[j].seatData!.lockedTill = 0
                rowData[j].seatData!.isBooked = false
                selectedSeatIdx++;
                return;
              }
            }
          }
        }
      })
      assert(found, `couldn't find seatId to cancel ${seats[selectedSeatIdx]}`)
    }

    updateSeatLayoutFile(sellerId, showId, seatLayout);
    return selectedSeatIdx == seats.length;
  } catch (error) {
    console.log("got error during cancel", error);
    return false;
  }
}

const seatClasses = ['VIP', 'Premium', 'Regular'];
const maxRows = 10;
const numCols = 25;

// Helper functions
function getSeatPrice(seatClass: string): number {
  switch (seatClass) {
    case 'VIP': return 5.00;
    case 'Premium': return 3.00;
    case 'Regular': return 2.00;
    default: return 1.50;
  }
}

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomSeatLayout(): SeatLayout {
    const seatClassMap: Record<string, BlockData[][]> = {};

    var rowNum = 0;
    seatClasses.forEach((seatClass, index) => {

      const numRows = getRandomInt(2, maxRows);  // Different row sizes per class
      const blockRows: BlockData[][] = [];
  
      for (let r = 0; r < numRows; r++) {
        const row: BlockData[] = [];
        var seatNum = 1;
        var hasSeat = false;
        for (let c = 0; c < numCols; c++) {
            const isSeat = Math.random() > 0.2; // 80% chance to be a seat
            const seatData: SeatData | null = isSeat
                ? {
                    id : (getRandomInt(1, 100000000)).toString(),
                    rowId: String.fromCharCode(65 + rowNum), // A, B, C...
                    seatNum: (seatNum++).toString(),
                    price: getSeatPrice(seatClass),
                    seatType: seatClass,
                    isBooked: Math.random() < 0.1 // 10% chance to be booked
                }
                : null;
            if (isSeat) {
                hasSeat = true
            }
            row.push({
                isSeat,
                seatData
            });
        }
        if (hasSeat) {
            rowNum++;
        }
        blockRows.push(row);
      }
  
      seatClassMap[seatClass] = blockRows;
    });
  
    return { seatClassMap };
}

function seatLockKey(sellerId : string, showId : string) : string {
  return sellerId + "." + showId;
}

export function GetSeatLock(sellerId : string, showId : string) : MutexRW {
  const key = seatLockKey(sellerId, showId);
  if (!seatLayoutLock.has(key)) {
    seatLayoutLock.set(key, new MutexRW())
  }
  return seatLayoutLock.get(key)!;
}
