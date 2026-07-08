import React from "react";
import { motion } from "framer-motion";
 
const PORTRAIT = "https://media.base44.com/images/public/6a3dfd8e78a9a5ec3862578f/095de85f0_generated_e76b5241.png";
 
export default function About() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
 
  return (
    <section id="about" className="py-24 md:py-36 bg-[#F7F3F0]">
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
                alt="Ingrid Ellis, an elegant and confident woman with decades of real estate expertise"
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
              The Narrative
            </span>
 
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-light text-[#1A1A1A] leading-tight">
              Thirty Years.
              <br />
              <em className="font-light">One Philosophy.</em>
            </h2>
 
            <div className="mt-6 w-12 h-px bg-[#8C7D70]/40" />
 
            <p className="mt-8 font-body text-[16px] md:text-[17px] leading-[1.8] text-[#1A1A1A]/65">
              With three decades navigating the nuances of premium real estate,
              Ingrid Ellis brings an unwavering commitment to the art of property
              stewardship. Having built and led a successful real estate business,
              she now channels that depth of experience into a singular focus:
              boutique property management that treats every home as the legacy
              it truly is.
            </p>
 
            <p className="mt-5 font-body text-[16px] md:text-[17px] leading-[1.8] text-[#1A1A1A]/65">
              Working exclusively with buyers agents, solicitors, and
              discerning property owners, Ingrid delivers an experience that
              transcends the transactional — replacing it with trust, precision,
              and an intimate understanding of what makes a property not just
              valuable, but remarkable.
            </p>
 
            <blockquote className="mt-10 pl-6 border-l-2 border-[#8C7D70]/30">
              <p className="font-display text-xl md:text-2xl font-light italic text-[#1A1A1A]/75 leading-relaxed">
                "Every property has a story. My role is to protect and
                elevate that story for generations."
              </p>
              <cite className="block mt-3 font-body text-[11px] tracking-[0.2em] uppercase text-[#8C7D70] not-italic">
                — Ingrid Ellis
              </cite>
            </blockquote>
 
            <button
              onClick={scrollToContact}
              className="mt-10 font-body text-[11px] tracking-[0.2em] uppercase px-10 py-3.5 bg-[#2F2F2F] text-white hover:bg-[#6E7B48] transition-all duration-500"
            >
              Request a Private Consultation
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}