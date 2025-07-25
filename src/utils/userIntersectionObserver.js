import { useEffect, useRef, useState } from 'react';

/**
 * Hook to detect when an element enters the viewport
 */
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (node) {
            observer.unobserve(node);
          }
        }
      },
      {
        threshold: options.threshold || 0.1,
        root: options.root || null,
        rootMargin: options.rootMargin || '0px',
      }
    );
    
    if (node) {
      observer.observe(node);
    }
    
    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [options.threshold, options.root, options.rootMargin]);
  
  return [ref, isVisible];
};

export default useIntersectionObserver;