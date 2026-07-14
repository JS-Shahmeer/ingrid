import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-36 bg-[#EFEBE7]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="font-body text-[11px] tracking-[0.3em] uppercase text-[#8C7D70]">
            For Lease
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-light text-[#1A1A1A] leading-tight">
            Current Rental
            <br />
            <em className="font-light">Opportunities</em>
          </h2>
          <div className="mt-6 mx-auto w-12 h-px bg-[#8C7D70]/40" />
          <p className="mt-8 font-body text-[15px] leading-relaxed text-[#1A1A1A]/65 max-w-2xl mx-auto">
            Browse Ingrid Elliott’s current listings and discover a carefully presented selection of available homes.
          </p>
          <a
            href="https://www.realestate.com.au/rent"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block font-body text-[11px] tracking-[0.2em] uppercase px-8 py-3 bg-[#6E7B48] text-white hover:bg-[#8A9A5B] transition-all duration-500"
          >
            View Available Rentals
          </a>
        </motion.div>
      </div>
    </section>
  );
}
