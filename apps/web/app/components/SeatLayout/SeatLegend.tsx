import React from "react";

const SeatLegends: React.FC = () => {
  return (
    <div className="mt-6 flex gap-6 text-gray-300 justify-center">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 bg-purple-700 rounded-md"></span> Filled
        </div>
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 border border-gray-500 rounded-md"></span> Available
        </div>
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 bg-blue-500 rounded-md"></span> Selected
        </div>
      </div>
  );
};

export default SeatLegends;
