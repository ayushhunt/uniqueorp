import React, { useState, useEffect } from 'react';

interface CallToActionProps {
  text: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay animation

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <button
        className={`bg-green-500 text-white font-bold py-2 px-4 rounded-full transition duration-500 ease-in-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {text}
      </button>
    </div>
  );
};

export default CallToAction;
