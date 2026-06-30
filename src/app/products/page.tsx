"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionDoodleOne } from "@/components/ui/SectionDoodles";

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full bg-white font-sans selection:bg-blue-100 selection:text-[var(--color-primary)]">
      
      {/* Header */}
      <section className="pt-24 pb-16 relative">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center">
          <ScrollReveal>
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-4 block">
              GAL CARE FOR CLINICS™
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 tracking-tight leading-[1.1] mb-6 font-serif">
              Our Products
            </h1>
            <p className="text-[15px] text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
              Advanced topical formulations and clinical skin care protocols designed for profound aesthetic restoration. Explore our dermatological solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {products.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 100}>
                <Link href={`/products/${product.slug}`} className="group block">
                  <div className="relative w-full aspect-[4/5] bg-gray-50 rounded-[2rem] overflow-hidden flex items-center justify-center p-8 mb-8">
                    <Image 
                      src={product.bgImage} 
                      alt="Background" 
                      fill 
                      className="object-cover opacity-30 mix-blend-multiply group-hover:scale-105 transition-transform duration-[2s] ease-[var(--ease-out-strong)]" 
                    />
                    <Image 
                      src={product.image}
                      alt={product.name}
                      width={300} 
                      height={450} 
                      className="object-contain relative z-10 drop-shadow-2xl group-hover:-translate-y-4 transition-transform duration-700 ease-[var(--ease-out-strong)]" 
                    />
                    
                    <div className="absolute top-6 right-6 z-20">
                      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2 block">
                      {product.category}
                    </span>
                    <h2 className="text-2xl font-normal text-gray-900 tracking-tight mb-3 font-serif group-hover:text-[var(--color-primary)] transition-colors">
                      {product.name}
                    </h2>
                    <p className="text-[13px] text-gray-500 leading-relaxed font-medium line-clamp-2">
                      {product.tagline}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      <div className="pb-12">
        <SectionDoodleOne />
      </div>
    </div>
  );
}
