import React from 'react';
import { Card, Button } from 'pixel-retroui';

const PauseMenu = ({ onResume, onRestart, onBack }) => {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card
        bg="#ffffff"
        textColor="#000000"
        borderColor="#333333"
        shadowColor="#666666"
        className="p-8 text-center animate-fade-in"
      >
        <h2 className="font-pixel text-3xl text-retro-navy mb-6">Game Paused</h2>
        <div className="flex flex-col space-y-4">
          <Button
            bg="#4CAF50"
            textColor="#ffffff"
            shadow="#2E7D32"
            onClick={onResume}
            className="px-6 py-3 font-pixel font-bold"
          >
            Resume
          </Button>
          <Button
            bg="#2196F3"
            textColor="#ffffff"
            shadow="#1976D2"
            onClick={onRestart}
            className="px-6 py-3 font-pixel font-bold"
          >
            Restart
          </Button>
          <Button
            bg="#FF9800"
            textColor="#ffffff"
            shadow="#F57C00"
            onClick={onBack}
            className="px-6 py-3 font-pixel font-bold"
          >
            Go Back to Portfolio
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PauseMenu;