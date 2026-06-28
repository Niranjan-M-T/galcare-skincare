"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// The common 3D SVG filter and gradients
function DoodlesDefs() {
  return (
    <svg className="absolute w-0 h-0 pointer-events-none">
      <defs>
        <linearGradient id="blue3d" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1b498f" stopOpacity="0" />
          <stop offset="20%" stopColor="#1b498f" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
          <stop offset="80%" stopColor="#1e3a8a" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1b498f" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="green3d" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3a8d38" stopOpacity="0" />
          <stop offset="20%" stopColor="#3a8d38" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#4ade80" stopOpacity="1" />
          <stop offset="80%" stopColor="#166534" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#3a8d38" stopOpacity="0" />
        </linearGradient>
        
        <filter id="shadow3d" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="15" stdDeviation="10" floodOpacity="0.3" floodColor="#000000" />
        </filter>
      </defs>
    </svg>
  );
}

// Background Doodle (Passes BEHIND the product images)
export function HeroDoodleBack() {
  const { scrollY } = useScroll();
  
  // Fast movement on scroll (using raw pixels for precise speed control)
  // As user scrolls down 1000px, the SVG moves left by 1500px (fast!)
  const xMovement = useTransform(scrollY, [0, 1000], [0, -1500]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <DoodlesDefs />
      <motion.div 
        style={{ x: xMovement }}
        className="absolute top-[15%] left-0 w-[4000px] h-full"
      >
        <svg 
          viewBox="0 0 4000 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          filter="url(#shadow3d)"
          className="w-full h-[600px] opacity-90"
          preserveAspectRatio="none"
        >
          <path 
            d="M 0 300 C 500 500, 1000 100, 1500 300 S 2500 100, 3000 300 S 4000 100, 4500 300" 
            stroke="url(#blue3d)" 
            strokeWidth="4" 
            strokeLinecap="round" 
          />
        </svg>
      </motion.div>
    </div>
  );
}

// Foreground Doodle (Passes IN FRONT of the product images)
export function HeroDoodleFront() {
  const { scrollY } = useScroll();
  
  // Fast movement in the opposite direction
  // Moves right by 1200px as the user scrolls down 1000px
  const xMovement = useTransform(scrollY, [0, 1000], [-1000, 200]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-30">
      <motion.div 
        style={{ x: xMovement }}
        className="absolute top-[35%] left-0 w-[4000px] h-full"
      >
        <svg 
          viewBox="0 0 4000 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          filter="url(#shadow3d)"
          className="w-full h-[600px] opacity-100"
          preserveAspectRatio="none"
        >
          <path 
            d="M -500 200 C 0 400, 500 0, 1000 200 S 2000 400, 2500 200 S 3500 0, 4000 200" 
            stroke="url(#green3d)" 
            strokeWidth="3" 
            strokeLinecap="round" 
          />
        </svg>
      </motion.div>
    </div>
  );
}
