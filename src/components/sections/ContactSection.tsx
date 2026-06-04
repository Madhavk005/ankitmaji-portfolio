"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "@/components/utils/Magnetic";
import { ArrowRight, Mail, Link as LinkIcon, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/hello@ankitmaji.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", company: "", budget: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative z-10 border-t border-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex flex-col justify-between"
          >
            <div>
              <h2 className="font-heading text-5xl md:text-7xl uppercase tracking-tighter mb-6">
                Have a <span className="italic text-secondary-text">Story</span> to Tell?
              </h2>
              <p className="text-lg md:text-xl text-foreground/70 max-w-md">
                Let&apos;s create something extraordinary together. Whether it&apos;s a cinematic film, brand identity, or a complete visual overhaul.
              </p>
            </div>

            <div className="mt-16 space-y-8">
              <div>
                <span className="flex items-center gap-2 text-sm text-primary tracking-widest uppercase mb-4">
                  <Mail size={16} /> Email
                </span>
                <a href="mailto:hello@ankitmaji.com" className="text-2xl hover:text-primary transition-colors flex items-center gap-2 group">
                  hello@ankitmaji.com
                  <ArrowRight size={20} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </div>
              <div>
                <span className="flex items-center gap-2 text-sm text-primary tracking-widest uppercase mb-4">
                  <LinkIcon size={16} /> Socials
                </span>
                <div className="flex gap-6">
                  {["Instagram", "Vimeo", "Behance", "LinkedIn"].map((social) => (
                    <a key={social} href="#" className="text-sm md:text-base hover:text-white transition-colors underline-offset-4 hover:underline">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <form onSubmit={handleSubmit} className="space-y-8 glass p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm tracking-widest uppercase text-foreground/70">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b border-secondary pb-2 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm tracking-widest uppercase text-foreground/70">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b border-secondary pb-2 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm tracking-widest uppercase text-foreground/70">Company</label>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-transparent border-b border-secondary pb-2 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm tracking-widest uppercase text-foreground/70">Budget</label>
                  <select 
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full bg-transparent border-b border-secondary pb-2 focus:outline-none focus:border-primary transition-colors text-foreground appearance-none"
                  >
                    <option value="" className="bg-background text-foreground/50">Select range</option>
                    <option value="1k-5k" className="bg-background">$1k - $5k</option>
                    <option value="5k-10k" className="bg-background">$5k - $10k</option>
                    <option value="10k+" className="bg-background">$10k+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm tracking-widest uppercase text-foreground/70">Message</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-transparent border-b border-secondary pb-2 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <Magnetic>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-12 bg-foreground text-background font-bold tracking-widest uppercase hover:bg-white transition-colors disabled:opacity-50 flex items-center justify-center gap-4 group"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </Magnetic>
              
              {submitStatus === "success" && (
                <p className="mt-4 text-green-500 font-mono text-sm tracking-widest uppercase text-center">Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="mt-4 text-red-500 font-mono text-sm tracking-widest uppercase text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
