import React from "react";
 
const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
 
export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
 
  return (
    <footer className="bg-[#6E7B48] py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Brand */}
          <div>
            <span className="font-display text-3xl font-light text-white/90 tracking-[0.05em]">
              IE
            </span>
            <p className="mt-2 font-body text-[11px] tracking-[0.2em] uppercase text-white/70">
              Ingrid Elliott Real Estate
            </p>
            <p className="mt-1 font-body text-[11px] tracking-[0.15em] uppercase text-white/60">
              Boutique Property Management
            </p>
          </div>
 
          {/* Nav */}
          <nav className="flex flex-wrap gap-8">
            {footerLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="font-body text-[11px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </nav>
 
          {/* Contact */}
          <div className="text-right">
            <a
              href="tel:0400104682"
              className="block font-body text-[13px] text-white/80 hover:text-white transition-colors"
            >
              0400 104 682
            </a>
            <a
              href="mailto:hello@ingridelliott.com.au"
              className="block font-body text-[13px] text-white/70 hover:text-white transition-colors mt-1"
            >
              hello@ingridelliott.com.au
            </a>
          </div>
        </div>
 
        {/* Divider */}
        <div className="mt-12 h-px bg-white/20" />
 
        {/* Bottom Row */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[11px] text-white/70">
            © {new Date().getFullYear()} Ingrid Elliott Real Estate. All rights reserved.
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