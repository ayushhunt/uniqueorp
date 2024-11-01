import React from 'react';

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
