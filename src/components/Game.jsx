import React, { useState, useEffect, useRef, useCallback } from 'react';

// Game constants
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
const PLAYER_WIDTH = 30;
const PLAYER_HEIGHT = 20;
const PROJECTILE_SPEED = 7;
const ENEMY_SPEED = 0.9; // Adjusted speed again, slightly faster
const ENEMY_SPAWN_RATE = 1200;

const Game = ({ onGameOver }) => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);

  // Refs for game state to avoid re-renders and stale closures
  const playerRef = useRef({ x: CANVAS_WIDTH / 2 - PLAYER_WIDTH / 2, y: CANVAS_HEIGHT - PLAYER_HEIGHT - 10 });
  const projectilesRef = useRef([]);
  const enemiesRef = useRef([]);
  const keysRef = useRef({ ArrowLeft: false, ArrowRight: false, Space: false });
  const lastShotTimeRef = useRef(0);
  const scoreRef = useRef(0); // Use a ref for the most up-to-date score
  const animationFrameId = useRef();

  // --- Keyboard Controls ---
  useEffect(() => {
    const handleKeyDown = (e) => { e.preventDefault(); keysRef.current[e.code] = true; };
    const handleKeyUp = (e) => { e.preventDefault(); keysRef.current[e.code] = false; };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // --- Main Game Loop in a useCallback to keep it stable ---
  const gameLoop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Clear canvas
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    const player = playerRef.current;
    const keys = keysRef.current;
    const projectiles = projectilesRef.current;
    const enemies = enemiesRef.current;

    // Player Movement
    if (keys.ArrowLeft) player.x -= 5;
    if (keys.ArrowRight) player.x += 5;
    player.x = Math.max(0, Math.min(CANVAS_WIDTH - PLAYER_WIDTH, player.x));

    // Shooting
    if (keys.Space && Date.now() - lastShotTimeRef.current > 300) {
      lastShotTimeRef.current = Date.now();
      projectiles.push({ x: player.x + PLAYER_WIDTH / 2 - 2.5, y: player.y });
    }

    // Update & Draw Projectiles
    projectiles.forEach((p, index) => {
      p.y -= PROJECTILE_SPEED;
      if (p.y < 0) projectiles.splice(index, 1);
      ctx.fillStyle = '#00CC66';
      ctx.fillRect(p.x, p.y, 5, 10);
    });

    // Update & Draw Enemies
    enemies.forEach((e) => {
      e.y += ENEMY_SPEED;
      if (e.y > CANVAS_HEIGHT) {
        // This is now the ONLY lose condition
        cancelAnimationFrame(animationFrameId.current);
        onGameOver(scoreRef.current);
        return;
      }
      ctx.fillStyle = '#FF3333';
      ctx.fillRect(e.x, e.y, 25, 25);
    });

    // --- Collision Detection ---
    for (let i = projectiles.length - 1; i >= 0; i--) {
      for (let j = enemies.length - 1; j >= 0; j--) {
        const p = projectiles[i];
        const e = enemies[j];
        if (p && e && p.x < e.x + 25 && p.x + 5 > e.x && p.y < e.y + 25 && p.y + 10 > e.y) {
          projectiles.splice(i, 1);
          enemies.splice(j, 1);
          scoreRef.current += 10;
          setScore(scoreRef.current);
          break;
        }
      }
    }
    
    // Player-Enemy Collision
    for (let i = enemies.length - 1; i >= 0; i--) {
      const e = enemies[i];
      if (player.x < e.x + 25 && player.x + PLAYER_WIDTH > e.x && player.y < e.y + 25 && player.y + PLAYER_HEIGHT > e.y) {
        enemies.splice(i, 1); // Enemy is destroyed, no game over
      }
    }

    // Draw Player
    ctx.fillStyle = '#0080FF';
    ctx.fillRect(player.x, player.y, PLAYER_WIDTH, PLAYER_HEIGHT);
    
    // Request next frame
    animationFrameId.current = requestAnimationFrame(gameLoop);
  }, [onGameOver]);

  // Effect to manage the game loop and enemy spawning
  useEffect(() => {
    // Start the game loop
    animationFrameId.current = requestAnimationFrame(gameLoop);
    
    // Start spawning enemies
    const spawnInterval = setInterval(() => {
      enemiesRef.current.push({ x: Math.random() * (CANVAS_WIDTH - 25), y: -25 });
    }, ENEMY_SPAWN_RATE);

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameId.current);
      clearInterval(spawnInterval);
    };
  }, [gameLoop]);

  return (
    <div>
      <div className="font-pixel text-2xl text-center mb-4 dark:text-white">SCORE: {score}</div>
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        className="bg-gray-900 border-4 border-gray-300 rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Game;