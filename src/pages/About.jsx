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
                    Over the past thirty years, Ingrid Elliott has built an intimate understanding of every dimension of the real estate industry — from residential sales and property marketing to agency leadership and business ownership.
                  </p>
                  <p>
                    For fifteen of those years, Ingrid co-owned and directed a successful real estate agency on the sales side of the industry. That experience gave her a rare, comprehensive perspective on how property is valued, positioned, and protected over the long term.
                  </p>
                  <p>
                    After selling that business, Ingrid made a deliberate choice: to build something entirely focused on the area of real estate she is most passionate about — property management.
                  </p>
                  <p>
                    Ingrid Elliott Real Estate was established with a clear purpose: to provide rental providers with the kind of proactive, transparent, and deeply personal service that is all too rare in the industry.
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
                "Every property has a story. My role is to protect and elevate that story — with the care, expertise, and attention it deserves."
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