import React from "react";
import { fetchNext7days, getDay, getDateAndMonth } from "../../utils/helpers";
import { DateProps } from "../../types/props/DateProp";

const DateCard: React.FC<DateProps> = ({selectedDate, setSelectedDate}) => {
  const week = fetchNext7days()
  return (
    <div className="flex flex-row justify-between">
        {
          week.map(day => (
            <button
              key={day.toString()}
              onClick={() => {setSelectedDate(day)}}
              className={`${day.getDate() == selectedDate.getDate() ? "bg-primary-purple-background text-white" : "bg-unselected-gray-background text-dark-text hover:bg-primary-purple-background hover:brightness-125 hover:text-white"} px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 rounded-md transition`}
              disabled={day.getDate() == selectedDate.getDate()}
            >
            <div className="flex flex-col">
              <div className={`text-sm font-bold `}>{getDateAndMonth(day)}</div>
              <div className={`text-sm opacity-80`}>{getDay(day)}</div>
            </div>
            </button>
          ))
        }
    </div>
  );
};

export default DateCard;
