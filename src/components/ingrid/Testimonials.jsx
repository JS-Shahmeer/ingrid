import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
 
const NEIGHBORHOOD_IMG = "https://media.base44.com/images/public/6a3dfd8e78a9a5ec3862578f/abb3a0a70_generated_edf7f570.png";
 
const testimonials = [
  {
    quote:
      "Ingrid's attention to detail is extraordinary. She manages our portfolio as if each property were her own — the care is evident in every interaction.",
    name: "Sarah & James Whitfield",
    role: "Property Investors, Brighton",
  },
  {
    quote:
      "In thirty years I've worked with many property managers. Ingrid is the first who truly understands that a home is more than an asset — it's a story worth preserving.",
    name: "Michael Chen",
    role: "Buyers Agent, Toorak",
  },
  {
    quote:
      "The level of professionalism and personal touch that Ingrid brings is rare in this industry. She has transformed the way we think about property management.",
    name: "Rebecca Harlowe",
    role: "Solicitor, South Yarra",
  },
];
 
export default function Testimonials() {
  return (
    <section className="relative">
      {/* Background Image Strip */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src={NEIGHBORHOOD_IMG}
          alt="Aerial view of prestigious Australian neighborhood at golden hour with tree-lined streets and luxury homes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center px-6"
          >
            <span className="font-body text-[11px] tracking-[0.3em] uppercase text-white/50">
              Trust Signals
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-light text-white leading-tight">
              Voices of <em className="font-light">Confidence</em>
            </h2>
            <div className="mt-5 mx-auto w-12 h-px bg-white/30" />
          </motion.div>
        </div>
      </div>
 
      {/* Testimonial Cards */}
      <div className="bg-[#F7F3F0] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pt-8"
              >
                <Quote
                  size={28}
                  strokeWidth={1}
                  className="text-[#8C7D70]/30 mb-4"
                />
                <p className="font-body text-[15px] leading-[1.8] text-[#1A1A1A]/60 mb-8">
                  {t.quote}
                </p>
                <div className="w-8 h-px bg-[#8C7D70]/30 mb-4" />
                <p className="font-body text-[13px] font-medium text-[#1A1A1A] tracking-wide">
                  {t.name}
                </p>
                <p className="font-body text-[11px] tracking-[0.15em] uppercase text-[#8C7D70] mt-1">
                  {t.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
 