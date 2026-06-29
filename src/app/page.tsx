import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HeroDoodleBack, HeroDoodleFront } from "@/components/ui/HeroDoodles";
import { ProductCarousel } from "@/components/ui/ProductCarousel";
import { WhyUsSection } from "@/components/ui/WhyUsSection";
import { DistributionMap } from "@/components/ui/DistributionMap";
import { MiniContact } from "@/components/ui/MiniContact";
import { SectionDoodleOne, SectionDoodleTwo } from "@/components/ui/SectionDoodles";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section (Soft Structuralism / Macro Whitespace) */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-24 px-4 md:px-8 bg-white overflow-hidden">
        
        {/* Background Doodle (Behind Products) */}
        <HeroDoodleBack />

        {/* Product Images (No BG) */}
        <div className="absolute top-[25%] left-[5%] md:left-[12%] z-10 animate-float hidden lg:block drop-shadow-2xl -rotate-6">
          <div className="relative w-48 h-auto">
            <Image 
              src="/images/product-1.png" 
              alt="Galcare Product" 
              width={300} 
              height={400} 
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        <div className="absolute top-[35%] right-[5%] md:right-[12%] z-10 animate-float hidden lg:block drop-shadow-2xl rotate-6" style={{ animationDelay: '1s' }}>
          <div className="relative w-56 h-auto">
            <Image 
              src="/images/product-2.png" 
              alt="Galcare Product" 
              width={300} 
              height={400} 
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
        
        <div className="text-center z-20 w-full max-w-5xl mx-auto flex flex-col items-center relative -translate-y-16 md:-translate-y-24">
          <div className="inline-block animate-fade-up">
            <span className="rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold bg-white text-gray-500 shadow-sm border border-gray-100 mb-8 inline-block">
              Since 2008
            </span>
          </div>
          
          <h1 className="text-5xl md:text-[5.5rem] lg:text-[7rem] font-light text-[var(--color-primary)] tracking-tighter leading-[0.95] mb-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Precision in<br />
            <span className="text-gray-900">Formulation.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-500 mb-16 animate-fade-up max-w-2xl font-medium leading-relaxed" style={{ animationDelay: '200ms' }}>
            Engineering clinical-grade dermatological and neuropsychiatric solutions for global partners.
          </p>
          
          {/* Button-in-Button CTA */}
          <div className="animate-fade-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: '300ms' }}>
            <Link href="/categories/third-party-manufacturing" className="group haptic-btn flex items-center bg-[var(--color-primary)] text-white px-8 py-4 rounded-full text-lg font-bold shadow-[0_20px_40px_-15px_rgba(27,73,143,0.3)]">
              Partner With Us
              <span className="btn-nested-icon ml-4 bg-white/20">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Foreground Doodle (In Front of Products) */}
        <HeroDoodleFront />
      </section>

      {/* The Asymmetrical Bento Grid (Features & Categories) */}
      <section className="py-32 bg-gray-50/30">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <h2 className="text-4xl md:text-6xl font-light text-[var(--color-primary)] tracking-tight leading-none max-w-lg">
                Engineered for Efficacy.
              </h2>
              <p className="text-gray-500 font-medium max-w-sm">
                Three specialized divisions, one standard of uncompromising quality.
              </p>
            </div>
          </ScrollReveal>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-[minmax(300px,auto)]">
            
            {/* Bento Block 1 - Large (Dermatology) */}
            <ScrollReveal className="md:col-span-8 md:row-span-2">
              <Link href="/categories/dermatology" className="block w-full h-full group double-bezel-outer transition-transform duration-500 ease-[var(--ease-spring)] hover:-translate-y-2">
                <div className="double-bezel-inner bg-white relative overflow-hidden flex flex-col justify-end p-8 md:p-12 min-h-[400px]">
                  <Image src="/dermatology_bg.png" alt="Dermatology" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover opacity-80 group-hover:scale-105 transition-all duration-700 ease-[var(--ease-spring)]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                  <div className="relative z-10 max-w-md mt-32">
                    <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-widest font-bold bg-[var(--color-primary)] text-white mb-4 inline-block">Division 01</span>
                    <h3 className="text-3xl md:text-5xl font-light text-[var(--color-primary)] mb-4 tracking-tight">Dermatology</h3>
                    <p className="text-gray-500 font-medium leading-relaxed">Advanced topical formulations and clinical skin care protocols designed for profound aesthetic restoration.</p>
                  </div>
                  {/* Floating Action Circle */}
                  <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-[var(--color-primary)] transition-transform duration-500 ease-[var(--ease-spring)] group-hover:rotate-45 group-hover:bg-[var(--color-primary)] group-hover:text-white shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Bento Block 2 - Tall (Neuro) */}
            <ScrollReveal className="md:col-span-4 md:row-span-2" delay={100}>
              <Link href="/categories/neuropsychiatric" className="block w-full h-full group double-bezel-outer transition-transform duration-500 ease-[var(--ease-spring)] hover:-translate-y-2">
                <div className="double-bezel-inner bg-white relative overflow-hidden flex flex-col justify-between p-8 md:p-10 h-full min-h-[400px]">
                  <Image src="/neuro_bg.png" alt="Neuropsychiatric" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-60 group-hover:scale-105 transition-all duration-700 ease-[var(--ease-spring)]" />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white" />
                  
                  <div className="relative z-10 flex justify-between items-start w-full">
                    <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-widest font-bold bg-gray-100 text-gray-600">Division 02</span>
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:border-[var(--color-primary)]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </div>
                  </div>
                  <div className="mt-auto relative z-10 pt-48">
                    <h3 className="text-3xl font-light text-[var(--color-primary)] mb-4 tracking-tight leading-tight">Neuropsychiatric<br/>Solutions</h3>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed">Pioneering molecular support systems for cognitive wellness.</p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Bento Block 3 - Wide Footer Block (Manufacturing) */}
            <ScrollReveal className="md:col-span-12" delay={200}>
              <Link href="/categories/third-party-manufacturing" className="block w-full group double-bezel-outer transition-transform duration-500 ease-[var(--ease-spring)] hover:-translate-y-2">
                <div className="double-bezel-inner relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8 bg-[var(--color-primary)] group-hover:bg-[#153a73] transition-colors duration-500">
                  <Image src="/manufacturing_bg.png" alt="Manufacturing" fill sizes="100vw" className="object-cover opacity-30 mix-blend-overlay group-hover:scale-105 transition-all duration-700 ease-[var(--ease-spring)]" />
                  <div className="relative z-10 max-w-xl text-white">
                    <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-widest font-bold bg-white/10 mb-4 inline-block">Partner Ecosystem</span>
                    <h3 className="text-3xl md:text-4xl font-light mb-4 tracking-tight text-white">3rd Party Manufacturing</h3>
                    <p className="text-white/80 font-medium leading-relaxed max-w-md">GMP-certified, high-volume production lines ready to scale your pharmaceutical brand globally.</p>
                  </div>
                  
                  <div className="relative shrink-0 flex items-center justify-center w-24 h-24 rounded-full bg-white text-[var(--color-primary)] font-bold transition-transform duration-700 ease-[var(--ease-spring)] group-hover:rotate-[360deg] group-hover:scale-110 shadow-xl">
                    Explore
                    <div className="absolute inset-2 border border-[var(--color-primary)]/20 rounded-full border-dashed animate-[spin_10s_linear_infinite]" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
            
          </div>
        </div>
      </section>

      <ProductCarousel />
      
      <SectionDoodleOne />
      <WhyUsSection />
      
      <SectionDoodleTwo />
      <DistributionMap />
      
      <MiniContact />

      </div>
  );
}
