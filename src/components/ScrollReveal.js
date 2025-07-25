import React from 'react';
import useIntersectionObserver from '../utils/useIntersectionObserver';

const ScrollReveal = ({ children, delay = 0, direction = 'up' }) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch(direction) {
      case 'left':
        return 'opacity-100 animate-slide-left';
      case 'right':
        return 'opacity-100 animate-slide-right';
      case 'down':
        return 'opacity-100 animate-slide-down';
      case 'up':
      default:
        return 'opacity-100 animate-slide-up';
    }
  };
  
  const getDelayStyle = () => {
    if (delay === 0) return {};
    return { animationDelay: `${delay}ms` };
  };
  
  return (
    <div 
      ref={ref} 
      className={`transition-opacity duration-500 ${getAnimationClass()}`}
      style={getDelayStyle()}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;