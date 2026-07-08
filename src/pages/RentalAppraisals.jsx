import React, { useState } from "react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/layout/FadeIn";
import SectionLabel from "@/components/layout/SectionLabel";

const PROPERTY_IMG = "https://media.base44.com/images/public/6a4d2af4867d57de59d183f8/5283154d5_generated_image.png";
const DISCUSSION_IMG = "https://media.base44.com/images/public/6a4d2af4867d57de59d183f8/018cc918a_generated_image.png";

export default function RentalAppraisals() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <SectionLabel className="mb-4 block">Services</SectionLabel>
            <h1 className="font-serif text-4xl lg:text-6xl text-brand-charcoal font-light leading-tight max-w-3xl">
              Rental Appraisals
            </h1>
            <p className="mt-6 text-brand-charcoal/60 font-sans font-light text-lg max-w-xl">
              A considered assessment of your property's rental potential in today's market — informed by local expertise and genuine market knowledge.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Image */}
      <section>
        <FadeIn>
          <img
            src={PROPERTY_IMG}
            alt="Modern Melbourne townhouse with warm golden hour light"
            className="w-full h-[40vh] lg:h-[50vh] object-cover"
          />
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <FadeIn>
              <h2 className="font-serif text-3xl text-brand-charcoal font-light mb-8">
                Understanding Your<br />Investment's Potential
              </h2>
              <div className="space-y-5 text-sm font-sans font-light text-brand-charcoal/60 leading-relaxed">
                <p>
                  Whether you're considering leasing your property for the first time, reviewing your current rental return, or exploring an investment purchase — understanding the true rental value of a property is essential to making informed decisions.
                </p>
                <p>
                  Ingrid provides complimentary rental appraisals for investment properties across Melbourne's northern suburbs and surrounds. Each appraisal draws on current market data, local knowledge, and decades of experience to give you a clear, honest picture of your property's rental potential.
                </p>
                <p>
                  This is not a high-pressure sales pitch. It is a straightforward, professional assessment — and the beginning of a conversation about how your property can work harder for you.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <img
                src={DISCUSSION_IMG}
                alt="Property consultant reviewing appraisal report with an investor"
                className="w-full aspect-4/3 object-cover mb-8"
              />
              <div className="bg-white p-8 lg:p-12 border border-brand-border">
                <SectionLabel className="mb-6 block">What to Expect</SectionLabel>
                <div className="space-y-6">
                  {[
                    { step: "01", text: "Share your property details via the enquiry form or a quick phone call." },
                    { step: "02", text: "Ingrid will review comparable rentals and current market conditions in your area." },
                    { step: "03", text: "You'll receive a clear rental assessment with an honest, data-informed rental range." },
                    { step: "04", text: "If you'd like to proceed, we'll discuss leasing strategy and next steps — at your pace." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <span className="font-serif text-brand-sage text-lg">{item.step}</span>
                      <p className="text-sm font-sans font-light text-brand-charcoal/60 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-brand-sage/10 bg-[#2F2F2F]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-24 lg:py-28 text-center">
          <FadeIn>
            <SectionLabel className="text-brand-sage-light mb-6 block">Get Started</SectionLabel>
            <h2 className="font-serif text-3xl text-white font-light mb-6">
              Request a Rental Appraisal
            </h2>
            <p className="text-sm font-sans font-light text-white/60 leading-relaxed mb-10 max-w-lg mx-auto">
              Share your property details and receive a considered, obligation-free rental assessment from an experienced local property professional.
            </p>
            <Link
              to="/contact?enquiry=rental-appraisal"
              className="inline-block text-xs tracking-ultra-wide uppercase font-sans text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-300"
            >
              Request Now
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}