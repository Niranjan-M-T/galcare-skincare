"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionDoodleOne, SectionDoodleTwo } from "@/components/ui/SectionDoodles";
import { getProductBySlug } from "@/data/products";

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

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  const [openStep, setOpenStep] = useState<number | null>(1);

  if (!product) {
    return notFound();
  }

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
                  src={product.image}
                  alt={product.name}
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
                <span className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-4 block">
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-[var(--color-primary)] tracking-tight leading-[1.1] mb-6">
                  {product.name}
                </h1>
                <div className="flex items-center gap-2 mb-8">
                  <div className="flex text-[var(--color-accent)]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.ratings) ? 'text-[var(--color-accent)]' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">({product.reviews} reviews)</span>
                </div>
                
                <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
                  {product.tagline}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link href="/contact" className="haptic-btn bg-[var(--color-primary)] text-white px-8 py-4 rounded-full text-center font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
                    Inquire for Bulk Order
                  </Link>
                  <Link href="/contact?type=sample" className="haptic-btn border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-full text-center font-bold hover:bg-gray-50 hover:scale-[1.02] transition-all">
                    Request Sample
                  </Link>
                </div>

                <div className="flex flex-wrap gap-6 border-y border-gray-200 py-6">
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
                    Cruelty-free
                  </div>
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
              {product.benefits.title}
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={100} className="h-full">
              <div className="relative w-full h-full min-h-[300px] rounded-[2rem] overflow-hidden bg-gray-100 border border-gray-200 group shadow-sm">
                <Image 
                  src={product.bgImage} 
                  alt="Texture" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-[var(--ease-spring)]"
                />
              </div>
            </ScrollReveal>
            
            {product.benefits.items.map((item, index) => (
              <ScrollReveal key={index} delay={200 + (index * 100)} className="h-full">
                <div className="w-full h-full min-h-[300px] rounded-[2rem] border border-gray-200 p-10 flex flex-col justify-center hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Active Compounds / Ingredients */}
      <section className="py-24 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-light text-[var(--color-primary)] tracking-tight">
                {product.activeCompounds.title}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <Link href="#regimen" className="text-sm font-bold text-gray-500 uppercase tracking-widest hover:text-[var(--color-primary)] transition-colors">
                View Regimen →
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.activeCompounds.compounds.map((compound, index) => (
              <ScrollReveal key={index} delay={100 + (index * 100)}>
                <div className="bg-white rounded-[2rem] border border-gray-200 p-8 flex flex-col sm:flex-row gap-8 items-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`relative w-full sm:w-1/2 aspect-square rounded-[1.5rem] overflow-hidden shrink-0 shadow-inner ${index % 2 === 0 ? product.bgColor : 'bg-green-50/50'}`}>
                    <Image src={compound.image} alt={compound.name} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-[var(--ease-spring)] mix-blend-multiply" />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{compound.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                      {compound.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDoodleTwo />

      {/* 4. The Regimen */}
      <section id="regimen" className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-light text-[var(--color-primary)] text-center mb-20 tracking-tight">
              {product.regimen.title}
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <ScrollReveal>
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group bg-gray-100">
                <Image 
                  src={product.regimen.image} 
                  alt="Application Regimen" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[var(--ease-spring)]" 
                />
                {/* Minimalist dot overlay like in the reference */}
                <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <div className="w-3 h-3 bg-[var(--color-primary)] rounded-full animate-pulse" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100} className="w-full">
              {product.regimen.steps.map((step, index) => (
                <StepAccordion 
                  key={index}
                  num={index + 1} 
                  title={step.title} 
                  content={step.description}
                  isOpen={openStep === index + 1}
                  onClick={() => setOpenStep(openStep === index + 1 ? null : index + 1)}
                />
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

    </div>
  );
}
