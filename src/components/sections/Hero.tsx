"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mouse, ArrowDown } from "lucide-react";
import Magnetic from "@/components/utils/Magnetic";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for the 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Reduce maximum scale to 40 to prevent mobile Safari rendering lock/scroll lag
  const scale = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.4, 0.6, 0.8], 
    [1, 2, 5, 15, 40]
  );
  
  // Fade out the mask completely to reveal the pure video
  // We fade it out earlier (at 0.7) so it's fully gone before the scale hits the maximum
  const maskOpacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0]);
  
  // Fade out foreground HUD elements early in the scroll
  const hudOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section ref={containerRef} id="home" className="relative h-[200vh] md:h-[300vh] bg-background">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden bg-background">
        
        {/* Background Asset (The Video playing inside the mask) */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            defaultMuted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/Vids/The First Chapter.mp4" type="video/mp4" />
          </video>
        </div>

        {/* The Multiply Mask Overlay */}
        <motion.div 
          style={{ opacity: maskOpacity }}
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-black mix-blend-multiply pointer-events-none"
        >
          <motion.div 
            style={{ scale }}
            className="flex items-center justify-center w-full h-full"
          >
            <h1 
              className="font-heading text-[25vw] leading-[0.8] font-bold text-white tracking-tighter text-center flex flex-col"
              style={{ transformOrigin: "center center" }}
            >
              <span>ANKIT</span>
              <span>MAJI</span>
            </h1>
          </motion.div>
        </motion.div>

        {/* Foreground HUD / Metadata (Fades out on scroll) */}
        <motion.div 
          style={{ opacity: hudOpacity }} 
          className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 z-20 pointer-events-none"
        >
          {/* Top Header */}
          <div className="w-full flex justify-between items-start">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
              <p className="font-mono text-[10px] md:text-xs tracking-widest text-white uppercase">The Creative Archive</p>
              <p className="font-mono text-[10px] md:text-xs tracking-widest text-white/50 uppercase mt-1">Vol 01.</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="text-right">
              <p className="font-mono text-[10px] md:text-xs tracking-widest text-white uppercase">Ankit Maji</p>
              <p className="font-mono text-[10px] md:text-xs tracking-widest text-white/50 uppercase mt-1">Cinematographer</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Global Scroll Indicator */}
        <motion.div 
          style={{ opacity: hudOpacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        >
          <Magnetic>
            <a href="#work" className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-10 h-16 rounded-full border border-white/20 flex items-center justify-center relative overflow-hidden group-hover:border-white/50 transition-colors">
                <Mouse size={20} className="text-white/50 group-hover:text-white transition-colors" />
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="absolute bottom-2"
                >
                  <ArrowDown size={14} className="text-white" />
                </motion.div>
              </div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-white/70 group-hover:text-white transition-colors mt-2">
                Explore Archive
              </span>
            </a>
          </Magnetic>
        </motion.div>

        {/* Subtle noise over the entire hero */}
        <div className="absolute inset-0 film-grain mix-blend-overlay opacity-30 pointer-events-none z-30" />
      </div>
    </section>
  );
}
