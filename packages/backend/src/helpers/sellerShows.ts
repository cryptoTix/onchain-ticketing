import { promises as fs } from "fs";
import path from "path";
import { MovieInterface, SellerInterface, ShowInterface, ShowType, SellerMetadataInterface, SellerShowIdInterface } from "../../../../shared";

type SellerFile = {
  id: string;
  name: string;
  location: string;
  utcTimeDiff: number;
  byDate: Record<string, Record<ShowType, ShowInterface[]>>;
};

export const SELLER_METADATA: SellerMetadataInterface[] = [
  { id: "0", name: "INOX", location: "BHOPAL", utcTimeDiff: 0 },
  { id: "1", name: "PVR", location: "DELHI", utcTimeDiff: 0 },
  { id: "2", name: "INOX", location: "MUMBAI", utcTimeDiff: 0 },
  { id: "3", name: "PVR", location: "BHOPAL", utcTimeDiff: 0 },
  { id: "4", name: "CINEPOLIS", location: "DELHI", utcTimeDiff: 0 },
  { id: "5", name: "CINEPOLIS", location: "MUMBAI", utcTimeDiff: 0 },
  { id: "6", name: "CINEPOLIS", location: "BHOPAL", utcTimeDiff: 0 },
  { id: "7", name: "INOX", location: "DELHI", utcTimeDiff: 0 },
  { id: "8", name: "PVR", location: "MUMBAI", utcTimeDiff: 0 },
];

const SELLER_DIR = path.join(process.cwd(), "data", "seller");
const SHOW_TYPES: ShowType[] = ["2D", "3D", "4DX"];

function dateKeyUTC(dateMs: number): string {
  const d = new Date(dateMs);
  // Normalize to YYYY-MM-DD in local time
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
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

function buildShowId(sellerId: string, s: ShowInterface): string {
  // Deterministic-ish ID to avoid collisions across dates/types
  // Format: sellerId-movieId-YYYYMMDD-HHMM-type-screen-seq
  const d = new Date(s.showTime);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${sellerId}-${s.movieId}-${y}${m}${day}-${hh}${mm}-${s.type}-${s.screenId}`;
}

function generateDaySchedule(
  meta: SellerMetadataInterface,
  dateMs: number,
  movieId: string
): Record<ShowType, ShowInterface[]> {
  const MAX_PER_DAY = 10;
  const result: Record<ShowType, ShowInterface[]> = { "2D": [], "3D": [], "4DX": [] };

  const startHour = 10; // 10:00 local
  const endHour = 23; // last start <= 22:00
  const minutesChoices = [0, 15, 30, 45];

  // Helper to create a show
  const makeShow = (movieId: string, type: ShowType, hour: number, minute: number, idx: number): ShowInterface => {
    const dt = new Date(dateMs);
    dt.setHours(hour, minute, 0, 0);
    const price = type === "4DX" ? 8.9 : type === "3D" ? 6.4 : 5.4;
    const screenId = String((idx % 5) + 1);
    const s: ShowInterface = {
      id: "", // fill after building
      movieId: movieId,
      type,
      price,
      showTime: dt.getTime(),
      screenId,
    };
    s.id = buildShowId(meta.id, s);
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
    console.log(showTypeIdx)
    const type = SHOW_TYPES[(showTypeIdx ? showTypeIdx : 0) % SHOW_TYPES.length];
    const minute = minutesChoices[minuteIdx % minutesChoices.length];
    if (!result[type]) result[type] = []
    console.log(type)
    result[type].push(makeShow(movieId, type, hour, minute, created));
    created++;
    minuteIdx++;
    if (minuteIdx % minutesChoices.length === 0) {
      hour += 1;
      if (hour > endHour) hour = startHour;
    }
    typeIdx++;
  }

  return result;
}

function parseDdMmYy(dateStr: string): number {
  const m = /^(\d{2})-(\d{2})-(\d{2})$/.exec(dateStr);
  if (!m) throw new Error(`Invalid date format: ${dateStr}. Expected dd-mm-yy`);
  const dd = Number(m[1]);
  const mm = Number(m[2]);
  const yy = Number(m[3]);
  const fullYear = 2000 + yy; // interpret as 20yy
  const d = new Date();
  d.setFullYear(fullYear, mm - 1, dd);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

export async function getOrCreateSellerShowsForDate(
  meta: SellerMetadataInterface,
  dateStr: string,
  movieId: string
): Promise<SellerInterface> {
  const dateMs = parseDdMmYy(dateStr);
  const file = await readSellerFileOrInit(meta);
  const key = dateKeyUTC(dateMs);
  if (!file.byDate[key]) {
    file.byDate[key] = generateDaySchedule(meta, dateMs, movieId);
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
