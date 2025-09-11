import React from "react";
import { fetchNext7days, getDay, getDateAndMonth } from "../../utils/helpers";
import { DateProps } from "../../types/props/DateProp";

const DateCard: React.FC<DateProps> = ({selectedDate, setSelectedDate}) => {
  const week = fetchNext7days()
  return (
    <div className="flex flex-row justify-between w-[70%]">
        {
          week.map(day => (
            <button
              onClick={() => {setSelectedDate(day)}}
              className={`${day.getDate() == selectedDate.getDate() ? "bg-blue-500" : "bg-white"} text-white px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 rounded-md hover:bg-blue-500 transition`}
            >
            <div className="flex flex-col">
              <div className={`text-sm font-bold ${day.getDate() == selectedDate.getDate() ? "text-white": "text-[#5A637A]"}`}>{getDateAndMonth(day)}</div>
              <div className={`text-sm ${day.getDate() == selectedDate.getDate() ? "text-white": "text-gray-800"}`}>{getDay(day)}</div>
            </div>
            </button>
          ))
        }
    </div>
  );
};

export default DateCard;
