export interface SeatLayout {
    seatClassMap : Record<string, BlockData[][]>    // Each seat class can have multiple rows hence 2-D array
}

// In FE a theatre is considered a rectangular box with multiple boxes.
// Some of em are seats while other denotes empty space.
export interface BlockData {
    isSeat : boolean;
    seatData : SeatData | null;
}

export interface SeatData {
    id : string // seat Identifier
    rowId : string; // this can be different for each theatre
    seatNum : string;   // this can be different for each theatre
    price : number;
    seatType : string;
    isBooked : boolean;
    isLocked? : boolean;
    lockedTill? : number;
}

export interface SeatLayoutRequest {
    showId : string;
    sellerId : string;
}