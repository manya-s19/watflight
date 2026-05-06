
import { useState, useEffect } from 'react';

export const useStaggerAnimation = (itemCount, delayMultiplier = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getAnimationProps = (index) => ({
    initial: { opacity: 0, y: 20 },
    animate: isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: {
      duration: 0.5,
      delay: index * delayMultiplier,
      ease: [0.25, 0.1, 0.25, 1]
    }
  });

  return { getAnimationProps, isVisible };
};
