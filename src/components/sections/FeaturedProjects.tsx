"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Script from "next/script";

const reels = [
  { id: 1, client: "JECRC University", url: "https://www.instagram.com/reel/DVQqiu8EQGx/" },
  { id: 2, client: "JECRC University", url: "https://www.instagram.com/reel/DVNU2N_kZzu/" },
  { id: 3, client: "JECRC University", url: "https://www.instagram.com/reel/DVLbtGEkcQ4/" },
  { id: 4, client: "JECRC University", url: "https://www.instagram.com/reel/DUYlIdik_6P/" },
  { id: 5, client: "JECRC University", url: "https://www.instagram.com/reel/DXRRLLWAHas/" },
  { id: 6, client: "JECRC University", url: "https://www.instagram.com/reel/DYKHceJATpJ/" },
  { id: 7, client: "Hakim's Aalim Salon", url: "https://www.instagram.com/reel/DVRLun2jHsr/" },
  { id: 8, client: "Hakim's Aalim Salon", url: "https://www.instagram.com/reel/DG7gd4zpYYx/" },
  { id: 9, client: "Hive India", url: "https://www.instagram.com/reel/DXZ3e-lknUW/" },
];

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Since we have 9 portrait reels, we need a larger scroll range.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  useEffect(() => {
    // Process Instagram embeds on mount
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const win = window as any;
      if (win.instgrm) {
        win.instgrm.Embeds.process();
      }
    }
  }, []);

  return (
    <section id="work" ref={containerRef} className="relative h-[400vh] bg-background">
      <Script async src="//www.instagram.com/embed.js" strategy="lazyOnload" />
      
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="container mx-auto px-6 mb-12">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 1 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="font-heading text-4xl md:text-6xl uppercase tracking-tighter flex gap-4"
          >
            {["Archive", "Selections"].map((word, i) => (
              <span key={i} className="overflow-hidden inline-flex">
                <motion.span
                  variants={{
                    hidden: { y: "100%" },
                    visible: { y: "0%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
                  }}
                  className={i === 1 ? "italic text-secondary-text" : ""}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h2>
        </div>

        {/* Horizontal Scroll Gallery */}
        <motion.div 
          style={{ x }} 
          className="flex gap-12 px-6 w-max items-center h-[600px]"
          data-cursor="DRAG"
        >
          {reels.map((reel) => (
            <div 
              key={reel.id} 
              className="relative group w-[326px] md:w-[400px] flex-shrink-0 flex flex-col"
            >
              <div className="w-full bg-black/20 overflow-hidden relative border border-border/50 rounded-xl p-2 h-[580px] flex justify-center items-center">
                <blockquote 
                  className="instagram-media w-full h-full" 
                  data-instgrm-permalink={`${reel.url}?utm_source=ig_embed&amp;utm_campaign=loading`}
                  data-instgrm-version="14" 
                  style={{ 
                    background: '#000', 
                    border: 0, 
                    margin: 0, 
                    padding: 0, 
                    width: '100%',
                    height: '100%'
                  }}
                >
                </blockquote>
              </div>
              
              <div className="mt-6 flex justify-between items-center group-hover:text-primary transition-colors duration-300 px-2">
                <h4 className="font-mono text-sm tracking-widest uppercase text-white/80">{reel.client}</h4>
                <a href={reel.url} target="_blank" rel="noreferrer" className="text-secondary-text hover:text-white transition-colors">
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Horizontal Scroll Progress Indicator */}
        <div className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12 h-[2px] bg-white/10 overflow-hidden">
          <motion.div 
            style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
            className="w-full h-full bg-white"
          />
        </div>
      </div>
    </section>
  );
}
