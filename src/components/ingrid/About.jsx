import React from "react";
import { motion } from "framer-motion";
 
const PORTRAIT = "https://media.base44.com/images/public/6a3dfd8e78a9a5ec3862578f/095de85f0_generated_e76b5241.png";
 
export default function About() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
 
  return (
    <section id="about" className="py-16 md:py-24 bg-[#F7F3F0]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 lg:gap-28">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-5/12"
          >
            <div className="relative">
              <img
                src={PORTRAIT}
                alt="Ingrid Elliott, an elegant and confident woman with decades of real estate expertise"
                className="w-full h-[450px] md:h-[600px] object-cover object-top"
              />
              {/* Decorative offset border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#8C7D70]/20 -z-10" />
            </div>
          </motion.div>
 
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-7/12"
          >
            <span className="font-body text-[11px] tracking-[0.3em] uppercase text-[#8C7D70]">
              About
            </span>
 
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-light text-[#1A1A1A] leading-tight">
              Thirty Years.
              <br />
              <em className="font-light">One Philosophy.</em>
            </h2>
 
            <div className="mt-6 w-12 h-px bg-[#8C7D70]/40" />
 
            <p className="mt-8 font-body text-[16px] md:text-[17px] leading-[1.8] text-[#1A1A1A]/65">
              With three decades of navigating the nuances of real estate, Ingrid Elliott understands that an investment property is far more than bricks and mortar—it is an important part of your financial future.
            </p>
 
            <p className="mt-5 font-body text-[16px] md:text-[17px] leading-[1.8] text-[#1A1A1A]/65">
              After building and leading a successful real estate business, Ingrid chose to focus on what she believes matters most: providing boutique property management with a genuinely personal approach. She looks after every home as if it were her own, giving each property the care, attention, and respect it deserves.
            </p>
 
            <blockquote className="mt-10 pl-6 border-l-2 border-[#8C7D70]/30">
              <p className="font-display text-xl md:text-2xl font-light italic text-[#1A1A1A]/75 leading-relaxed">
                "Great property management isn't just about collecting rent—it's about caring for your home, maximising its long-term value, and making property ownership as stress-free as possible."
              </p>
              <cite className="block mt-3 font-body text-[11px] tracking-[0.2em] uppercase text-[#8C7D70] not-italic">
                — Ingrid Elliott
              </cite>
            </blockquote>
 
            <button
              onClick={scrollToContact}
              className="mt-10 font-body text-[11px] tracking-[0.2em] uppercase px-10 py-3.5 bg-[#6E7B48] text-white hover:bg-[#6E7B48] transition-all duration-500"
            >
              Request a Private Consultation
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}