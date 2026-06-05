"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/utils/Magnetic";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-background overflow-hidden border-t border-border pt-32 pb-16">
      <div className="container mx-auto px-6">
        
        {/* Massive Contact Statement */}
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl sm:text-6xl md:text-8xl lg:text-[10vw] uppercase tracking-tighter leading-[0.85]"
          >
            Let&apos;s Create<br />
            <span className="italic text-secondary-text">Something Worth</span><br />
            Remembering.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 w-fit"
          >
            <Magnetic>
              <a 
                href="mailto:majiankit243@gmail.com"
                className="inline-block text-2xl font-mono tracking-widest border-b border-foreground pb-2 hover:text-secondary-text hover:border-secondary-text transition-colors"
              >
                majiankit243@gmail.com
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* End Credits Style Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-16 border-t border-border">
          
          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-widest uppercase text-secondary-text">Directed By</span>
            <span className="font-heading text-xl uppercase tracking-widest">Ankit Maji</span>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-widest uppercase text-secondary-text">Cinematography</span>
            <span className="font-heading text-xl uppercase tracking-widest">Ankit Maji</span>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-widest uppercase text-secondary-text">Design</span>
            <span className="font-heading text-xl uppercase tracking-widest">Ankit Maji</span>
          </div>

          {/* Editorial Social Grid */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-widest uppercase text-secondary-text">Connect</span>
            <div className="grid grid-cols-2 gap-y-4">
              {[
                { name: 'Instagram', url: 'https://www.instagram.com/_majiankit_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/majiankit/' }
              ].map((social) => (
                <a 
                  key={social.name} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group font-heading text-lg uppercase tracking-wider hover:text-secondary-text transition-colors flex items-center justify-between w-full md:w-fit md:gap-2"
                >
                  {social.name}
                  <ArrowUpRight size={16} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-32 text-center text-[10px] tracking-widest uppercase text-secondary-text">
          &copy; {new Date().getFullYear()} THE CREATIVE ARCHIVE. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
