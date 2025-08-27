import React from "react";

interface ButtonProps {
  isHidden: boolean;
  
  onClick: () => void;
}

const PayButton: React.FC<PayButtonProps> = ({ isHidden, onClick }) => {
  if (isHidden) return null;

  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-500 transition"
    >
      Pay Now
    </button>
  );
};

export default PayButton;
