import { useEffect, useState } from 'react';

// The famous Konami Code sequence
const konamiCode = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

const useKonamiCode = (callback) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handler = (e) => {
      // Check if the pressed key is the next one in the sequence
      if (e.key.toLowerCase() === konamiCode[position].toLowerCase()) {
        // If it is, advance our position
        const nextPosition = position + 1;
        if (nextPosition === konamiCode.length) {
          // If we've completed the sequence, fire the callback and reset
          callback();
          setPosition(0);
        } else {
          setPosition(nextPosition);
        }
      } else {
        // If the key is wrong, reset the sequence
        setPosition(0);
      }
    };

    window.addEventListener('keydown', handler);
    
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, [position, callback]);
};

export default useKonamiCode;
