import React from 'react';

const PauseMenu = ({ onResume, onRestart, onBack }) => {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border-4 border-gray-300 shadow-web2 text-center animate-fade-in">
        <h2 className="font-pixel text-3xl text-retro-navy dark:text-white mb-6">Game Paused</h2>
        <div className="flex flex-col space-y-4">
          <button
            onClick={onResume}
            className="bg-web2-green text-white font-pixel px-6 py-3 rounded-md border-2 border-green-700 font-bold shadow-web2 hover:shadow-glossy"
          >
            Resume
          </button>
          <button
            onClick={onRestart}
            className="bg-gradient-blue text-white font-pixel px-6 py-3 rounded-md border-2 border-blue-700 font-bold shadow-web2 hover:shadow-glossy"
          >
            Restart
          </button>
          <button
            onClick={onBack}
            className="bg-gradient-button text-black font-pixel px-6 py-3 rounded-md border-2 border-gray-300 font-bold shadow-web2 hover:shadow-glossy"
          >
            Go Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default PauseMenu;