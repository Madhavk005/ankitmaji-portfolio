"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function CreativePhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 1, 0.1]);

  return (
    <section 
      ref={containerRef} 
      className="py-48 bg-background relative overflow-hidden flex items-center justify-center min-h-screen"
    >
      {/* Background Scrolling BTS Clips (Pure Grayscale) */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0 opacity-20 grayscale flex gap-8 p-4 overflow-hidden pointer-events-none"
      >
        <div className="flex flex-col gap-8 w-1/3 -mt-48">
          <Image src="https://images.unsplash.com/photo-1590076214151-5b721869e900?w=800&q=80&auto=format&fit=crop" width={800} height={1000} alt="BTS" className="w-full h-auto aspect-[4/5] object-cover" />
          <Image src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=800&q=80&auto=format&fit=crop" width={800} height={1000} alt="BTS" className="w-full h-auto aspect-[4/5] object-cover" />
        </div>
        <div className="flex flex-col gap-8 w-1/3 mt-24">
          <Image src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80&auto=format&fit=crop" width={800} height={1000} alt="BTS" className="w-full h-auto aspect-[4/5] object-cover" />
          <Image src="https://images.unsplash.com/photo-1518131362791-c9165b6e4e03?w=800&q=80&auto=format&fit=crop" width={800} height={1000} alt="BTS" className="w-full h-auto aspect-[4/5] object-cover" />
        </div>
        <div className="flex flex-col gap-8 w-1/3 -mt-24">
          <Image src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80&auto=format&fit=crop" width={800} height={1000} alt="BTS" className="w-full h-auto aspect-[4/5] object-cover" />
          <Image src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80&auto=format&fit=crop" width={800} height={1000} alt="BTS" className="w-full h-auto aspect-[4/5] object-cover" />
        </div>
      </motion.div>

      <div className="absolute inset-0 film-grain z-10" />

      <div className="container relative z-20 mx-auto px-6 text-center">
        <motion.div style={{ opacity }} className="max-w-6xl mx-auto">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={{
              hidden: { opacity: 1 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="font-heading text-5xl sm:text-6xl md:text-8xl lg:text-[10vw] font-bold uppercase tracking-tighter leading-[0.85] flex flex-wrap justify-center gap-x-3 md:gap-x-8"
          >
            {["Great", "visuals", "aren't", "created.", "They're", "discovered."].map((word, i) => (
              <span key={i} className="overflow-hidden inline-flex">
                <motion.span
                  variants={{
                    hidden: { y: "100%" },
                    visible: { y: "0%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
                  }}
                  className={i >= 4 ? "italic text-secondary-text mix-blend-difference" : ""}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}
