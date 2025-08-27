import React from "react";

const ScreenThisWay: React.FC = () => {
  return (
    <div className="w-full justify-center items-center py-4">
      <div className="flex flex-col items-center space-y-1">
        <div className="w-3/4 items-center h-1 bg-gray-400 rounded" />
        <p className="text-sm text-gray-300 font-medium">All eyes this way please!</p>
      </div>
    </div>
  );
};

export default ScreenThisWay;
