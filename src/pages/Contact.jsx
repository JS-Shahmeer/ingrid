import React, { useState } from "react";
import FadeIn from "@/components/layout/FadeIn";
import SectionLabel from "@/components/layout/SectionLabel";
import { useToast } from "@/components/ui/use-toast";

const SUBURBS = "Bundoora, Greensborough, Montmorency, Eltham, Eltham North, Diamond Creek, Briar Hill, Watsonia, Watsonia North, Macleod, Rosanna, Heidelberg, Ivanhoe, Reservoir, Thomastown, Mill Park, South Morang, Mernda, Doreen, Whittlesea, Epping, Donnybrook, Kalkallo, Craigieburn, Eden Park, Lalor, Wollert, Plenty, and surrounding suburbs.";
const OFFICE_IMG = "https://media.base44.com/images/public/6a4d2af4867d57de59d183f8/83bfe239d_generated_image.png";
const STREET_IMG = "https://media.base44.com/images/public/6a4d2af4867d57de59d183f8/ad644b6d4_generated_image.png";

export default function Contact() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const urlParams = new URLSearchParams(window.location.search);
  const enquiryType = urlParams.get("enquiry");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setSubmitting(false);
    toast({ title: "Message sent", description: "Ingrid will be in touch shortly." });
  };

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <SectionLabel className="mb-4 block">Get in Touch</SectionLabel>
            <h1 className="font-serif text-4xl lg:text-6xl text-brand-charcoal font-light leading-tight max-w-3xl">
              Begin the Conversation
            </h1>
            <p className="mt-6 text-brand-charcoal/60 font-sans font-light text-lg max-w-xl">
              Whether you're seeking a trusted partner for your property portfolio or simply wish to explore what boutique management looks like — Ingrid welcomes the conversation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section>
        <FadeIn>
          <img
            src={STREET_IMG}
            alt="Leafy Melbourne streetscape in the northern suburbs"
            className="w-full h-[35vh] lg:h-[45vh] object-cover"
          />
        </FadeIn>
      </section>

      {/* Form + Details */}
      <section className="border-t border-brand-sage/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <FadeIn>
              {submitted ? (
                <div className="bg-brand-blush/30 border border-brand-sage/10 p-8 lg:p-12 text-center">
                  <h2 className="font-serif text-2xl text-brand-charcoal font-light mb-4">
                    Thank You
                  </h2>
                  <p className="text-sm font-sans font-light text-brand-charcoal/60 leading-relaxed">
                    Your message has been received. Ingrid will be in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {enquiryType === "rental-appraisal" && (
                    <div className="bg-brand-sage/5 border border-brand-sage/10 px-4 py-3 mb-2">
                      <p className="text-xs tracking-ultra-wide uppercase font-sans text-brand-sage">
                        Rental Appraisal Enquiry
                      </p>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs tracking-ultra-wide uppercase font-sans text-brand-charcoal/50 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange("name")}
                      className="w-full bg-transparent border-b border-brand-charcoal/20 py-3 text-sm font-sans font-light text-brand-charcoal focus:border-brand-sage focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs tracking-ultra-wide uppercase font-sans text-brand-charcoal/50 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange("email")}
                      className="w-full bg-transparent border-b border-brand-charcoal/20 py-3 text-sm font-sans font-light text-brand-charcoal focus:border-brand-sage focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs tracking-ultra-wide uppercase font-sans text-brand-charcoal/50 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={handleChange("phone")}
                      className="w-full bg-transparent border-b border-brand-charcoal/20 py-3 text-sm font-sans font-light text-brand-charcoal focus:border-brand-sage focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs tracking-ultra-wide uppercase font-sans text-brand-charcoal/50 mb-2">
                      Property Address
                    </label>
                    <input
                      type="text"
                      value={form.address}
                      onChange={handleChange("address")}
                      className="w-full bg-transparent border-b border-brand-charcoal/20 py-3 text-sm font-sans font-light text-brand-charcoal focus:border-brand-sage focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs tracking-ultra-wide uppercase font-sans text-brand-charcoal/50 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={handleChange("message")}
                      className="w-full bg-transparent border-b border-brand-charcoal/20 py-3 text-sm font-sans font-light text-brand-charcoal focus:border-brand-sage focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-4 text-xs tracking-ultra-wide uppercase font-sans text-white bg-brand-sage px-8 py-3 hover:bg-brand-sage-dark transition-colors duration-300 disabled:opacity-50"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </FadeIn>

            {/* Contact Details */}
            <FadeIn delay={0.15}>
              <div className="space-y-10">
                <div>
                  <SectionLabel className="mb-4 block">Direct Contact</SectionLabel>
                  <div className="space-y-4 text-sm font-sans font-light text-brand-charcoal/70">
                    <p>
                      <span className="text-xs tracking-ultra-wide uppercase text-brand-charcoal/40 block mb-1">Mobile</span>
                      <a href="tel:0400104682" className="hover:text-brand-sage transition-colors">
                        0400 104 682
                      </a>
                    </p>
                    <p>
                      <span className="text-xs tracking-ultra-wide uppercase text-brand-charcoal/40 block mb-1">Email</span>
                      <a href="mailto:hello@ingridelliott.com.au" className="hover:text-brand-sage transition-colors">
                        hello@ingridelliott.com.au
                      </a>
                    </p>
                    <p>
                      <span className="text-xs tracking-ultra-wide uppercase text-brand-charcoal/40 block mb-1">Address</span>
                      2/10 Willis Street<br />Melbourne 3088, Victoria
                    </p>
                    <p>
                      <span className="text-xs tracking-ultra-wide uppercase text-brand-charcoal/40 block mb-1">Hours</span>
                      Monday – Friday<br />9:00am – 5:00pm
                    </p>
                  </div>
                </div>

                <div className="w-full h-[0.5px] bg-brand-sage/20" />

                <div>
                  <SectionLabel className="mb-4 block">Ingrid Elliott, Director</SectionLabel>
                  <p className="text-sm font-sans font-light text-brand-charcoal/60 leading-relaxed">
                    Ingrid personally handles all enquiries and consultations. Whether you prefer a phone call, email, or an in-person meeting — she looks forward to hearing from you.
                  </p>
                </div>

                {/* Office Image + Map Placeholder */}
                <img
                  src={OFFICE_IMG}
                  alt="Modern office interior for consultations"
                  className="w-full aspect-4/3 object-cover"
                />
                {/* <div className="bg-brand-base-alt border border-brand-border h-64 flex items-center justify-center">
                  <p className="text-xs tracking-ultra-wide uppercase font-sans text-brand-charcoal/30">
                    Map — Coming Soon
                  </p>
                </div> */}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Suburbs */}
      <section className="border-t border-brand-sage/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-20 lg:py-24 text-center">
          <FadeIn>
            <SectionLabel className="mb-6 block">Suburbs We Service</SectionLabel>
            <p className="text-sm font-sans font-light text-brand-charcoal/50 leading-relaxed max-w-3xl mx-auto">
              {SUBURBS}
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}