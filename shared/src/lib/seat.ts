import { SeatData } from "../types/seatLayout";

export class SeatClass {
    private seat : SeatData;
    constructor(showMetadata : SeatData) {
        this.seat = showMetadata
    }
    public get id() : string {return this.seat.id}
    public get rowId() : string {return this.seat.rowId} 
    public get seatNum() : string {return this.seat.seatNum} 
    public get price() : number {return this.seat.price}
    public get seatType() : string {return this.seat.seatType} 
    public get isBooked() : boolean {return this.seat.isBooked}
    public get isLocked() : boolean {return (this.seat.lockedTill !== undefined && this.seat.lockedTill > Date.now())}
    /**
     * toString
     */
    public toString() : string {
        return this.rowId + "-" + this.seatNum;
    }
}