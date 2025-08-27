import fs from "fs/promises";
import path from "path";
import { SeatLayout, BlockData, SeatData, SeatClass } from "../../../../shared";
import { MutexRW } from "mutex-ts";

const LAYOUT_DIR = path.resolve(__dirname, "../../data/layouts");

const seatLayoutLock : Map<string, MutexRW> = {};

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
                        if (seatData.isBooked) {
                            console.log("seat already booked", seatData)
                        } else if (seatData.isLocked) {
                            console.log("booking seats", seatData)
                            // lock the seats
                            rowData[j].seatData!.isBooked = true
                        } else {
                          console.log("seats not locked", seatData)
                        }
                        selectedSeatIdx++;
                        return;
                    }
                }
            }
        }
      })
      if (!found) {
        console.log("couldn't find seatId", seats[selectedSeatIdx])
        break
      }
    }

    updateSeatLayoutFile(sellerId, showId, seatLayout)
    return (selectedSeatIdx == seats.length)
  } catch (error) {
    console.log("got error", error)
    return false
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
function createNewLock(sellerId : string, showId : string) {
  const key = seatLockKey(sellerId, showId);
  if (!seatLayoutLock.has(key)) {
    seatLayoutLock.set(key, new MutexRW())
  }
}