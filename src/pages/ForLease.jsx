import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/layout/FadeIn";
import SectionLabel from "@/components/layout/SectionLabel";

export default function ForLease() {
  return (
    <div>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <SectionLabel className="mb-4 block">For Lease</SectionLabel>
            <h1 className="font-serif text-4xl lg:text-6xl text-brand-charcoal font-light leading-tight max-w-3xl">
              Browse Available Rentals
            </h1>
            <p className="mt-6 text-brand-charcoal/60 font-sans font-light text-lg max-w-2xl">
              Explore current rental opportunities and find the right home with Ingrid Elliott Real Estate.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-brand-sage/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24 lg:py-32 text-center">
          <FadeIn>
            <p className="font-serif text-2xl text-brand-charcoal font-light leading-relaxed">
              Prospective renters can search Ingrid’s current listings through realestate.com.au and get in touch for viewing enquiries.
            </p>
            <a
              href="https://www.realestate.com.au/rent"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 text-xs tracking-ultra-wide uppercase font-sans text-white bg-[#6E7B48] px-8 py-3 hover:bg-[#8A9A5B] transition-colors duration-300"
            >
              View Listings
            </a>
            <p className="mt-8 text-sm font-sans font-light text-brand-charcoal/60 leading-relaxed">
              If you would like assistance with a rental enquiry, please contact Ingrid directly and she will be happy to help.
            </p>
            <Link to="/contact" className="mt-6 inline-block text-xs tracking-ultra-wide uppercase font-sans text-brand-charcoal border-b border-brand-charcoal/40 pb-1 hover:border-brand-charcoal transition-colors duration-300">
              Contact Ingrid
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
