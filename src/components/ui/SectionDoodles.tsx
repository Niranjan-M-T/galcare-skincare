"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Reuse the same 3D SVG gradient defs from the hero doodles
function SectionDoodleDefs() {
  return (
    <svg className="absolute w-0 h-0 pointer-events-none">
      <defs>
        <linearGradient id="sectionBlue3d" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1b498f" stopOpacity="0" />
          <stop offset="20%" stopColor="#1b498f" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
          <stop offset="80%" stopColor="#1e3a8a" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1b498f" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="sectionGreen3d" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3a8d38" stopOpacity="0" />
          <stop offset="20%" stopColor="#3a8d38" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#4ade80" stopOpacity="1" />
          <stop offset="80%" stopColor="#166534" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#3a8d38" stopOpacity="0" />
        </linearGradient>
        <filter id="sectionShadow3d" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodOpacity="0.2" floodColor="#000000" />
        </filter>
      </defs>
    </svg>
  );
}

export function SectionDoodleOne() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const xMovement = useTransform(scrollYProgress, [0, 1], [0, -800]);

  return (
    <div ref={ref} className="w-full h-32 overflow-visible pointer-events-none relative z-50 -my-8 md:-my-16">
      <SectionDoodleDefs />
      <motion.div
        style={{ x: xMovement }}
        className="absolute top-0 left-0 w-[3000px] h-full"
      >
        <svg
          viewBox="0 0 3000 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          filter="url(#sectionShadow3d)"
          className="w-full h-[200px] opacity-80"
          preserveAspectRatio="none"
        >
          <path
            d="M -200 100 C 300 200, 600 0, 1000 100 S 1800 200, 2200 100 S 2800 0, 3200 100"
            stroke="url(#sectionBlue3d)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M -100 120 C 400 20, 700 220, 1100 120 S 1900 20, 2300 120 S 2900 220, 3300 120"
            stroke="url(#sectionGreen3d)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}

export function SectionDoodleTwo() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const xMovement = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  return (
    <div ref={ref} className="w-full h-32 overflow-visible pointer-events-none relative z-50 -my-8 md:-my-16">
      <SectionDoodleDefs />
      <motion.div
        style={{ x: xMovement }}
        className="absolute top-0 left-0 w-[3000px] h-full"
      >
        <svg
          viewBox="0 0 3000 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          filter="url(#sectionShadow3d)"
          className="w-full h-[200px] opacity-80"
          preserveAspectRatio="none"
        >
          <path
            d="M -200 80 C 200 180, 600 -20, 1000 80 S 1600 180, 2000 80 S 2600 -20, 3000 80"
            stroke="url(#sectionGreen3d)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M -100 60 C 300 160, 700 -40, 1100 60 S 1700 160, 2100 60 S 2700 -40, 3100 60"
            stroke="url(#sectionBlue3d)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}
