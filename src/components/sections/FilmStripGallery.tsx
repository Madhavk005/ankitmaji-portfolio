"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
const frames = [
  { src: "/Photos/DSC09873.png", cam: "Sony a6700 (ILCE-6700)", lens: "50mm F1.8", format: "4K 10-BIT" },
  { src: "/Photos/DSC09879.png", cam: "Sony a6700 (ILCE-6700)", lens: "50mm F1.8", format: "4K 120FPS" },
  { src: "/Photos/DSC09890.png", cam: "Sony a6700 (ILCE-6700)", lens: "50mm F1.8", format: "4K XAVC S-I" },
  { src: "/Photos/DSC09900.png", cam: "Sony a6700 (ILCE-6700)", lens: "50mm F1.8", format: "4K S-LOG3" },
  { src: "/Photos/DSC09912.png", cam: "Sony a6700 (ILCE-6700)", lens: "50mm F1.8", format: "4K 60FPS" },
  { src: "/Photos/DSC09920.png", cam: "Sony a6700 (ILCE-6700)", lens: "50mm F1.8", format: "4K 4:2:2" },
  { src: "/Photos/DSC09926.png", cam: "Sony a6700 (ILCE-6700)", lens: "50mm F1.8", format: "4K 10-BIT" },
  { src: "/Photos/DSC09934.png", cam: "Sony a6700 (ILCE-6700)", lens: "50mm F1.8", format: "4K S-CINETONE" },
  { src: "/Photos/DSC09941.png", cam: "Sony a6700 (ILCE-6700)", lens: "50mm F1.8", format: "4K S-LOG3" },
  { src: "/Photos/DSC00010.png", cam: "Sony a6700 (ILCE-6700)", lens: "50mm F1.8", format: "4K 4:2:2" },
];

export default function FilmStripGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

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
