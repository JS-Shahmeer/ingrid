import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
 
const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
 
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
 
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#F7F3F0]/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3 group">
              <span className={`font-display text-2xl md:text-3xl font-light tracking-wide transition-colors duration-500 ${
                scrolled ? "text-[#1A1A1A]" : "text-white"
              }`}>
                IE
              </span>
              <span className={`hidden md:block h-8 w-px transition-colors duration-500 ${
                scrolled ? "bg-[#8C7D70]/40" : "bg-white/30"
              }`} />
              <span className={`hidden md:block font-body text-[11px] tracking-[0.2em] uppercase transition-colors duration-500 ${
                scrolled ? "text-[#8C7D70]" : "text-white/70"
              }`}>
                Ingrid Elliott
              </span>
            </button>
 
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`font-body text-[12px] tracking-[0.15em] uppercase transition-colors duration-300 hover:opacity-100 ${
                    scrolled
                      ? "text-[#1A1A1A]/70 hover:text-[#1A1A1A]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contact")}
                className={`font-body text-[11px] tracking-[0.15em] uppercase px-6 py-2.5 border transition-all duration-300 ${
                  scrolled
                    ? "border-[#3E4A52] text-[#3E4A52] hover:bg-[#2F2F2F] hover:text-white"
                    : "border-white/50 text-white hover:bg-white hover:text-[#1A1A1A]"
                }`}
              >
                Book Consultation
              </button>
            </div>
 
            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 transition-colors ${scrolled ? "text-[#1A1A1A]" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>
 
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#F7F3F0] flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="font-display text-3xl font-light text-[#1A1A1A] hover:text-[#8C7D70] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="mt-4 font-body text-[12px] tracking-[0.15em] uppercase px-8 py-3 border border-[#3E4A52] text-[#3E4A52] hover:bg-[#2F2F2F] hover:text-white transition-all"
            >
              Book Consultation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
 