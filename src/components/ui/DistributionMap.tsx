"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import Link from "next/link";

const destinations = [
  { id: "delhi", x: 315, y: 280, label: "DELHI" },
  { id: "lucknow", x: 430, y: 320, label: "LUCKNOW" },
  { id: "bhopal", x: 330, y: 430, label: "BHOPAL" },
  { id: "kolkata", x: 580, y: 440, label: "KOLKATA" },
  { id: "ahmedabad", x: 220, y: 410, label: "AHMEDABAD" },
  { id: "mumbai", x: 230, y: 540, label: "MUMBAI" },
  { id: "hyderabad", x: 340, y: 580, label: "HYDERABAD" },
  { id: "bangalore", x: 330, y: 700, label: "BANGALORE" },
  { id: "chennai", x: 400, y: 680, label: "CHENNAI" },
];

export function DistributionMap() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Box */}
          <div className="lg:col-span-5 relative z-10">
            <ScrollReveal>
              <div className="bg-white rounded-[2rem] p-10 md:p-12 shadow-xl border border-gray-100">
                <span className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-4 block">National Reach</span>
                <h2 className="text-3xl md:text-4xl font-light text-[var(--color-primary)] tracking-tight mb-6">
                  Pioneering delivery across <br/>
                  <span className="font-semibold text-[var(--color-accent)]">India</span>
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  From our central headquarters in Jaipur, our sophisticated distribution network guarantees rapid, temperature-controlled delivery to major clinical hubs and pharmacies nationwide.
                </p>
                <Link href="/contact" className="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all haptic-btn">
                  Partner with our network
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Map */}
          <div className="lg:col-span-7 relative w-full aspect-square overflow-visible">
            
            {/* India Map Background */}
            <div 
              className="absolute inset-0 bg-blue-100/50 filter drop-shadow-xl" 
              style={{ 
                maskImage: 'url(/india.svg)', 
                maskSize: 'contain', 
                maskRepeat: 'no-repeat', 
                maskPosition: 'center',
                WebkitMaskImage: 'url(/india.svg)',
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center'
              }} 
            />

            {/* All animated elements in a single SVG */}
            <svg 
              className="absolute inset-0 w-full h-full overflow-visible" 
              viewBox="0 0 1000 1000" 
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.3" floodColor="#1b498f" />
                </filter>
              </defs>

              {/* Destination nodes, leader lines, and labels */}
              {destinations.map((dest, i) => {
                const lineMidX = dest.x + 30;
                const lineMidY = dest.y - 30;
                const lineEndX = dest.x + 80;
                
                return (
                  <g key={`node-${dest.id}`}>
                    {/* Anchor Dot */}
                    <motion.circle 
                      cx={dest.x} 
                      cy={dest.y} 
                      r="6" 
                      fill="white" 
                      stroke="var(--color-primary)"
                      strokeWidth="3"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", delay: 0.2 + (i * 0.15) }}
                    />

                    {/* Leader Line */}
                    <motion.path
                      d={`M ${dest.x} ${dest.y} L ${lineMidX} ${lineMidY} L ${lineEndX} ${lineMidY}`}
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.8 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 + (i * 0.15) }}
                    />

                    {/* Label Box */}
                    <motion.g
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 + (i * 0.15) }}
                    >
                      <rect 
                        x={lineEndX} 
                        y={lineMidY - 12} 
                        width="90" 
                        height="24" 
                        rx="4" 
                        fill="var(--color-primary)" 
                        fillOpacity="0.9"
                        stroke="white"
                        strokeWidth="1"
                        filter="url(#glow)"
                      />
                      <text 
                        x={lineEndX + 45} 
                        y={lineMidY + 4} 
                        fill="white" 
                        fontSize="11" 
                        fontWeight="700" 
                        fontFamily="sans-serif"
                        letterSpacing="1"
                        textAnchor="middle"
                      >
                        {dest.label}
                      </text>
                    </motion.g>
                  </g>
                );
              })}

              {/* Jaipur Hub */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.5 }}
              >
                <circle cx="295" cy="320" r="12" fill="var(--color-accent)" filter="url(#glow)" />
                <circle cx="295" cy="320" r="12" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                  <animate attributeName="r" from="12" to="35" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.8" to="0" dur="2s" repeatCount="indefinite" />
                </circle>
                <rect x="315" y="308" width="80" height="24" rx="4" fill="white" fillOpacity="0.95" stroke="var(--color-accent)" strokeWidth="2" filter="url(#glow)"/>
                <text x="355" y="324" fill="var(--color-accent)" fontSize="12" fontWeight="800" textAnchor="middle" letterSpacing="1">JAIPUR</text>
              </motion.g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
