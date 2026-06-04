"use client";

import { motion } from "framer-motion";

export default function CreativeDNA() {
  const dnaStats = [
    { label: "Storytelling", value: "70%" },
    { label: "Visual Design", value: "90%" },
    { label: "Direction", value: "85%" },
    { label: "Creativity", value: "95%" },
  ];

  const timeline = [
    { year: "2020", title: "Started Designing" },
    { year: "2022", title: "Freelancing" },
    { year: "2024", title: "Filmmaking" },
    { year: "2026", title: "Creative Direction" },
  ];

  return (
    <section id="story" className="py-32 bg-background relative z-10 border-t border-border">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          {/* Creative DNA */}
          <div>
            <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tighter mb-16">
              Creative <span className="italic text-secondary-text">DNA</span>
            </h2>
            
            <div className="space-y-12">
              {dnaStats.map((stat, idx) => (
                <div key={idx} className="relative border-b border-border pb-4 group">
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-heading text-2xl md:text-3xl lg:text-5xl uppercase tracking-widest text-secondary-text group-hover:text-white transition-colors duration-500">
                      {stat.label}
                    </span>
                    <span className="font-mono text-xl md:text-2xl text-white">
                      {stat.value}
                    </span>
                  </div>
                  {/* Animated Progress Bar */}
                  <div className="absolute bottom-[-1px] left-0 h-[1px] bg-white overflow-hidden w-full">
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: parseInt(stat.value) / 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2 + (idx * 0.1), ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full bg-white origin-left"
                    />
                  </div>
                  <div className="absolute bottom-[-1px] left-0 h-[1px] bg-white/20 w-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Experience */}
          <div className="relative">
            <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tighter mb-16 lg:text-right">
              The <span className="italic text-secondary-text">Journey</span>
            </h2>
            
            <div className="flex flex-col gap-12 relative lg:items-end">
              {/* Vertical line connecting nodes */}
              <div className="absolute left-1 lg:left-auto lg:right-1.5 top-2 bottom-2 w-[1px] bg-border" />
              
              {timeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="flex flex-row lg:flex-row-reverse items-start gap-8 relative z-10 group"
                >
                  <div className="w-4 h-4 bg-background border border-secondary-text group-hover:border-white rounded-full mt-1.5 shrink-0 transition-colors duration-300 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + 0.5 }}
                      className="w-1.5 h-1.5 bg-white rounded-full" 
                    />
                  </div>
                  <div className="flex flex-col lg:items-end">
                    <span className="font-mono text-sm tracking-widest text-secondary-text mb-2 group-hover:text-white/80 transition-colors">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-2xl uppercase tracking-wider group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
