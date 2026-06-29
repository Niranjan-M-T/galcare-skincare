"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  { id: 1, name: "Nuvate-AL Gel", image: "/images/product-1.png" },
  { id: 2, name: "Anapin RT 0.5mg", image: "/images/product-2.png" },
  { id: 3, name: "DermaCare Plus", image: "/images/product-1.png" }, // Placeholder repetition
  { id: 4, name: "NeuroZen Forte", image: "/images/product-2.png" }, // Placeholder repetition
  { id: 5, name: "SkinGlow Serum", image: "/images/product-1.png" }, // Placeholder repetition
  { id: 6, name: "CogniBoost", image: "/images/product-2.png" },     // Placeholder repetition
];

export function ProductCarousel() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-light text-[var(--color-primary)] tracking-tight">
          Discover Our <span className="font-semibold text-[var(--color-accent)]">Formulations</span>
        </h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Explore our extensive range of high-quality dermatological and neuropsychiatric products.
        </p>
      </div>

      <div className="relative flex overflow-visible group">
        {/* Left Gradient Mask */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        
        {/* Marquee Track */}
        <motion.div
          className="flex gap-8 px-4 py-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...products, ...products, ...products, ...products].map((product, i) => (
            <div
              key={`${product.id}-${i}`}
              className="flex-shrink-0 w-64 md:w-72 bg-white rounded-3xl p-6 pb-8 shadow-sm border border-gray-100 flex flex-col items-center group-hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
            >
              <div className="relative w-full h-56 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 256px, 288px"
                  className="object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center relative z-10">
                {product.name}
              </h3>
              <p className="text-sm text-gray-400 mt-2 relative z-10">Clinical Grade</p>
            </div>
          ))}
        </motion.div>

        {/* Right Gradient Mask */}
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
