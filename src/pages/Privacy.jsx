import React from "react";
import FadeIn from "@/components/layout/FadeIn";
import SectionLabel from "@/components/layout/SectionLabel";

export default function Privacy() {
  return (
    <div>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <SectionLabel className="mb-4 block">Legal</SectionLabel>
            <h1 className="font-serif text-4xl lg:text-5xl text-brand-charcoal font-light mb-12">
              Privacy Policy
            </h1>
            <div className="space-y-6 text-sm font-sans font-light text-brand-charcoal/70 leading-relaxed">
              <p>
                Ingrid Elliott Real Estate (Charliebear Pty Ltd) is committed to protecting your personal information in accordance with the Australian Privacy Principles contained in the Privacy Act 1988 (Cth).
              </p>
              <p>
                We collect personal information such as your name, contact details, and property address when you enquire about our services, request a rental appraisal, or engage us to manage your property. This information is used solely for the purpose of providing our property management services and communicating with you.
              </p>
              <p>
                We do not sell, trade, or share your personal information with third parties except where required by law or where necessary to deliver our services (for example, sharing relevant details with contractors undertaking maintenance on your property).
              </p>
              <p>
                You may request access to, or correction of, your personal information at any time by contacting us at hello@ingridelliott.com.au.
              </p>
              <p>
                This policy may be updated from time to time. The most current version will always be available on this page.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}