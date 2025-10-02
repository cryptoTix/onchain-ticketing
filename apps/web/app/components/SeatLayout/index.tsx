import React, { useEffect, useState } from "react";
import { SeatLayoutProps } from "../../types/props/SeatLayoutProps";
import { SeatClass, SeatLayout, SeatLayoutRequest } from "../../../../../shared";
import { fetchSeatLayout } from "../../api/fetchSeatLayout";
import { fetchRowIdFromRow, fetchSeatPriceFromRows } from "../../utils/helpers";
import { seatLegends } from "../../utils/consts";
import SeatLegends from "./SeatLegend";
import ScreenThisWay from "./Screen";
import { SeatLayoutLoader, TicketLoader } from "../Loader/Loader";
import Button from "../Button/button";

export const SeatLayoutViewer: React.FC<SeatLayoutProps> = ({ sellerId, showId, selectedSeats, selectedSeatsPrice, onSelectSeat, onPayClick }) => {
  const [seatLayout, setSeatLayout] = useState<SeatLayout>()
  useEffect(() => {
    async function storeSeatLayout(req: SeatLayoutRequest) {
      const data = await fetchSeatLayout(req)
      setSeatLayout(data)
    }
    storeSeatLayout({
      showId: showId,
      sellerId: sellerId
    })
  },[sellerId, showId])
  return seatLayout ? (
    <div className="space-y-10 mt-4 w-full overflow-x-auto">
      <SeatLegends/>
      {Object.entries(seatLayout.seatClassMap).map(([seatClass, rows], idx) => (
        <div key={seatClass}>
          <div className="flex justify-center gap-2">
            <div className="text text-sm font-bold text-right text-yellow-500">{fetchSeatPriceFromRows(rows) + " USD "}</div>
            <div className="text text-sm text-left">{"(" + seatClass + ")"}</div>
          </div>
          <div className="space-y-1 border-t border-gray-700">
            {rows.map((row, rowIdx) => (
              <div key={rowIdx} className="w-full flex items-center gap-2 mt-2">
                <div className="w-1 text-md text-left">{fetchRowIdFromRow(row)}</div>
                <div className="flex-1 flex justify-center gap-2">
                  {row.map((block, colIdx) => {
                    if (!block.isSeat) {
                      return (
                        <div
                          key={colIdx}
                          className="w-6 h-6 bg-transparent"
                        />
                      );
                    } else if(new SeatClass(block.seatData).isBooked || new SeatClass(block.seatData).isLocked) {
                      return (
                        <div
                          key={colIdx}
                          title={`Row ${new SeatClass(block.seatData).rowId}, Seat ${new SeatClass(block.seatData).seatNum} - USD${new SeatClass(block.seatData).price}`}
                          className={`w-6 h-6 text-xs text-white flex items-center justify-center rounded-md ${seatLegends["FILLED"].bgData}`}
                        >{new SeatClass(block.seatData).seatNum}</div>
                      );
                    }

                    const seat = new SeatClass(block.seatData);
                    return (
                      <button
                        key={colIdx}
                        title={`Row ${seat.rowId}, Seat ${seat.seatNum} - USD${seat.price}`}
                        className={`w-6 h-6 text-xs flex items-center justify-center rounded-md
                          ${selectedSeats[(seat.id)] ? seatLegends["SELECTED"].bgData : seatLegends["AVAILABLE"].bgData + " hover:opacity-75"} cursor-pointer`}
                          onClick={() => {onSelectSeat(seat)}}
                      >
                        {seat.seatNum}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <ScreenThisWay/>
      <Button text={selectedSeatsPrice != 0 ? `Pay USD `+ selectedSeatsPrice : ""}  onClick={onPayClick}/>
    </div>
  ) : <SeatLayoutLoader/>;
};

export default SeatLayoutViewer;
