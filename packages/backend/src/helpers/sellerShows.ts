import { promises as fs } from "fs";
import path from "path";
import { MovieInterface, SellerInterface, ShowInterface, ShowType, SellerMetadataInterface, SellerShowIdInterface } from "shared";
import { HDNodeWallet } from "ethers";

type SellerFile = {
  id: string;
  name: string;
  location: string;
  utcTimeDiff: number;
  byDate: Record<string, Record<ShowType, ShowInterface[]>>;
};

let showId = 0;
export const SELLER_METADATA: SellerMetadataInterface[] = [
  { id: "0", name: "INOX", location: "BHOPAL", utcTimeDiff: 5.5 * 3600 * 1000 },
  { id: "1", name: "PVR", location: "DELHI", utcTimeDiff: 5.5 * 3600 * 1000 },
  { id: "2", name: "INOX", location: "MUMBAI", utcTimeDiff: 5.5 * 3600 * 1000 },
  { id: "3", name: "PVR", location: "BHOPAL", utcTimeDiff: 5.5 * 3600 * 1000 },
  { id: "4", name: "CINEPOLIS", location: "DELHI", utcTimeDiff: 5.5 * 3600 * 1000 },
  { id: "5", name: "CINEPOLIS", location: "MUMBAI", utcTimeDiff: 5.5 * 3600 * 1000 },
  { id: "6", name: "CINEPOLIS", location: "BHOPAL", utcTimeDiff: 5.5 * 3600 * 1000 },
  { id: "7", name: "INOX", location: "DELHI", utcTimeDiff: 5.5 * 3600 * 1000 },
  { id: "8", name: "PVR", location: "MUMBAI", utcTimeDiff: 5.5 * 3600 * 1000 },
];

const SELLER_DIR = path.join(process.cwd(), "data", "seller");
const SHOW_TYPES: ShowType[] = ["2D", "3D", "4DX"];

function dateKeyUTC(dateStr: string, movieId: string): string {
  return `${dateStr}-${movieId}`;
}

async function ensureSellerDir() {
  try {
    await fs.mkdir(SELLER_DIR, { recursive: true });
  } catch {}
}

function sellerFilePath(sellerId: string) {
  return path.join(SELLER_DIR, `${sellerId}.json`);
}

async function readSellerFileOrInit(meta: SellerMetadataInterface): Promise<SellerFile> {
  await ensureSellerDir();
  const p = sellerFilePath(meta.id);
  try {
    const raw = await fs.readFile(p, "utf8");
    return JSON.parse(raw) as SellerFile;
  } catch {
    const init: SellerFile = {
      id: meta.id,
      name: meta.name,
      location: meta.location,
      utcTimeDiff: meta.utcTimeDiff,
      byDate: {},
    };
    await fs.writeFile(p, JSON.stringify(init, null, 2));
    return init;
  }
}

async function persistSellerFile(file: SellerFile) {
  await ensureSellerDir();
  const p = sellerFilePath(file.id);
  await fs.writeFile(p, JSON.stringify(file, null, 2));
}

function buildShowId(): string {
  showId++;
  return showId.toString();
}

function generateDaySchedule(
  meta: SellerMetadataInterface,
  dateStr: string,
  movieId: string
): Record<ShowType, ShowInterface[]> {
  const MAX_PER_DAY = 10;
  const result: Record<ShowType, ShowInterface[]> = { "2D": [], "3D": [], "4DX": [] };

  const startHour = 10; // 10:00 local
  const endHour = 23; // last start <= 22:00
  const minutesChoices = [0, 15, 30, 45];

  // Helper to create a show
  const makeShow = (movieId: string, type: ShowType, hour: number, minute: number, idx: number): ShowInterface => {
    const price = type === "4DX" ? 8.9 : type === "3D" ? 6.4 : 5.4;
    const screenId = String((idx % 5) + 1);
    const s: ShowInterface = {
      id: buildShowId(), // fill after building
      movieId: movieId,
      type,
      price,
      showTime: parseDateStrToUTC(dateStr, hour, minute) - meta.utcTimeDiff,
      screenId,
    };
    console.log(s)
    return s;
  };

  // Round-robin assign types and times
  let created = 0;
  let hour = startHour;
  let minuteIdx = 0;
  let typeIdx = 0;

  // Fill remaining slots up to MAX_PER_DAY
  while (created < MAX_PER_DAY) {
    const showTypeIdx = Math.floor((Math.random() * SHOW_TYPES.length) % SHOW_TYPES.length);
    const type = SHOW_TYPES[(showTypeIdx ? showTypeIdx : 0) % SHOW_TYPES.length];
    const minute = minutesChoices[minuteIdx % minutesChoices.length];
    if (!result[type]) result[type] = []
    console.log(type)
    result[type].push(makeShow(movieId, type, hour, minute, created));
    created++;
    minuteIdx++;
    hour += 1;
    if (hour > endHour) hour = startHour;
    typeIdx++;
  }

  return result;
}

function parseDateStrToUTC(dateStr: string, hour : number, minute : number): number {
  const m = /^(\d{2})-(\d{2})-(\d{2})$/.exec(dateStr);
  if (!m) throw new Error(`Invalid date format: ${dateStr}. Expected dd-mm-yy`);
  const dd = Number(m[1]);
  const mm = Number(m[2]);
  const yy = Number(m[3]);
  const fullYear = 2000 + yy; // interpret as 20yy
  const d = Date.UTC(fullYear, mm - 1, dd, hour, minute);
  console.log("generating utc timestamp for date", dateStr, hour,minute, d)
  return d;
}

export async function getOrCreateSellerShowsForDate(
  meta: SellerMetadataInterface,
  dateStr: string,
  movieId: string
): Promise<SellerInterface> {
  const file = await readSellerFileOrInit(meta);
  const key = dateKeyUTC(dateStr, movieId);
  if (!file.byDate[key]) {
    file.byDate[key] = generateDaySchedule(meta, dateStr, movieId);
    await persistSellerFile(file);
  }
  const shows = file.byDate[key];
  return {
    id: file.id,
    name: file.name,
    location: file.location,
    utcTimeDiff: file.utcTimeDiff,
    shows,
  };
}

export async function findSellerShowById(
  sellerId: string,
  showId: string
): Promise<SellerShowIdInterface | undefined> {
  const meta = SELLER_METADATA.find((s) => s.id === sellerId);
  if (!meta) return undefined;
  const file = await readSellerFileOrInit(meta);
  // Search across dates
  for (const key of Object.keys(file.byDate)) {
    const day = file.byDate[key];
    for (const t of SHOW_TYPES) {
      const arr = day[t] || [];
      const found = arr.find((s) => s.id === showId);
      if (found) return { ...meta, show: found };
    }
  }
  return undefined;
}

export async function ensureSellerFilesForDate(
  dateStr: string,
  movieId: string
): Promise<SellerInterface[]> {
  const results: SellerInterface[] = [];
  for (const meta of SELLER_METADATA) {
    const seller = await getOrCreateSellerShowsForDate(meta, dateStr, movieId);
    results.push(seller);
  }
  return results;
}

export async function getAllSellerShowsForMovie(
  dateStr: string,
  movieId: string,
): Promise<SellerInterface[]> {
  const all = await ensureSellerFilesForDate(dateStr, movieId);
  const filtered: SellerInterface[] = [];
  for (const s of all) {
    const showsByType: Record<ShowType, ShowInterface[]> = {};
    for (const [type, arr] of Object.entries(s.shows) as [ShowType, ShowInterface[]][]) {
      const onlyMovie = arr.filter((show) => show.movieId === movieId);
      if (onlyMovie.length > 0) {
        showsByType[type] = onlyMovie;
      }
    }
    if (Object.keys(showsByType).length > 0) {
      filtered.push({ ...s, shows: showsByType });
    }
  }
  return filtered;
}
