import React from "react";
import { motion } from "framer-motion";
 
const properties = [
  {
    image: "https://media.base44.com/images/public/6a3dfd8e78a9a5ec3862578f/0d5d984bf_generated_5518f9dc.png",
    alt: "Sophisticated contemporary Australian home at golden hour, warm sandstone and timber facade with native garden",
    caption: "Golden Light in Toorak",
    type: "Residential Management",
    detail: "A sanctuary of modern living, where architecture meets nature.",
  },
  {
    image: "https://media.base44.com/images/public/6a3dfd8e78a9a5ec3862578f/986fcc9fb_generated_fdb0a401.png",
    alt: "Luxury penthouse living room with panoramic city skyline views, minimal cream furnishings and polished marble",
    caption: "City Horizons",
    type: "Premium Portfolio",
    detail: "Elevated living with uninterrupted views across the skyline.",
  },
  {
    image: "https://media.base44.com/images/public/6a3dfd8e78a9a5ec3862578f/0c1440f1c_generated_3f7f24be.png",
    alt: "Luxurious spa-like bathroom with freestanding bathtub, natural stone walls and garden views",
    caption: "The Art of Detail",
    type: "Boutique Estates",
    detail: "Where every surface tells a story of craftsmanship.",
  },
];
 
export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-36 bg-[#EFEBE7]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20 md:mb-28"
        >
          <span className="font-body text-[11px] tracking-[0.3em] uppercase text-[#8C7D70]">
            The Collection
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-light text-[#1A1A1A] leading-tight">
            Properties Under
            <br />
            <em className="font-light">Our Stewardship</em>
          </h2>
          <div className="mt-6 mx-auto w-12 h-px bg-[#8C7D70]/40" />
        </motion.div>
 
        {/* Properties */}
        <div className="space-y-20 md:space-y-32">
          {properties.map((property, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={property.caption}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-16 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-3/5 overflow-hidden group">
                  <div className="overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.alt}
                      className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
 
                {/* Caption */}
                <div className={`w-full md:w-2/5 ${isEven ? "md:pl-4" : "md:pr-4"}`}>
                  <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#8C7D70] mb-3">
                    {property.type}
                  </p>
                  <h3 className="font-display text-2xl md:text-4xl font-light text-[#1A1A1A] mb-4 leading-tight">
                    {property.caption}
                  </h3>
                  <div className="w-8 h-px bg-[#8C7D70]/30 mb-5" />
                  <p className="font-body text-[15px] leading-relaxed text-[#1A1A1A]/55">
                    {property.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
 