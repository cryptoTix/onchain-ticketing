import React from "react";
import { SellerProps } from "../../types/props/SellerProps";
import { GetDateObjForSellerTime, isSameDate } from "../../utils/helpers";

const SellerCard: React.FC<SellerProps> = ({ sellerData, index, selectedShowId, onSelectShowId }) => {
  return (
    <div className={`gap-y-4 ${index != 0 ? "border-t-2 border-gray": ""}`} key={`seller-id-` + sellerData.id}>
      {/* Theatre Name & Location */}
      <h2 className="text-lg font-semibold flex items-center mt-4">⭐{sellerData.name}</h2>
      <p className="text-sm text-gray-400">{sellerData.location}</p>
      {/* Showtime Buttons */}
      {
        Object.entries(sellerData.shows).map(([showType, shows], index) => (
          <div className={`space-y-4 mt-4 ${index != 0 ? "border-t border-gray-700": ""}`} key={`seller-id-` + showType}>
            <div className="flex flex-row justify-between w-full mt-4">
              <div className="text-md font-semibold">{showType}</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-start">
              {shows.map(show => (
                <button
                  key={show.showTime}
                  onClick={() => onSelectShowId({
                    showId : show.id,
                    sellerId : sellerData.id,
                    sellerLocation : sellerData.location,
                    showType : showType,
                    sellerName : sellerData.name,
                    showTime : (show.showTime),
                    sellerUTCTDiff : sellerData.utcTimeDiff
                  })}
                  className={`${selectedShowId.localeCompare(show.id) == 0 ? "bg-secondary-yellow-background" : "hover:bg-secondary-yellow-background hover:brightness-125 border border-gray-border"} text-white px-4 py-1 rounded-md transition`}
                >
                  {GetDateObjForSellerTime(show.showTime, sellerData.utcTimeDiff).getHours()}:
                  {(GetDateObjForSellerTime(show.showTime, sellerData.utcTimeDiff).getMinutes() < 10 ? "0" : "") +  GetDateObjForSellerTime(show.showTime, sellerData.utcTimeDiff).getMinutes()}
                </button>
              ))}
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default SellerCard;
