import React from "react";

interface ButtonProps {
  text: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

const PaymentButton: React.FC<ButtonProps> = ({ text, isDisabled = false, onClick }) => {
  if (text === "") return null;

  return (
    <div className="w-full flex justify-center">
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={`w-[100%] mt-2 flex items-center justify-center gap-2
          ${isDisabled ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500"}
          text-white py-3 rounded-md transition`}
      >
        {isDisabled && (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        )}
        {text}
      </button>
    </div>
  );
};

export default PaymentButton;
