"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PageLoaderProps {
  children: React.ReactNode;
}

export function PageLoader({ children }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimum time to show the premium animation (1.5s)
    const MIN_LOAD_TIME = 1500;
    const startTime = Date.now();

    const finishLoading = () => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_LOAD_TIME - elapsed);
      
      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
      // Fallback just in case 'load' never fires due to a stuck resource
      const fallbackTimer = setTimeout(finishLoading, 5000);
      
      return () => {
        window.removeEventListener("load", finishLoading);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0); // Force top
    } else {
      document.body.style.overflow = "";
    }
  }, [isLoading]);

  return (
    <>
      {/* The Full Screen Creative Loader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: "-100%",
              transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] }
            }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white"
          >
            {/* Animated Icon Mask */}
            <motion.div
              className="relative w-24 h-24 overflow-hidden rounded-2xl shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gray-100" />
              <motion.div
                className="absolute inset-0 bg-[var(--color-primary)] origin-bottom"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              />
              <Image
                src="/icon.png"
                alt="Galcare Loading"
                width={96}
                height={96}
                className="relative z-10 w-full h-full object-contain p-4 mix-blend-screen"
                priority
              />
            </motion.div>

            {/* Progress Text */}
            <motion.div
              className="mt-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.span
                className="block text-xs font-bold tracking-[0.3em] uppercase text-[var(--color-primary)]"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                Loading...
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Glowing Edge Mask Tracker */}
      <motion.div
        initial={{ top: 0, y: "100vh" }}
        animate={!isLoading ? { y: "-10vh", opacity: 0 } : {}}
        transition={{
          duration: 1.2,
          ease: [0.77, 0, 0.175, 1],
          delay: 0.1
        }}
        className="fixed left-0 right-0 h-[10px] bg-[var(--color-primary)] shadow-[0_0_100px_40px_rgba(27,73,143,0.8)] z-[190] pointer-events-none rounded-t-[100%]"
      />

      {/* The Mask-Transitioning Page Content */}
      <motion.div
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        animate={!isLoading ? { clipPath: "inset(0% 0 0 0)" } : {}}
        transition={{
          duration: 1.2,
          ease: [0.77, 0, 0.175, 1], // Emil's snappy motion ease
          delay: 0.1
        }}
        className="w-full bg-white relative z-[150]"
      >
        {children}
      </motion.div>
    </>
  );
}
