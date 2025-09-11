import React from "react";

interface ButtonProps {
  text : string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  if (text == "") return null;

  return (
    <div className="w-full flex justify-center">
        <button
            onClick={onClick}
            className="w-[20%] fixed bottom-0 mb-4 bg-blue-600 text-white font-bold justify-center py-3 rounded-md hover:bg-blue-500 transition"
        >{text}
        </button>
    </div>
  );
};

export default Button;
