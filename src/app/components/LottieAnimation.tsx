'use client';

import Lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

const LottieAnimation = () => {
  const lottieRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (lottieRef.current) {
      Lottie.loadAnimation({
        container: lottieRef.current, // Reference to container div
        renderer: 'svg', // SVG rendering
        loop: true, // Loop the animation
        autoplay: true, // Auto play the animation
        path: '/Animation - 1734813775356.json', // Path to JSON file in public folder
      });
    }

    // Cleanup on unmount
    return () => {
      if (lottieRef.current) {
        Lottie.destroy();
      }
    };
  }, []);

  return <div ref={lottieRef} style={{ width: 300, height: 300 }}></div>;
};

export default LottieAnimation;
