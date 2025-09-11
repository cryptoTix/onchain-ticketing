import React, { useState } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";

export const InfoButton: React.FC<{ message: string }> = ({ message }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <button className="text-blue-500 hover:text-blue-700 focus:outline-none">
        <HiOutlineInformationCircle className="" />
      </button>
      {showTooltip && (
        <div className="absolute whitespace-nowrap overflow-x-auto p-2 bg-gray-800 text-white text-sm rounded shadow-lg top-6">
          {message}
        </div>
      )}
    </div>
  );
};