"use client";

import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

export function MiniContact() {
  return (
    <section className="relative z-[1300] px-4 md:px-8 mt-12 mb-[-8rem]">
      <div className="max-w-6xl mx-auto bg-[var(--color-primary)] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl ambient-shadow">
        
        {/* Background Decor */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,100 C30,80 70,120 100,50 L100,100 Z" fill="var(--color-accent)" />
            <path d="M0,100 C40,40 60,110 100,20 L100,100 Z" fill="white" opacity="0.3" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-left max-w-2xl">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-4 leading-tight">
                Ready to make a <br/>
                <span className="font-semibold text-white">difference in healthcare?</span>
              </h2>
              <p className="text-blue-100 text-lg md:text-xl font-medium leading-relaxed">
                Connect with our state-of-the-art facilities for high-quality clinical formulations and manufacturing.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="flex-shrink-0">
            <ScrollReveal delay={200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 haptic-btn"
                >
                  Get started 
                  <span className="ml-2">→</span>
                </Link>
                <Link 
                  href="/about" 
                  className="bg-transparent border-2 border-blue-400/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-2 haptic-btn"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Watch how it works
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
