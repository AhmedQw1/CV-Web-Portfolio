import React, { useState, useEffect, useCallback } from 'react';
import Game from '../components/Game';
import PauseMenu from '../components/PauseMenu';

const SecretPage = ({ onBack }) => {
  const [gameState, setGameState] = useState('start'); // 'start', 'playing', 'paused', 'gameOver'

  const handleStart = useCallback(() => {
    setGameState('playing');
  }, []);

  const handleGameOver = useCallback(() => {
    setGameState('gameOver');
  }, []);

  const handleRestart = useCallback(() => {
    setGameState('start');
  }, []);

  const handleResume = useCallback(() => {
    setGameState('playing');
  }, []);

  // --- UPDATE: This useEffect now toggles the pause menu ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (gameState === 'playing') {
          setGameState('paused');
        } else if (gameState === 'paused') {
          setGameState('playing'); // Resume the game
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && gameState === 'playing') {
        setGameState('paused');
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [gameState]);

  const isGameVisible = gameState === 'playing' || gameState === 'paused';

  return (
    <section className="py-20 pt-32 bg-stripe-pattern bg-white dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center text-center relative">
      {gameState === 'paused' && (
        <PauseMenu onResume={handleResume} onRestart={handleRestart} onBack={onBack} />
      )}
      
      <div className="relative inline-block mb-8">
        <div className="bg-web2-purple text-white font-comic text-2xl md:text-3xl py-5 px-5 rounded-lg shadow-web2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
          <h2 className="relative z-10 text-shadow">Pixel Defender</h2>
        </div>
      </div>

      <div className="w-full max-w-[500px] mx-auto">
        {gameState === 'start' && (
          <div className="animate-fade-in">
            <p className="font-comic text-lg mb-6 dark:text-gray-300">Use Arrow Keys to Move & Space to Shoot!</p>
            <button onClick={handleStart} className="bg-web2-green text-white font-pixel px-8 py-4 rounded-md border-2 border-green-700 font-bold shadow-web2 hover:shadow-glossy">
              START GAME
            </button>
          </div>
        )}

        {isGameVisible && (
          <Game
            isPaused={gameState === 'paused'}
            onGameOver={handleGameOver}
          />
        )}

        {gameState === 'gameOver' && (
          <div className="animate-fade-in bg-white dark:bg-gray-800 p-8 rounded-lg border-4 border-gray-300 shadow-web2">
            <h3 className="font-pixel text-3xl text-web2-red mb-4">GAME OVER</h3>
            <button onClick={handleStart} className="bg-gradient-blue text-white font-pixel px-6 py-3 rounded-md border-2 border-blue-700 font-bold shadow-web2 hover:shadow-glossy">
              Play Again
            </button>
          </div>
        )}
      </div>

      <button onClick={onBack} className="mt-12 bg-gradient-button text-black px-6 py-3 rounded-md border-2 border-gray-300 font-bold shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow font-comic">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent h-1/2"></div>
        <span className="relative z-10">← Go Back to Portfolio</span>
      </button>
    </section>
  );
};

export default SecretPage;