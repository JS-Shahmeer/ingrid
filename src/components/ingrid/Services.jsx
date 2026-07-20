import React from "react";
import { motion } from "framer-motion";
import { Home, Shield, Handshake } from "lucide-react";
 
const services = [
  {
    icon: Home,
    title: "Property Management",
    subtitle: "The Foundation",
    description:
      "Meticulous care of your investment property with a personal touch that only thirty years of expertise can deliver. From renter selection to maintenance coordination, every detail is curated.",
  },
  {
    icon: Shield,
    title: "Portfolio Protection",
    subtitle: "The Assurance",
    description:
      "Strategic oversight of your property portfolio, ensuring maximum returns while preserving the integrity and value of your most significant assets. Transparent reporting, always.",
  },
  {
    icon: Handshake,
    title: "Professional Referral Liaison",
    subtitle: "The Connection",
    description:
      "Seamless coordination with accountants, solicitors, sales agents, and trusted industry professionals. A single point of contact connecting rental providers with the right property solutions.",
  },
];
 
export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-[#F7F3F0]">
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
            Our Services
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-light text-[#1A1A1A] leading-tight">
            Boutique Care,
            <br />
            <em className="font-light">Uncompromising Standards</em>
          </h2>
          <div className="mt-6 mx-auto w-12 h-px bg-[#8C7D70]/40" />
        </motion.div>
 
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group text-center md:text-left"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-none border border-[#8C7D70]/20 mb-6 group-hover:border-[#3E4A52] transition-colors duration-500">
                <service.icon
                  size={22}
                  strokeWidth={1}
                  className="text-[#8C7D70] group-hover:text-[#3E4A52] transition-colors duration-500"
                />
              </div>
 
              {/* Subtitle */}
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#8C7D70] mb-2">
                {service.subtitle}
              </p>
 
              {/* Title */}
              <h3 className="font-display text-2xl md:text-[28px] font-light text-[#1A1A1A] mb-4">
                {service.title}
              </h3>
 
              {/* Thin Rule */}
              <div className="w-8 h-px bg-[#8C7D70]/30 mb-5 mx-auto md:mx-0" />
 
              {/* Description */}
              <p className="font-body text-[15px] leading-relaxed text-[#1A1A1A]/60 max-w-sm mx-auto md:mx-0">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}