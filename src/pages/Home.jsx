import React from "react";
import Navbar from "@/components/ingrid/Navbar";
import Hero from "@/components/ingrid/Hero";
import Services from "@/components/ingrid/Services";
import Portfolio from "@/components/ingrid/Portfolio";
import About from "@/components/ingrid/About";
import Testimonials from "@/components/ingrid/Testimonials";
import Contact from "@/components/ingrid/Contact";
import Footer from "@/components/ingrid/Footer";
 
export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F2] text-[#2F2F2F]">
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}