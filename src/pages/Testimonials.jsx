import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/layout/FadeIn";
import SectionLabel from "@/components/layout/SectionLabel";

const LIFESTYLE_IMG = "https://media.base44.com/images/public/6a4d2af4867d57de59d183f8/ade223389_generated_image.png";

const testimonials = [
  {
    quote: "Ingrid's attention to detail and genuine care for our investment has been remarkable. We finally feel like our property is in trusted hands. After years with larger agencies, the difference is night and day.",
    name: "Placeholder Name",
    role: "Property Investor",
  },
  {
    quote: "In over a decade of working alongside property managers, I've rarely encountered someone with Ingrid's depth of knowledge and commitment to communication. She sets a new standard for what property management should be.",
    name: "Placeholder Name",
    role: "Buyers Agent",
  },
  {
    quote: "The transition to Ingrid was seamless. She took the time to understand our portfolio, our expectations, and our concerns — and she's delivered on every front. Her legislative knowledge is second to none.",
    name: "Placeholder Name",
    role: "Solicitor",
  },
  {
    quote: "What stands out most is the personal service. There's no call centre, no being passed between staff. Ingrid knows our property, she knows our Renters, and she proactively communicates everything we need to know.",
    name: "Placeholder Name",
    role: "Property Investor",
  },
];

export default function Testimonials() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <SectionLabel className="mb-4 block">Client Voices</SectionLabel>
            <h1 className="font-serif text-4xl lg:text-6xl text-brand-charcoal font-light leading-tight max-w-3xl">
              What Our Clients Say
            </h1>
            <p className="mt-6 text-brand-charcoal/60 font-sans font-light text-lg max-w-xl">
              The trust of our clients is the foundation of everything we do. These words reflect the relationships we value most.
            </p>
          </FadeIn>
        </div>
      </section>

      <section>
        <FadeIn>
          <img
            src={LIFESTYLE_IMG}
            alt="Beautiful sunlit residential living room reflecting a happy home"
            className="w-full h-[40vh] lg:h-[50vh] object-cover"
          />
        </FadeIn>
      </section>

      {/* Testimonial Grid */}
      <section className="border-t border-brand-sage/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="space-y-12">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <blockquote className="bg-brand-base-alt border border-brand-border p-8 lg:p-12">
                  <p className="font-serif text-xl lg:text-2xl text-brand-charcoal font-light leading-relaxed italic">
                    "{t.quote}"
                  </p>
                  <footer className="mt-8 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#6E7B48]/20 flex items-center justify-center">
                      <span className="font-serif text-brand-sage text-sm">
                        {t.role.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-sans text-brand-charcoal/40 italic">{t.name}</p>
                      <p className="text-xs tracking-ultra-wide uppercase font-sans text-brand-sage">
                        {t.role}
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-16 text-center">
              <p className="text-sm font-sans font-light text-brand-charcoal/40 italic">
                Real testimonials are being collected and will replace these placeholders shortly.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-brand-sage/10 bg-[#6E7B48]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-12 lg:py-20 text-center">
          <FadeIn>
            <SectionLabel className="text-white mb-6 block">Join Them</SectionLabel>
            <h2 className="font-serif text-3xl text-white font-light mb-6">
              Ready to Experience the Difference?
            </h2>
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