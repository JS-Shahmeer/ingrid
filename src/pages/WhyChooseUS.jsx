import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/layout/FadeIn";
import SectionLabel from "@/components/layout/SectionLabel";

const DETAIL_IMG = "https://media.base44.com/images/public/6a4d2af4867d57de59d183f8/48db5c291_generated_image.png";

const problems = [
  {
    problem: "Poor communication from your property manager",
    solution: "Proactive, personal communication",
    description: "You will always know what is happening with your property. Ingrid provides regular updates, responds promptly, and never leaves you guessing.",
  },
  {
    problem: "High staff turnover at your agency",
    solution: "One dedicated point of contact",
    description: "There is no team to be lost in, no rotating junior staff. You deal with one experienced professional who knows your property intimately.",
  },
  {
    problem: "Extended vacancy periods",
    solution: "Premium tenant placement and faster leasing",
    description: "Strategic advertising, professional presentation, and a quality-driven approach to tenant selection — designed to minimise vacancy and maximise return.",
  },
  {
    problem: "Maintenance headaches and delays",
    solution: "A trusted contractor network",
    description: "Maintenance is coordinated promptly through a vetted network of reliable, qualified tradespeople. Issues are resolved, not ignored.",
  },
  {
    problem: "Difficult or unsuitable tenants",
    solution: "Rigorous tenant selection processes",
    description: "Comprehensive screening including employment, rental history, reference checks, and financial capacity review — every time.",
  },
  {
    problem: "Uncertainty about tenancy legislation",
    solution: "Expert legislative knowledge",
    description: "Thirty years of industry experience and a deep understanding of Victoria's tenancy laws ensure your rights are always protected.",
  },
  {
    problem: "A lack of trust and transparency",
    solution: "Transparency and long-term relationships",
    description: "No surprises, no hidden processes. Every decision is explained, every action documented, every outcome shared openly.",
  },
];

export default function WhyChooseUs() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <SectionLabel className="mb-4 block">The Difference</SectionLabel>
            <h1 className="font-serif text-4xl lg:text-6xl text-brand-charcoal font-light leading-tight max-w-3xl">
              Why Choose<br />Ingrid Elliott
            </h1>
            <p className="mt-6 text-brand-charcoal/60 font-sans font-light text-lg max-w-xl">
              Specialist property management. One experienced professional. Complete focus on your investment.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Core Differentiators */}
      <section className="border-t border-brand-sage/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div className="lg:sticky lg:top-32">
                <img
                  src={DETAIL_IMG}
                  alt="Architectural detail — premium interior hardware"
                  className="w-full aspect-4/3 object-cover mb-8"
                />
                <p className="font-serif text-xl text-brand-charcoal font-light leading-relaxed">
                  This is not a large agency with hundreds of properties and interchangeable staff. This is a boutique practice built on a singular commitment: your property receives the personal attention it deserves.
                </p>
              </div>
            </FadeIn>

            <div>
              <FadeIn>
                <SectionLabel className="mb-8 block">Common Concerns, Considered Solutions</SectionLabel>
              </FadeIn>
              <div className="space-y-12">
                {problems.map((item, i) => (
                  <FadeIn key={i} delay={(i % 3) * 0.05}>
                    <div className="bg-brand-base-alt p-6 lg:p-8 border border-brand-border hover:bg-white transition-colors duration-300">
                      <p className="text-xs tracking-ultra-wide uppercase font-sans text-brand-charcoal/40 mb-2">
                        The concern
                      </p>
                      <p className="font-serif text-lg text-brand-charcoal mb-4">
                        {item.problem}
                      </p>
                      <div className="w-8 h-[0.5px] bg-brand-sage/40 mb-4" />
                      <p className="text-xs tracking-ultra-wide uppercase font-sans text-brand-sage mb-2">
                        The resolution
                      </p>
                      <p className="font-serif text-base text-brand-charcoal mb-3">
                        {item.solution}
                      </p>
                      <p className="text-sm font-sans font-light text-brand-charcoal/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-brand-sage/10 bg-[#2F2F2F]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-24 lg:py-28 text-center">
          <FadeIn>
            <SectionLabel className="text-brand-sage-light mb-6 block">Ready?</SectionLabel>
            <h2 className="font-serif text-3xl text-white font-light mb-6">
              Experience the Difference
            </h2>
            <p className="text-sm font-sans font-light text-white/60 leading-relaxed mb-10 max-w-lg mx-auto">
              Discover what it means to work with a property manager who is genuinely invested in the success of your property.
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