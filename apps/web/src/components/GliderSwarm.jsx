
import React from 'react';
import { motion } from 'framer-motion';

const GliderSwarm = () => {
  // Generate random gliders
  const gliders = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    size: Math.random() * 40 + 20, // 20px to 60px
    startX: Math.random() * 100, // 0% to 100%
    startY: Math.random() * 100,
    duration: Math.random() * 20 + 15, // 15s to 35s
    delay: Math.random() * -20, // Start at different times
    opacity: Math.random() * 0.4 + 0.1, // 0.1 to 0.5
  }));

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-foreground/40 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />

      {gliders.map((glider) => (
        <motion.div
          key={glider.id}
          className="absolute text-white"
          style={{
            width: glider.size,
            height: glider.size,
            opacity: glider.opacity,
            left: `${glider.startX}%`,
            top: `${glider.startY}%`,
          }}
          animate={{
            x: [0, 300, 600, 900, 1200],
            y: [0, -100, 50, -150, 0],
            rotate: [15, 25, 10, 30, 15],
          }}
          transition={{
            duration: glider.duration,
            repeat: Infinity,
            ease: "linear",
            delay: glider.delay,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full drop-shadow-lg"
          >
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default GliderSwarm;
