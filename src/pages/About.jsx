import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/layout/FadeIn";
import SectionLabel from "@/components/layout/SectionLabel";

const PORTRAIT_IMG = "https://media.base44.com/images/public/6a4d2af4867d57de59d183f8/c5e0c0b35_generated_image.png";
const OFFICE_IMG = "https://media.base44.com/images/public/6a4d2af4867d57de59d183f8/83bfe239d_generated_image.png";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <SectionLabel className="mb-4 block">About</SectionLabel>
            <h1 className="font-serif text-4xl lg:text-6xl text-brand-charcoal font-light leading-tight max-w-2xl">
              The Story Behind<br />the Practice
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Portrait + Intro */}
      <section className="border-t border-brand-sage/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <FadeIn>
              <img
                src={PORTRAIT_IMG}
                alt="Ingrid Elliott — property management professional with thirty years of experience"
                className="w-full max-w-lg aspect-3/4 object-cover"
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="lg:pt-8">
                <h2 className="font-serif text-3xl text-brand-charcoal font-light mb-8">
                  Ingrid Elliott
                </h2>
                <div className="space-y-5 text-sm font-sans font-light text-brand-charcoal/70 leading-relaxed">
                  <p>
                    For more than thirty years, Ingrid Elliott has been dedicated to helping property owners protect, maintain, and maximise the value of their investment properties. Throughout her career, she has developed a deep understanding of what it takes to successfully manage residential homes while building lasting relationships based on trust, communication, and genuine care.
                  </p>
                  <p>
                    After many years owning and leading a successful real estate business, Ingrid chose to focus exclusively on the area she is most passionate about — property management. Her belief is simple: every investment property deserves personalised attention, proactive management, and a property manager who cares for it as if it were their own.
                  </p>
                  <p>
                    Ingrid Elliott Real Estate was established with a clear purpose: to provide rental providers with a boutique property management service that is transparent, responsive, and genuinely invested in protecting both your property and your peace of mind. By limiting the number of properties she manages, Ingrid is able to deliver the level of care, communication, and attention to detail that larger agencies often cannot.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="bg-brand-base-alt border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24 lg:py-32 text-center">
          <FadeIn>
            <blockquote>
              <p className="font-serif text-2xl lg:text-3xl text-brand-charcoal font-light leading-relaxed italic">
                "Every property deserves exceptional care. My role is to protect your investment with the expertise, attention, and commitment it deserves."
              </p>
              <footer className="mt-8">
                <span className="text-xs tracking-ultra-wide uppercase font-sans text-brand-sage">
                  — Ingrid Elliott, Director
                </span>
              </footer>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-brand-sage/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn>
              <SectionLabel className="mb-4 block">The Philosophy</SectionLabel>
              <h2 className="font-serif text-3xl text-brand-charcoal font-light mb-8">
                Why Property Management<br />Deserves More
              </h2>
              <div className="space-y-5 text-sm font-sans font-light text-brand-charcoal/70 leading-relaxed">
                <p>
                  Too often in the real estate industry, property management is treated as a secondary concern — an afterthought behind sales, staffed by junior employees and managed with a transactional mindset.
                </p>
                <p>
                  Ingrid believes the opposite. Your investment property is one of your most significant financial assets. It deserves the same level of expertise, communication, and personal investment that you would expect from any trusted professional advisor.
                </p>
                <p>
                  That conviction is the foundation of everything Ingrid Elliott Real Estate does: specialist focus, experienced oversight, proactive management, and genuine care for every property and every client.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <img
                src={OFFICE_IMG}
                alt="Professional workspace with natural light and architectural details"
                className="w-full aspect-4/3 object-cover"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-brand-sage/10 bg-[#2F2F2F]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-24 lg:py-28 text-center">
          <FadeIn>
            <SectionLabel className="text-brand-sage-light mb-6 block">Let's Connect</SectionLabel>
            <h2 className="font-serif text-3xl text-white font-light mb-6">
              Request a Private Consultation
            </h2>
            <p className="text-sm font-sans font-light text-white/60 leading-relaxed mb-10 max-w-lg mx-auto">
              Discover how boutique property management can transform the way you experience property ownership.
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