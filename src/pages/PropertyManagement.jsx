import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/layout/FadeIn";
import SectionLabel from "@/components/layout/SectionLabel";

const DETAIL_IMG = "https://media.base44.com/images/public/6a4d2af4867d57de59d183f8/66f7e6ddb_generated_image.png";
const LIVING_IMG = "https://media.base44.com/images/public/6a4d2af4867d57de59d183f8/0f6544f30_generated_image.png";

const services = [
  {
    title: "Residential Property Management",
    description:
      "Comprehensive, day-to-day management of your investment property — handled with the same care and diligence as if it were my own. From tenant communication to owner reporting, every detail is attended to personally.",
  },
  {
    title: "Routine Inspections",
    description:
      "Regular, thorough inspections with detailed photographic reports. These are not formalities — they are opportunities to identify potential issues early, maintain your property's condition, and ensure tenant compliance.",
  },
  {
    title: "Maintenance Coordination",
    description:
      "Access to a trusted network of reliable, qualified contractors. Maintenance requests are assessed promptly, communicated clearly, and managed efficiently — minimising disruption and protecting your property's value.",
  },
  {
    title: "Rent Collection & Arrears Management",
    description:
      "Systematic rent collection with proactive arrears follow-up. You should never have to chase payments. Clear processes and timely communication ensure your cash flow remains consistent.",
  },
  {
    title: "VCAT / RDRV Representation",
    description:
      "When disputes arise, you need an experienced advocate. Ingrid provides knowledgeable representation at the Victorian Civil and Administrative Tribunal and the Residential Disputes Resolution Victoria, drawing on deep legislative expertise.",
  },
  {
    title: "End of Lease Management",
    description:
      "From issuing notices and coordinating final inspections to managing bond claims and preparing for re-leasing — the transition between tenancies is handled seamlessly, minimising vacancy periods and protecting your interests.",
  },
];

export default function PropertyManagement() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <SectionLabel className="mb-4 block">Our Core Service</SectionLabel>
            <h1 className="font-serif text-4xl lg:text-6xl text-brand-charcoal font-light leading-tight max-w-3xl">
              Property Management
            </h1>
            <p className="mt-6 text-brand-charcoal/60 font-sans font-light text-lg max-w-xl">
              Proactive, transparent, and deeply personal management of your most significant investment.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Image Banner */}
      <section>
        <FadeIn>
          <img
            src={LIVING_IMG}
            alt="Elegant Melbourne living room interior with natural light"
            className="w-full h-[40vh] lg:h-[50vh] object-cover"
          />
        </FadeIn>
      </section>

      {/* Intro */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="font-serif text-2xl text-brand-charcoal font-light leading-relaxed">
              Property management is not a commodity. It is a practice that demands expertise, consistency, and genuine care for the asset you have entrusted.
            </p>
            <p className="mt-6 text-sm font-sans font-light text-brand-charcoal/60 leading-relaxed">
              Ingrid Elliott Real Estate provides comprehensive residential property management across Melbourne's northern suburbs and surrounds. Every aspect of the service is delivered personally by an experienced property professional — not delegated to junior staff or lost in a busy team.
            </p>
            <p className="mt-4 text-sm font-sans font-light text-brand-charcoal/60 leading-relaxed">
              The result is a management experience defined by proactive communication, legislative expertise, attention to detail, and a genuine reduction in the stress and complexity of property ownership.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="border-t border-brand-sage/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <FadeIn>
            <SectionLabel className="mb-4 block">What's Included</SectionLabel>
            <h2 className="font-serif text-3xl lg:text-4xl text-brand-charcoal font-light mb-16">
              A Complete Management Service
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={(i % 2) * 0.1}>
                <div>
                  <div className="w-8 h-[0.5px] bg-brand-sage mb-6" />
                  <h3 className="font-serif text-xl text-brand-charcoal mb-4">{service.title}</h3>
                  <p className="text-sm font-sans font-light text-brand-charcoal/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Image + Commitment */}
      <section className="border-t border-brand-sage/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <img
                src={DETAIL_IMG}
                alt="Architectural detail — premium brass hardware on sage green door"
                className="w-full aspect-4/3 object-cover"
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <SectionLabel className="mb-4 block">The Commitment</SectionLabel>
              <h2 className="font-serif text-3xl text-brand-charcoal font-light mb-6">
                Reducing Complexity,<br />Maximising Returns
              </h2>
              <p className="text-sm font-sans font-light text-brand-charcoal/60 leading-relaxed mb-4">
                The goal is simple: to make property ownership easier. To remove the friction, the uncertainty, and the sense that your investment is not receiving the attention it warrants.
              </p>
              <p className="text-sm font-sans font-light text-brand-charcoal/60 leading-relaxed">
                Through proactive communication, a deep understanding of tenancy legislation, and a trusted network of contractors and advisors, Ingrid ensures your property performs to its full potential — while you enjoy the confidence of knowing it is in expert hands.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-brand-sage/10 bg-[#2F2F2F]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-12 lg:py-20 text-center">
          <FadeIn>
            <SectionLabel className="text-brand-sage-light mb-6 block">Get Started</SectionLabel>
            <h2 className="font-serif text-3xl text-white font-light mb-6">
              Enquire About Managing Your Property
            </h2>
            <p className="text-sm font-sans font-light text-white/60 leading-relaxed mb-10 max-w-lg mx-auto">
              Whether you are looking to appoint a new property manager or simply wish to understand the difference boutique management can make — Ingrid is here to help.
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