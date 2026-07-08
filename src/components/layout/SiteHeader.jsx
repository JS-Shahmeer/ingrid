import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import IEBadge from "@/components/layout/IEBadge";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Services",
    children: [
      { label: "Property Management", path: "/property-management" },
      { label: "Leasing Services", path: "/leasing-services" },
      { label: "Rental Appraisals", path: "/rental-appraisals" },
    ],
  },
  { label: "Why Choose Us", path: "/why-choose-us" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;
  const isServiceActive = navLinks
    .find((n) => n.label === "Services")
    ?.children?.some((c) => location.pathname === c.path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-brand-base/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <IEBadge size="sm" />
            <div className="hidden sm:block">
              <p className="font-serif text-brand-charcoal text-lg leading-tight">
                Ingrid Elliott
              </p>
              <p className="text-[10px] tracking-ultra-wide uppercase text-brand-sage font-sans">
                Real Estate
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    className={`flex items-center gap-1 text-sm font-sans font-light tracking-wide transition-colors duration-300 ${
                      isServiceActive ? "text-brand-sage" : "text-brand-charcoal hover:text-brand-sage"
                    }`}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <div
                    className={`absolute top-full left-0 pt-2 transition-all duration-300 ${
                      servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="bg-white border border-brand-sage/10 rounded-sm shadow-lg py-2 min-w-56">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-5 py-2.5 text-sm font-sans font-light transition-colors duration-200 ${
                            isActive(child.path)
                              ? "text-brand-sage bg-brand-base"
                              : "text-brand-charcoal hover:text-brand-sage hover:bg-brand-base"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative text-sm font-sans font-light tracking-wide transition-colors duration-300 group"
                >
                  <span className={isActive(item.path) ? "text-brand-sage" : "text-brand-charcoal hover:text-brand-sage"}>
                    {item.label}
                  </span>
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[0.5px] bg-brand-sage transition-all duration-400 ease-in-out ${
                      isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              )
            )}
          </nav>

          {/* Social Icons Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="text-brand-charcoal/50 hover:text-brand-sage transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-brand-charcoal/50 hover:text-brand-sage transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-brand-charcoal/50 hover:text-brand-sage transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-brand-charcoal"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand-base/98 backdrop-blur-sm border-t border-brand-sage/10">
          <nav className="max-w-7xl mx-auto px-6 py-6 space-y-1">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between py-3 text-sm font-sans font-light tracking-wide text-brand-charcoal"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block py-2.5 text-sm font-sans font-light ${
                            isActive(child.path) ? "text-brand-sage" : "text-brand-charcoal/70"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-3 text-sm font-sans font-light tracking-wide ${
                    isActive(item.path) ? "text-brand-sage" : "text-brand-charcoal"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="flex items-center gap-5 pt-4 border-t border-brand-sage/10">
              <a href="#" aria-label="Facebook" className="text-brand-charcoal/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-brand-charcoal/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-brand-charcoal/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}