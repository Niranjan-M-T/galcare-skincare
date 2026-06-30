"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getProductBySlug } from "@/data/products";

function Accordion({ title, content, isOpen, onClick }: { title: string, content: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center text-left focus:outline-none group"
      >
        <span className={`text-sm font-medium transition-colors ${isOpen ? 'text-[var(--color-primary)]' : 'text-gray-700 group-hover:text-[var(--color-primary)]'}`}>
          {title}
        </span>
        <span className="text-xl font-light text-gray-400 leading-none">
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
            <p className="pt-3 text-xs text-gray-500 leading-relaxed font-medium">
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
    <div className="border-b border-gray-200 py-5">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center text-left focus:outline-none group"
      >
        <div className="flex items-center gap-6">
          <span className="text-sm font-bold text-gray-400 w-4">{num}</span>
          <span className={`text-base font-semibold transition-colors ${isOpen ? 'text-[var(--color-primary)]' : 'text-gray-700 group-hover:text-[var(--color-primary)]'}`}>
            {title}
          </span>
        </div>
        <div className="text-gray-300 group-hover:text-[var(--color-primary)] transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
            )}
          </svg>
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
            <p className="pt-3 text-xs text-gray-500 leading-relaxed font-medium">
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { use } from "react";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const product = getProductBySlug(resolvedParams.slug);
  const [purchaseType, setPurchaseType] = useState<"one-time" | "subscribe">("one-time");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [openDetail, setOpenDetail] = useState<number | null>(null);
  const [openStep, setOpenStep] = useState<number | null>(1);

  if (!product) {
    return notFound();
  }

  // Initialize size if not set
  if (!selectedSize && product.sizes && product.sizes.length > 0) {
    setSelectedSize(product.sizes[0]);
  }

  const price = purchaseType === "subscribe" ? product.price * 0.9 : product.price;

  return (
    <div className="flex flex-col w-full bg-white font-sans selection:bg-blue-100 selection:text-[var(--color-primary)]">
      
      {/* 1. Hero Section */}
      <section className="pt-16 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Image (takes 5 cols) */}
            <ScrollReveal className="lg:col-span-6 h-full">
              <div className="relative w-full h-[500px] lg:h-[650px] bg-gray-50 rounded-[2rem] overflow-hidden flex items-center justify-center p-8 group">
                <Image 
                  src={product.bgImage} 
                  alt="Background" 
                  fill 
                  className="object-cover opacity-50 mix-blend-multiply group-hover:scale-105 transition-transform duration-[2s] ease-[var(--ease-out-strong)]" 
                />
                <Image 
                  src={product.image}
                  alt={product.name}
                  width={350} 
                  height={550} 
                  className="object-contain relative z-10 drop-shadow-2xl group-hover:-translate-y-2 transition-transform duration-500 ease-[var(--ease-out-strong)]" 
                  priority
                />
              </div>
            </ScrollReveal>

            {/* Right: Content (takes 6 cols) */}
            <div className="lg:col-span-6 flex flex-col pt-4 lg:pl-8">
              <ScrollReveal delay={100}>
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-4 block">
                  GAL CARE FOR CLINICS™
                </span>
                <h1 className="text-4xl md:text-5xl font-normal text-gray-900 tracking-tight leading-[1.1] mb-4 font-serif">
                  {product.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex text-gray-800">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.ratings) ? 'text-gray-800' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 font-medium">({product.reviews})</span>
                </div>
                
                {/* Description */}
                <p className="text-[13px] text-gray-600 mb-8 leading-relaxed font-medium max-w-lg pr-4">
                  {product.tagline} {product.details?.[0]?.content}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link href="/contact" className="haptic-btn bg-[var(--color-primary)] text-white px-8 py-3.5 rounded-full text-center font-bold text-sm hover:shadow-lg active:scale-[0.98] transition-all duration-200">
                    Inquire for Bulk Order
                  </Link>
                  <Link href="/contact?type=sample" className="haptic-btn border-2 border-gray-200 text-gray-700 px-8 py-3.5 rounded-full text-center font-bold text-sm hover:border-gray-900 hover:text-gray-900 active:scale-[0.98] transition-all duration-200">
                    Request Sample
                  </Link>
                </div>
                {/* Features */}
                <div className="flex flex-wrap items-center justify-between border-b border-gray-200 pb-5 mb-5 px-1">
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
                    Vegan
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
                    Cruelty-free
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
                    Clean formula
                  </div>
                </div>

                {/* Detail Accordions */}
                <div className="flex flex-col">
                  {product.details?.map((detail, idx) => (
                    <Accordion 
                      key={idx}
                      title={detail.title}
                      content={detail.content}
                      isOpen={openDetail === idx}
                      onClick={() => setOpenDetail(openDetail === idx ? null : idx)}
                    />
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Benefits / Highlights */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 text-center mb-16 tracking-tight font-serif">
              {product.benefits.title}
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={100} className="h-full">
              <div className="relative w-full h-[240px] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                <Image 
                  src={product.bgImage} 
                  alt="Texture" 
                  fill 
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            
            {product.benefits.items.slice(0, 2).map((item, index) => (
              <ScrollReveal key={index} delay={200 + (index * 100)} className="h-full">
                <div className="w-full h-[240px] rounded-2xl border border-gray-200 p-8 flex flex-col justify-center bg-white hover:border-gray-300 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 font-medium text-[13px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Ingredients Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex justify-between items-end mb-12">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-normal text-gray-900 tracking-tight font-serif">
                Ingredients
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <button className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-gray-800 transition-colors border-b border-transparent hover:border-gray-800 pb-1">
                VIEW ALL
              </button>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.activeCompounds.compounds.slice(0, 2).map((compound, index) => (
              <ScrollReveal key={index} delay={100 + (index * 100)}>
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex h-[160px] group hover:border-gray-300 transition-colors">
                  <div className="relative w-2/5 h-full shrink-0 border-r border-gray-100">
                    {/* Reusing compound image from data, setting object-cover to match screenshot */}
                    <Image src={compound.image} alt={compound.name} fill className="object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700 ease-[var(--ease-out-strong)]" />
                  </div>
                  <div className="w-3/5 p-6 flex flex-col justify-center">
                    <h3 className="text-[15px] font-semibold text-gray-900 mb-2">{compound.name}</h3>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-medium line-clamp-3">
                      {compound.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Regimen */}
      <section id="regimen" className="pt-12 pb-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 text-center mb-16 tracking-tight font-serif">
              {product.regimen.title}
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            <ScrollReveal>
              <div className="relative w-full aspect-[4/3] md:aspect-square rounded-[2rem] overflow-hidden group">
                <Image 
                  src={product.regimen.image} 
                  alt="Application Regimen" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[var(--ease-out-strong)]" 
                />
                <div className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/95 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <div className="w-2 h-2 bg-gray-900 rounded-full" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100} className="w-full">
              <div className="border-t border-gray-200 mt-4">
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
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </div>
  );
}
