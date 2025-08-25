import React, { useState } from 'react';
import { FaGamepad } from 'react-icons/fa';

const SecretPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div 
      className="fixed top-1/2 right-0 transform -translate-y-1/2 z-40"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* The main panel that slides out */}
      <div
        className={`absolute top-0 right-0 transform -translate-y-1/2 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ top: '50%' }}
      >
        <div className="w-64 bg-white dark:bg-gray-800 border-4 border-gray-300 rounded-l-lg shadow-web2 p-4">
          <h3 className="font-comic font-bold text-retro-navy dark:text-white text-center">
            Konami Code
          </h3>
        </div>
      </div>

      {/* The tab/handle that is always visible */}
      <div 
        // --- THIS IS THE LINE TO CHANGE ---
        className="absolute top-1/2 right-0 transform -translate-y-1/2 w-8 h-16 bg-gradient-blue rounded-l-lg shadow-web2 flex items-center justify-center cursor-pointer" // Changed h-24 to h-16
        style={{ right: isOpen ? '16rem' : '0', transition: 'right 0.3s ease-in-out' }}
      >
        <FaGamepad className="text-white text-2xl" />
      </div>
    </div>
  );
};

export default SecretPanel;