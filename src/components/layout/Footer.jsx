import React from "react";
import { Link } from "react-router-dom";
import logoLight from "@/assets/images/logo-light.png";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Property Management", path: "/property-management" },
  { label: "Leasing Services", path: "/leasing-services" },
  { label: "Rental Appraisals", path: "/rental-appraisals" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Why Choose Us", path: "/why-choose-us" },
  { label: "Contact", path: "/contact" },
  { label: "Privacy", path: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2F2F2F] py-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-4">
            <img
              src={logoLight}
              alt="Ingrid Elliott Real Estate"
              className="h-12 md:h-16 w-auto object-contain md:-mt-2"
            />
            {/* <p className="mt-2 font-body text-[11px] tracking-[0.2em] uppercase text-white/30">
              Ingrid Elliott Real Estate
            </p>
            <p className="mt-1 font-body text-[11px] tracking-[0.15em] uppercase text-white/40">
              Boutique Property Management
            </p> */}
          </Link>

          {/* Nav */}
          <nav className="flex flex-wrap gap-8 md:justify-center">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-body text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="md:text-right">
            <a
              href="tel:0400104682"
              className="block font-body text-[13px] text-white/50 hover:text-white transition-colors"
            >
              0400 104 682
            </a>
            <a
              href="mailto:ingrid@ingridelliot.com.au"
              className="block font-body text-[13px] text-white/50 hover:text-white transition-colors mt-1"
            >
              ingrid@ingridelliot.com.au
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px bg-white/10" />

        {/* Bottom Row */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="font-body text-[11px] text-white/40">
            © {new Date().getFullYear()} Ingrid Elliott Real Estate. All rights reserved.
          </p>
          {/* <div className="flex gap-6">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white/50 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white/50 transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white/50 transition-colors"
            >
              LinkedIn
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
