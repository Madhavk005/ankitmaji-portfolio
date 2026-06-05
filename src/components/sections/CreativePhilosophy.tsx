"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
      {/* Background Video */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0 opacity-20 grayscale pointer-events-none w-full h-[150%]"
      >
        <video
          src="/Vids/Manjeet Ka Ladka.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 film-grain z-10" />

      <div className="container relative z-20 mx-auto px-6 text-center group cursor-pointer">
        <motion.div style={{ opacity }} className="max-w-6xl mx-auto">
          <div className="transition-opacity duration-700 group-hover:opacity-5">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
