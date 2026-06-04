"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
const frames = [
  { src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80", cam: "ARRI ALEXA MINI LF", lens: "35MM T1.5", format: "4.5K ARRIRAW" },
  { src: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=800&q=80", cam: "SONY FX3", lens: "50MM F1.2", format: "4K 120FPS" },
  { src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80", cam: "RED KOMODO 6K", lens: "24MM T2.1", format: "6K REDCODE RAW" },
  { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80", cam: "SONY VENICE 2", lens: "85MM T1.5", format: "8K X-OCN" },
  { src: "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?w=800&q=80", cam: "ARRI ALEXA 35", lens: "18MM T1.8", format: "4K ARRIRAW" },
  { src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80", cam: "SONY FX6", lens: "35MM F1.4", format: "4K 60FPS" },
  { src: "https://images.unsplash.com/photo-1518131362791-c9165b6e4e03?w=800&q=80", cam: "RED V-RAPTOR XL", lens: "50MM T2.0", format: "8K REDCODE RAW" },
];

export default function FilmStripGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={containerRef} className="py-32 bg-surface overflow-hidden relative border-y border-border">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tighter">
          Film <span className="italic text-secondary-text">Strip</span>
        </h2>
        <p className="text-secondary-text mt-2 font-mono text-xs uppercase tracking-widest">
          Raw Frames // 24FPS
        </p>
      </div>

      <div className="relative">
        {/* Film Strip Borders */}
        <div className="absolute top-0 left-0 w-full h-8 bg-black z-10 flex justify-around items-center px-4">
          {[...Array(40)].map((_, i) => (
            <div key={i} className="w-6 h-4 bg-background border border-border/50 rounded-sm" />
          ))}
        </div>

        <motion.div style={{ x }} className="flex w-max pt-10 pb-10" data-cursor="DRAG">
          {frames.map((frame, idx) => (
            <div key={idx} className="group relative w-[300px] md:w-[500px] aspect-[3/2] flex-shrink-0 bg-black p-2 mx-1 border-x border-border/30">
              <Image 
                src={frame.src} 
                alt={`Frame ${idx}`}
                fill
                sizes="(max-width: 768px) 300px, 500px"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
              
              {/* Camera Data Overlay */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-background/80 backdrop-blur px-3 py-2 border border-border font-mono text-[10px] tracking-widest text-white uppercase flex flex-col gap-1 shadow-2xl">
                  <span className="flex items-center gap-2"><Camera size={12} className="text-primary" /> {frame.cam}</span>
                  <span className="text-secondary-text">{frame.lens}</span>
                  <span className="text-secondary-text">{frame.format}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-8 bg-black z-10 flex justify-around items-center px-4">
          {[...Array(40)].map((_, i) => (
            <div key={i} className="w-6 h-4 bg-background border border-border/50 rounded-sm" />
          ))}
        </div>
      </div>
    </section>
  );
}
