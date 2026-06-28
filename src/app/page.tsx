import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HeroDoodleBack, HeroDoodleFront } from "@/components/ui/HeroDoodles";

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
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)]/5 rounded-bl-full transition-transform duration-700 ease-[var(--ease-spring)] group-hover:scale-110" />
                  <div className="relative z-10 max-w-md">
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
                  <div className="flex justify-between items-start w-full">
                    <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-widest font-bold bg-gray-100 text-gray-600">Division 02</span>
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 transition-colors duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-primary)] group-hover:border-[var(--color-accent)]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </div>
                  </div>
                  <div className="mt-auto relative z-10 pt-20">
                    <h3 className="text-3xl font-light text-[var(--color-primary)] mb-4 tracking-tight leading-tight">Neuropsychiatric<br/>Solutions</h3>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed">Pioneering molecular support systems for cognitive wellness.</p>
                  </div>
                  {/* Abstract Graphic */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[var(--color-accent)]/20 rounded-full flex items-center justify-center opacity-50">
                    <div className="w-32 h-32 border border-[var(--color-primary)]/10 rounded-full transition-transform duration-1000 ease-[var(--ease-spring)] group-hover:scale-110" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Bento Block 3 - Wide Footer Block (Manufacturing) */}
            <ScrollReveal className="md:col-span-12" delay={200}>
              <Link href="/categories/third-party-manufacturing" className="block w-full group double-bezel-outer transition-transform duration-500 ease-[var(--ease-spring)] hover:-translate-y-2">
                <div className="double-bezel-inner relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8 bg-[var(--color-primary)] group-hover:bg-[#153a73] transition-colors duration-500">
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

      {/* Trust & Certifications (Minimalist Structural) */}
      <section className="py-32 bg-white relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-gray-100 pt-16">
            
            <ScrollReveal delay={100}>
              <div className="flex flex-col gap-4 group">
                <div className="text-[var(--color-primary)] w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="font-light text-sm text-[var(--color-primary)] tracking-tight">GMP Certified</h4>
                <p className="text-xs text-gray-400 font-medium leading-relaxed">Internationally recognized manufacturing facilities.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex flex-col gap-4 group">
                <div className="text-[var(--color-primary)] w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
                </div>
                <h4 className="font-light text-sm text-[var(--color-primary)] tracking-tight">Clinically Validated</h4>
                <p className="text-xs text-gray-400 font-medium leading-relaxed">Formulations rooted in scientific evidence.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col gap-4 group">
                <div className="text-[var(--color-primary)] w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                </div>
                <h4 className="font-light text-sm text-[var(--color-primary)] tracking-tight">Doctor Formulated</h4>
                <p className="text-xs text-gray-400 font-medium leading-relaxed">Developed alongside leading medical professionals.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex flex-col gap-4 group">
                <div className="text-[var(--color-primary)] w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
                </div>
                <h4 className="font-light text-sm text-[var(--color-primary)] tracking-tight">WHO Standards</h4>
                <p className="text-xs text-gray-400 font-medium leading-relaxed">Compliant with global health benchmarks.</p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
      </div>
  );
}
