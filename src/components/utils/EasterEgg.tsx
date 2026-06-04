"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function EasterEgg() {
  const [isOpen, setIsOpen] = useState(false);
  const [, setKeysPressed] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      
      setKeysPressed((prev) => {
        const newKeys = [...prev, key].slice(-2);
        if (newKeys.join("") === "am") {
          setIsOpen(true);
        }
        return newKeys;
      });

      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 md:p-12">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/95 backdrop-blur-xl"
            onClick={() => setIsOpen(false)}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: 50, rotateX: 20 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative w-full max-w-4xl bg-[#111] text-[#e0e0e0] border border-[#333] shadow-2xl p-8 md:p-16 h-[80vh] overflow-y-auto font-serif"
            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }}
          >
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            <div className="max-w-2xl mx-auto">
              <h2 className="text-sm tracking-[0.4em] uppercase text-primary/80 mb-12 border-b border-[#333] pb-4">
                Director&apos;s Notes // Internal Archive
              </h2>
              
              <h1 className="text-4xl md:text-5xl italic mb-12">
                &quot;We don&apos;t remember days, we remember moments.&quot;
              </h1>

              <div className="space-y-8 text-lg leading-relaxed text-white/70">
                <p>
                  Every project starts as a mess of ideas. Scraps of paper, fragmented voice memos, half-watched films at 3 AM. The process is never clean.
                </p>
                <p>
                  I&apos;ve learned that the best frames are often mistakes. A sudden light leak, a talent forgetting their mark, a shadow falling exactly where you didn&apos;t plan. You have to be prepared enough to capture the accident.
                </p>
                <p>
                  Design is the structure. Cinematography is the emotion. When you combine them, you don&apos;t just get a visual—you get an experience. That&apos;s what I&apos;m chasing. Every single time.
                </p>
                
                <div className="pt-12 border-t border-[#333] mt-12">
                  <p className="text-sm font-mono tracking-widest text-white/40">
                    LOG: 04.12.2025 // 03:42 AM
                  </p>
                  <p className="text-sm font-mono tracking-widest text-white/40 mt-2">
                    STATUS: RENDERING...
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
