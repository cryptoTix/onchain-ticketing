import React from "react";

interface SellerProps {
  name: string;
  location: string;
  showtimes: string[];
  price: string;
  onSelectTime: (time: string) => void;
}

const SellerCard: React.FC<SellerProps> = ({ name, location, showtimes, price, onSelectTime }) => {
  return (
    <div className="bg-gray-900 p-5 rounded-lg w-full">
      {/* Theatre Name & Location */}
      <h2 className="text-lg font-bold flex items-center gap-2">
        ⭐ {name}
      </h2>
      <p className="text-sm text-gray-400">{location}</p>

      {/* Showtime Buttons */}
      <div className="mt-3 grid grid-cols-4 gap-2">
        {showtimes.map((time) => (
          <button
            key={time}
            onClick={() => onSelectTime(time)}
            className="bg-gray-800 text-white px-3 py-1 rounded-md hover:bg-blue-500 transition"
          >
            {time}
          </button>
        ))}
      </div>

      {/* Price */}
      <p className="text-right text-gray-400 mt-3">{price}</p>
    </div>
  );
};

export default SellerCard;
