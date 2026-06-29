"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionDoodleOne, SectionDoodleTwo } from "@/components/ui/SectionDoodles";

function Accordion({ title, content, isOpen, onClick }: { title: string, content: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg font-semibold text-gray-800 group-hover:text-[var(--color-primary)] transition-colors">
          {title}
        </span>
        <span className="text-2xl text-gray-400 group-hover:text-[var(--color-primary)] transition-colors">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-500 leading-relaxed font-medium">
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StepAccordion({ num, title, content, isOpen, onClick }: { num: number, title: string, content: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center text-left focus:outline-none group"
      >
        <div className="flex items-center gap-6">
          <span className="text-lg font-medium text-gray-400 w-4">{num}</span>
          <span className={`text-2xl font-semibold transition-colors ${isOpen ? 'text-[var(--color-primary)]' : 'text-gray-800 group-hover:text-[var(--color-primary)]'}`}>
            {title}
          </span>
        </div>
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${isOpen ? 'border-transparent text-gray-400' : 'border-gray-200 text-gray-400 group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)]'}`}>
          <span className="text-xl leading-none mb-1">{isOpen ? "×" : "+"}</span>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-10"
          >
            <p className="pt-4 text-gray-500 leading-relaxed font-medium">
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Dermatology() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [openStep, setOpenStep] = useState<number | null>(1);

  return (
    <div className="flex flex-col w-full pb-20 bg-white">
      {/* 1. Hero Split Section */}
      <section className="pt-16 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* Left: Product Image */}
            <ScrollReveal>
              <div className="relative w-full aspect-[4/5] bg-gray-50 rounded-[2rem] overflow-hidden flex items-center justify-center p-12 group">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--color-accent)] via-transparent to-transparent group-hover:scale-110 transition-transform duration-1000" />
                <Image 
                  src="/images/product-1.png" 
                  alt="Dermatology Formulations" 
                  width={400} 
                  height={600} 
                  className="object-contain relative z-10 drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-[var(--ease-spring)] mix-blend-multiply" 
                  priority
                />
              </div>
            </ScrollReveal>

            {/* Right: Content */}
            <div className="flex flex-col justify-center pt-8 lg:pt-16">
              <ScrollReveal delay={100}>
                <span className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-4 block">Clinical Grade</span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-[var(--color-primary)] tracking-tight leading-[1.1] mb-6">
                  Dermatology<br/>Solutions
                </h1>
                <div className="flex items-center gap-2 mb-8">
                  <div className="flex text-[var(--color-accent)]">
                    {[1,2,3,4,5].map(i => <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">(WHO-GMP Certified)</span>
                </div>
                
                <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
                  Instantly soothe, restore, and plump skin with sustainably sourced pharmaceutical ingredients. Advanced topical formulations designed for profound aesthetic and clinical restoration.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link href="/contact" className="haptic-btn bg-[var(--color-primary)] text-white px-8 py-4 rounded-full text-center font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
                    Partner With Us
                  </Link>
                </div>

                <div className="flex flex-wrap gap-6 mb-12 border-y border-gray-200 py-6">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                    Clinical Grade
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Safety Tested
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Global Export
                  </div>
                </div>

                <div className="flex flex-col">
                  <Accordion 
                    title="Formulations" 
                    content="Our extensive portfolio includes anti-acne, anti-fungal, emollients, corticosteroids, sunscreens, and advanced anti-aging serums. Custom formulations available upon request." 
                    isOpen={openAccordion === 0} 
                    onClick={() => setOpenAccordion(openAccordion === 0 ? null : 0)} 
                  />
                  <Accordion 
                    title="Manufacturing Capacity" 
                    content="Operating state-of-the-art facilities capable of large-scale production of creams, ointments, lotions, gels, and serums under strict GMP guidelines." 
                    isOpen={openAccordion === 1} 
                    onClick={() => setOpenAccordion(openAccordion === 1 ? null : 1)} 
                  />
                  <Accordion 
                    title="Quality Control" 
                    content="Every batch undergoes rigorous analytical and microbiological testing to ensure stability, efficacy, and purity before reaching the market." 
                    isOpen={openAccordion === 2} 
                    onClick={() => setOpenAccordion(openAccordion === 2 ? null : 2)} 
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <SectionDoodleOne />

      {/* 2. Highlights Grid */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-light text-[var(--color-primary)] text-center mb-16 tracking-tight">
              Uncompromising Quality
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={100} className="h-full">
              <div className="relative w-full h-full min-h-[300px] rounded-[2rem] overflow-hidden bg-gray-100 border border-gray-200 group shadow-sm">
                <Image 
                  src="/dermatology_bg.png" 
                  alt="Texture" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-[var(--ease-spring)]"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200} className="h-full">
              <div className="w-full h-full min-h-[300px] rounded-[2rem] border border-gray-200 p-10 flex flex-col justify-center hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 leading-tight">
                  Advanced Active<br/>Delivery
                </h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">
                  *Proprietary base formulations ensure maximum skin penetration and bioavailability of active pharmaceutical ingredients.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300} className="h-full">
              <div className="w-full h-full min-h-[300px] rounded-[2rem] border border-gray-200 p-10 flex flex-col justify-center hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 leading-tight">
                  High-Yield<br/>Scalability
                </h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">
                  Automated compounding and filling lines allow us to rapidly scale production to meet national and global distribution demands.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Active Compounds / Ingredients */}
      <section className="py-24 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-light text-[var(--color-primary)] tracking-tight">
                Key Formulations
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <Link href="/contact" className="text-sm font-bold text-gray-500 uppercase tracking-widest hover:text-[var(--color-primary)] transition-colors">
                View Full Catalog →
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-[2rem] border border-gray-200 p-8 flex flex-col sm:flex-row gap-8 items-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative w-full sm:w-1/2 aspect-square rounded-[1.5rem] overflow-hidden shrink-0 shadow-inner bg-blue-50/50">
                  <Image src="/images/product-2.png" alt="Clinical Serums" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-[var(--ease-spring)] mix-blend-multiply" />
                </div>
                <div className="w-full sm:w-1/2">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Clinical Serums</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    Highly concentrated active solutions designed to target specific skin concerns, from deep hydration to cellular repair and hyperpigmentation correction.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white rounded-[2rem] border border-gray-200 p-8 flex flex-col sm:flex-row gap-8 items-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative w-full sm:w-1/2 aspect-square rounded-[1.5rem] overflow-hidden shrink-0 shadow-inner bg-green-50/50">
                  <Image src="/images/product-1.png" alt="Topical Ointments" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-[var(--ease-spring)] mix-blend-multiply" />
                </div>
                <div className="w-full sm:w-1/2">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Topical Ointments</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    Steroid and anti-fungal formulations in stable emollient bases, designed to provide immediate relief and treat severe dermatological conditions.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDoodleTwo />

      {/* 4. The Galcare Process (Regimen) */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-light text-[var(--color-primary)] text-center mb-20 tracking-tight">
              Our Manufacturing Process
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <ScrollReveal>
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group">
                <Image 
                  src="/manufacturing_bg.png" 
                  alt="Manufacturing Facility" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 ease-[var(--ease-spring)]" 
                />
                <div className="absolute inset-0 border-[8px] border-white/20 rounded-[2rem] mix-blend-overlay" />
                {/* Minimalist dot overlay like in the reference */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <div className="w-3 h-3 bg-[var(--color-primary)] rounded-full animate-pulse" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100} className="w-full">
              <StepAccordion 
                num={1} 
                title="R&D and Formulation" 
                content="Our laboratory scientists develop proprietary bases and compound active pharmaceutical ingredients to ensure maximum stability and skin penetration."
                isOpen={openStep === 1}
                onClick={() => setOpenStep(openStep === 1 ? null : 1)}
              />
              <StepAccordion 
                num={2} 
                title="Raw Material Sourcing" 
                content="We source only the highest grade, certified raw materials from trusted global suppliers, ensuring absolute purity before compounding begins."
                isOpen={openStep === 2}
                onClick={() => setOpenStep(openStep === 2 ? null : 2)}
              />
              <StepAccordion 
                num={3} 
                title="Compounding & Mixing" 
                content="State-of-the-art automated mixing vessels ensure homogeneous blending under strictly controlled environmental conditions (temperature and humidity)."
                isOpen={openStep === 3}
                onClick={() => setOpenStep(openStep === 3 ? null : 3)}
              />
              <StepAccordion 
                num={4} 
                title="Quality Testing" 
                content="Every batch is quarantined and subjected to rigorous HPLC, microbiological, and stability testing. Only after passing all benchmarks is it released."
                isOpen={openStep === 4}
                onClick={() => setOpenStep(openStep === 4 ? null : 4)}
              />
              <StepAccordion 
                num={5} 
                title="Filling & Distribution" 
                content="Products are filled in sterile environments using automated lines into precise, tamper-evident packaging before being shipped via our pan-India network."
                isOpen={openStep === 5}
                onClick={() => setOpenStep(openStep === 5 ? null : 5)}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

    </div>
  );
}
