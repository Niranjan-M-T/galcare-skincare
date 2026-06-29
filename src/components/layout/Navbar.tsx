"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true); // scrolling down
      } else if (currentScrollY < lastScrollY.current) {
        setHidden(false); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Fluid Island Navbar */}
      <nav className={`fixed top-0 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 ease-[var(--ease-spring)] w-[calc(100%-2rem)] max-w-5xl rounded-[2rem] ${scrolled ? 'bg-white/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-black/5 py-3' : 'bg-transparent py-3'} ${hidden ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-6 opacity-100'}`}>
        <div className="px-4 md:px-8 flex justify-between items-center w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center overflow-visible pl-2 md:pl-6">
            <Image
              src="/logo.png"
              alt="Galcare Logo"
              width={400}
              height={150}
              className="h-10 md:h-12 w-auto object-contain flex-shrink-0 md:scale-[1.5] lg:scale-[2] md:origin-left"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="/categories/third-party-manufacturing"
              className={`text-sm font-semibold transition-colors duration-300 ${isActive('/categories/third-party-manufacturing') ? 'text-[var(--color-primary)]' : 'text-gray-500 hover:text-[var(--color-primary)]'}`}
            >
              Manufacturing
            </Link>
            <Link
              href="/categories/dermatology"
              className={`text-sm font-semibold transition-colors duration-300 ${isActive('/categories/dermatology') ? 'text-[var(--color-primary)]' : 'text-gray-500 hover:text-[var(--color-primary)]'}`}
            >
              Dermatology
            </Link>
            <Link
              href="/categories/neuropsychiatric"
              className={`text-sm font-semibold transition-colors duration-300 ${isActive('/categories/neuropsychiatric') ? 'text-[var(--color-primary)]' : 'text-gray-500 hover:text-[var(--color-primary)]'}`}
            >
              Neuropsychiatry
            </Link>
            <div className="relative group">
              <span className={`cursor-pointer text-sm font-semibold transition-colors duration-300 ${pathname.startsWith('/products') ? 'text-[var(--color-primary)]' : 'text-gray-500 hover:text-[var(--color-primary)]'}`}>
                Products
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                <div className="w-48 bg-white border border-gray-100 shadow-xl rounded-2xl p-2 flex flex-col gap-1">
                  <Link href="/products/nuvate-al-gel" className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-[var(--color-primary)] hover:bg-blue-50 rounded-xl transition-colors">
                    Nuvate AL Gel
                  </Link>
                  <Link href="/products/clinical-serum" className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-[var(--color-primary)] hover:bg-blue-50 rounded-xl transition-colors">
                    Clinical Serum
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/about"
              className={`text-sm font-semibold transition-colors duration-300 ${isActive('/about') ? 'text-[var(--color-primary)]' : 'text-gray-500 hover:text-[var(--color-primary)]'}`}
            >
              Our Story
            </Link>
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Link href="/contact" className="haptic-btn group flex items-center bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg">
              Contact
              <span className="btn-nested-icon ml-3 w-6 h-6 bg-white/20">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </Link>
          </div>

          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-[var(--color-primary)] haptic-btn z-[110]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="sr-only">Open main menu</span>
            <div className="w-5 flex flex-col items-end gap-1.5 transition-all duration-300 ease-[var(--ease-spring)]">
              <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ease-[var(--ease-spring)] ${mobileMenuOpen ? 'w-5 rotate-45 translate-y-2' : 'w-5'}`} />
              <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ease-[var(--ease-spring)] ${mobileMenuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
              <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ease-[var(--ease-spring)] ${mobileMenuOpen ? 'w-5 -rotate-45 -translate-y-2' : 'w-3'}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-white/95 backdrop-blur-3xl transition-opacity duration-500 ease-[var(--ease-spring)] flex flex-col justify-center px-8 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col gap-6 items-start mt-20">
          {[
            { label: 'Home', path: '/' },
            { label: 'Manufacturing', path: '/categories/third-party-manufacturing' },
            { label: 'Dermatology', path: '/categories/dermatology' },
            { label: 'Neuropsychiatric', path: '/categories/neuropsychiatric' },
            { label: 'Our Story', path: '/about' },
            { label: 'Contact', path: '/contact' },
          ].map((item, i) => (
            <Link
              key={item.label}
              href={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-4xl font-normal text-[var(--color-primary)] transition-all duration-500 ease-[var(--ease-spring)] hover:text-[var(--color-accent)]"
              style={{
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(2rem)',
                opacity: mobileMenuOpen ? 1 : 0,
                transitionDelay: `${mobileMenuOpen ? i * 50 + 100 : 0}ms`
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
