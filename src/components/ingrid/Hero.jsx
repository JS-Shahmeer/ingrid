import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.webp";
 
export default function Hero() {
  const scrollToServices = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
 
  return (
    <section className="relative md:min-h-[700px] md:h-full h-screen md:pt-44 w-full overflow-hidden">
      {/* Background Image with Ken Burns */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "linear" }}
        className="absolute inset-0"
      >
        <img
          src={heroBg}
          alt="Homepage hero background"
          className="w-full h-full object-cover"
        />
      </motion.div>
 
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
 
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        {/* IE Monogram */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <span className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-white/90 tracking-[0.05em]">
            IE
          </span>
        </motion.div> */}
 
        {/* Thin Rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-px bg-white/40 mb-8"
        />
 
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl md:text-7xl font-light text-white leading-tight max-w-4xl"
        >
          Ingrid Elliott
          Real Estate
        </motion.h1>
 
        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-6 font-body text-[13px] md:text-sm tracking-[0.2em] uppercase text-white max-w-xl"
        >
          Boutique Property Management
        </motion.p>
 
        {/* CTA */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          onClick={scrollToServices}
          className="mt-12 font-body text-[11px] tracking-[0.2em] uppercase px-10 py-3.5 border border-white/40 text-white hover:bg-white hover:text-[#1A1A1A] transition-all duration-500"
        >
          Discover More
        </motion.button>
      </div>
 
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-white/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
 