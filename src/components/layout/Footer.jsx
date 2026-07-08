import React from "react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Property Management", path: "/property-management" },
  { label: "Leasing Services", path: "/leasing-services" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Why Choose Us", path: "/why-choose-us" },
  { label: "Contact", path: "/contact" },
  { label: "Privacy", path: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2F2F2F] py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Brand */}
          <div>
            <span className="font-display text-3xl font-light text-white/90 tracking-[0.05em]">
              IE
            </span>
            <p className="mt-2 font-body text-[11px] tracking-[0.2em] uppercase text-white/30">
              Ingrid Ellis Real Estate
            </p>
            <p className="mt-1 font-body text-[11px] tracking-[0.15em] uppercase text-white/20">
              Boutique Property Management
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-8">
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
          <div className="text-right">
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
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[11px] text-white/20">
            © {new Date().getFullYear()} Ingrid Ellis Real Estate. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[11px] tracking-[0.15em] uppercase text-white/20 hover:text-white/50 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[11px] tracking-[0.15em] uppercase text-white/20 hover:text-white/50 transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[11px] tracking-[0.15em] uppercase text-white/20 hover:text-white/50 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
