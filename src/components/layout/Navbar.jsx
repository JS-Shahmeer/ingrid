import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoDark from "@/assets/images/logo-dark.png";
import logoLight from "@/assets/images/logo-light.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", children: [
    { label: "Property Management", path: "/property-management" },
    { label: "Leasing Services", path: "/leasing-services" },
    { label: "Rental Appraisals", path: "/rental-appraisals" },
  ]},
  { label: "Testimonials", path: "/testimonials" },
  { label: "Why Choose Us", path: "/why-choose-us" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [scrolled, setScrolled] = useState(!isHomePage);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setScrolled(!isHomePage);
  }, [isHomePage]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60 || !isHomePage);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#F5F5F2]/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={scrolled ? logoDark : logoLight}
                alt="Ingrid Elliott Real Estate"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  {link.children ? (
                    <>
                      <button
                        className={`font-body text-[12px] tracking-[0.15em] uppercase transition-colors duration-300 flex items-center gap-1 ${                    
                          scrolled
                            ? "text-[#2F2F2F]/70 hover:text-[#2F2F2F]"
                            : "text-white/70 hover:text-white"
                        }`}
                      >
                        {link.label}
                        <X size={12} className="rotate-45" />
                      </button>
                      <div className="absolute left-0 pt-2 hidden group-hover:flex flex-col gap-1 bg-white shadow-lg rounded">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="px-4 py-2 text-[12px] tracking-[0.15em] uppercase text-[#2F2F2F]/70 hover:text-[#2F2F2F] hover:bg-[#F5F5F2] transition-colors whitespace-nowrap"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`font-body text-[12px] tracking-[0.15em] uppercase transition-colors duration-300 hover:opacity-100 ${                    
                        scrolled
                          ? "text-[#2F2F2F]/70 hover:text-[#2F2F2F]"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className={`font-body text-[11px] tracking-[0.15em] uppercase px-6 py-2.5 border transition-all duration-300 ${
                  scrolled
                    ? "border-[#6E7B48] text-[#6E7B48] hover:bg-[#6E7B48] hover:text-white"
                    : "border-white/50 text-white hover:bg-white hover:text-[#2F2F2F]"
                }`}
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 transition-colors ${scrolled ? "text-[#2F2F2F]" : "text-white"}`}
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
            className="fixed inset-0 z-40 bg-[#F5F5F2] flex flex-col items-center justify-center gap-8 pt-20"
          >
            {navLinks.map((link) => (
              <div key={link.label} className="flex flex-col items-center gap-2">
                {link.children ? (
                  <>
                    <span className="font-display text-2xl font-light text-[#2F2F2F]">
                      {link.label}
                    </span>
                    <div className="flex flex-col items-center gap-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setMobileOpen(false)}
                          className="font-body text-sm tracking-[0.1em] uppercase text-[#2F2F2F]/60 hover:text-[#2F2F2F] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-2xl font-light text-[#2F2F2F] hover:text-[#8A9A5B] transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 font-body text-[12px] tracking-[0.15em] uppercase px-8 py-3 border border-[#6E7B48] text-[#6E7B48] hover:bg-[#6E7B48] hover:text-white transition-all"
            >
              Book Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
