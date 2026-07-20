import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
 
export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
 
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", form);
      toast({ title: "Message sent", description: "Ingrid will be in touch shortly." });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({ title: "Something went wrong", description: "Please try again or call directly.", variant: "destructive" });
    }
    setSending(false);
  };
 
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#6E7B48]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 lg:gap-32">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-5/12"
          >
            <span className="font-body text-[11px] tracking-[0.3em] uppercase text-white/70">
              Get in Touch
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-light text-white leading-tight">
              Begin the
              <br />
              <em className="font-light">Conversation</em>
            </h2>
            <div className="mt-6 w-12 h-px bg-white/40" />
 
            <p className="mt-8 font-body text-[15px] leading-[1.8] text-white/75">
              Whether you're seeking a trusted partner for your property
              portfolio or simply wish to explore what boutique management
              looks like — Ingrid welcomes the conversation.
            </p>
 
            <div className="mt-10 space-y-5">
              <a href="tel:0400104682" className="flex items-center gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center border border-white/25 group-hover:border-white/50 transition-colors">
                  <Phone size={16} strokeWidth={1.5} className="text-white/80 group-hover:text-white transition-colors" />
                </div>
                <span className="font-body text-[14px] text-white/80 group-hover:text-white transition-colors">
                  0400 104 682
                </span>
              </a>
 
              <a href="mailto:hello@ingridelliott.com.au" className="flex items-center gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center border border-white/25 group-hover:border-white/50 transition-colors">
                  <Mail size={16} strokeWidth={1.5} className="text-white/80 group-hover:text-white transition-colors" />
                </div>
                <span className="font-body text-[14px] text-white/80 group-hover:text-white transition-colors">
                  hello@ingridelliott.com.au
                </span>
              </a>
 
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-white/25">
                  <MapPin size={16} strokeWidth={1.5} className="text-white/80" />
                </div>
                <span className="font-body text-[14px] text-white/80">
                  Melbourne, Victoria
                </span>
              </div>
            </div>
          </motion.div>
 
          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-7/12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-[11px] tracking-[0.2em] uppercase text-white/70 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/30 focus:border-white outline-none py-3 font-body text-[15px] text-white placeholder:text-white/40 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-body text-[11px] tracking-[0.2em] uppercase text-white/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/30 focus:border-white outline-none py-3 font-body text-[15px] text-white placeholder:text-white/40 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
 
              <div>
                <label className="block font-body text-[11px] tracking-[0.2em] uppercase text-white/70 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/30 focus:border-white outline-none py-3 font-body text-[15px] text-white placeholder:text-white/40 transition-colors"
                  placeholder="04XX XXX XXX"
                />
              </div>
 
              <div>
                <label className="block font-body text-[11px] tracking-[0.2em] uppercase text-[#8C7D70] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-white/30 focus:border-white outline-none py-3 font-body text-[15px] text-white placeholder:text-white/40 transition-colors resize-none"
                  placeholder="Tell us about your property needs..."
                />
              </div>
 
              <button
                type="submit"
                disabled={sending}
                className="mt-4 inline-flex items-center gap-3 font-body text-[11px] tracking-[0.2em] uppercase px-10 py-3.5 bg-white text-[#6E7B48] hover:bg-[#F5F5F2] disabled:opacity-50 transition-all duration-500"
              >
                {sending ? "Sending..." : "Send Enquiry"}
                <Send size={14} strokeWidth={1.5} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}