import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/layout/FadeIn";
import SectionLabel from "@/components/layout/SectionLabel";

const APT_IMG = "https://media.base44.com/images/public/6a4d2af4867d57de59d183f8/a2c58cc66_generated_image.png";
const WELCOME_IMG = "https://media.base44.com/images/public/6a4d2af4867d57de59d183f8/f7ad396f9_generated_image.png";

const pillars = [
  {
    title: "Strategic Property Advertising",
    description:
      "Your property is presented at its best across premium platforms and carefully targeted channels. Professional photography, compelling descriptions, and strategic timing ensure maximum market exposure.",
  },
  {
    title: "Private & Open Inspections",
    description:
      "Inspections are conducted with professionalism and care — presenting your property as a home, not a transaction. Every prospective tenant is met, assessed, and responded to personally.",
  },
  {
    title: "Premium Tenant Selection",
    description:
      "Rigorous application assessment including employment verification, rental history checks, reference validation, and financial capacity review. The right tenant protects your investment for years to come.",
  },
  {
    title: "Lease Preparation & Execution",
    description:
      "Comprehensive lease documentation prepared in full compliance with the Residential Tenancies Act 1997. Every clause is considered, every detail reviewed — protecting both parties from day one.",
  },
];

export default function LeasingServices() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <SectionLabel className="mb-4 block">Services</SectionLabel>
            <h1 className="font-serif text-4xl lg:text-6xl text-brand-charcoal font-light leading-tight max-w-3xl">
              Leasing & Tenant Placement
            </h1>
            <p className="mt-6 text-brand-charcoal/60 font-sans font-light text-lg max-w-xl">
              Protecting your investment from the very first day — through considered tenant selection and meticulous lease preparation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Image */}
      <section>
        <FadeIn>
          <img
            src={APT_IMG}
            alt="Premium Melbourne apartment building with contemporary architecture"
            className="w-full h-[40vh] lg:h-[50vh] object-cover"
          />
        </FadeIn>
      </section>

      {/* Intro */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="font-serif text-2xl text-brand-charcoal font-light leading-relaxed">
              The tenant you select today shapes the experience of your investment for the years ahead. It is one of the most consequential decisions in property ownership — and it deserves expert attention.
            </p>
            <p className="mt-6 text-sm font-sans font-light text-brand-charcoal/60 leading-relaxed">
              Ingrid Elliott Real Estate approaches leasing as a considered, quality-driven process — not a rush to fill a vacancy. From the way your property is presented to the thoroughness of each application assessment, every step is designed to secure the right tenant and protect your investment from day one.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-brand-sage/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <FadeIn>
            <SectionLabel className="mb-4 block">The Process</SectionLabel>
            <h2 className="font-serif text-3xl lg:text-4xl text-brand-charcoal font-light mb-16">
              Quality Over Speed
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={(i % 2) * 0.1}>
                <div>
                  <div className="w-8 h-[0.5px] bg-brand-sage mb-6" />
                  <h3 className="font-serif text-xl text-brand-charcoal mb-4">{pillar.title}</h3>
                  <p className="text-sm font-sans font-light text-brand-charcoal/60 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <img
              src={WELCOME_IMG}
              alt="Welcoming modern rental home interior"
              className="w-full aspect-16/7 object-cover mt-16"
            />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-brand-sage/10 bg-[#2F2F2F]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-24 lg:py-28 text-center">
          <FadeIn>
            <SectionLabel className="text-brand-sage-light mb-6 block">Get Started</SectionLabel>
            <h2 className="font-serif text-3xl text-white font-light mb-6">
              Get Your Property Leased
            </h2>
            <p className="text-sm font-sans font-light text-white/60 leading-relaxed mb-10 max-w-lg mx-auto">
              Enquire about our leasing service and discover how quality tenant selection can make all the difference to your investment experience.
            </p>
            <Link
              to="/contact"
              className="inline-block text-xs tracking-ultra-wide uppercase font-sans text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-300"
            >
              Begin the Conversation
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}