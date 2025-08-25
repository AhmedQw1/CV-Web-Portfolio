import React, { useEffect, useRef, useCallback } from 'react';

// Game constants
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
const PLAYER_WIDTH = 30;
const PLAYER_HEIGHT = 20;
const PROJECTILE_SPEED = 7;
const ENEMY_SPEED = 0.9;
const ENEMY_SPAWN_RATE = 1200;

// 1. UPDATE: The component now accepts an `isPaused` prop
const Game = ({ onGameOver, isPaused }) => {
  const canvasRef = useRef(null);

  // Refs for game state
  const playerRef = useRef({ x: CANVAS_WIDTH / 2 - PLAYER_WIDTH / 2, y: CANVAS_HEIGHT - PLAYER_HEIGHT - 10 });
  const projectilesRef = useRef([]);
  const enemiesRef = useRef([]);
  const keysRef = useRef({ ArrowLeft: false, ArrowRight: false, Space: false });
  const lastShotTimeRef = useRef(0);
  
  // Refs to hold the animation and interval IDs so we can stop them
  const animationFrameId = useRef();
  const enemyIntervalId = useRef();

  // --- Keyboard Controls (No changes here) ---
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

  // --- Main Game Loop (No changes here) ---
  const gameLoop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

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
        cancelAnimationFrame(animationFrameId.current);
        onGameOver();
        return;
      }
      ctx.fillStyle = '#FF3333';
      ctx.fillRect(e.x, e.y, 25, 25);
    });

    // Collision Detection
    for (let i = projectiles.length - 1; i >= 0; i--) {
      for (let j = enemies.length - 1; j >= 0; j--) {
        const p = projectiles[i];
        const e = enemies[j];
        if (p && e && p.x < e.x + 25 && p.x + 5 > e.x && p.y < e.y + 25 && p.y + 10 > e.y) {
          projectiles.splice(i, 1);
          enemies.splice(j, 1);
          break;
        }
      }
    }
    
    // Player-Enemy Collision
    for (let i = enemies.length - 1; i >= 0; i--) {
      const e = enemies[i];
      if (player.x < e.x + 25 && player.x + PLAYER_WIDTH > e.x && player.y < e.y + 25 && player.y + PLAYER_HEIGHT > e.y) {
        enemies.splice(i, 1);
      }
    }

    // Draw Player
    ctx.fillStyle = '#0080FF';
    ctx.fillRect(player.x, player.y, PLAYER_WIDTH, PLAYER_HEIGHT);
    
    animationFrameId.current = requestAnimationFrame(gameLoop);
  }, [onGameOver]);

  // 2. UPDATE: This effect now handles pausing and resuming
  useEffect(() => {
    // If the game is paused, stop the animation and enemy spawning, then exit
    if (isPaused) {
      cancelAnimationFrame(animationFrameId.current);
      clearInterval(enemyIntervalId.current);
      return;
    }

    // If the game is not paused, start the animation frame loop and enemy spawning
    animationFrameId.current = requestAnimationFrame(gameLoop);
    enemyIntervalId.current = setInterval(() => {
      enemiesRef.current.push({ x: Math.random() * (CANVAS_WIDTH - 25), y: -25 });
    }, ENEMY_SPAWN_RATE);

    // This cleanup function will stop the game when the component is unmounted
    // or when the `isPaused` prop changes from false to true.
    return () => {
      cancelAnimationFrame(animationFrameId.current);
      clearInterval(enemyIntervalId.current);
    };
  }, [isPaused, gameLoop]); // The effect now depends on `isPaused`

  return (
    <div>
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