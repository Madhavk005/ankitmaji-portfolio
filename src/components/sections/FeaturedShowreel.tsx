"use client";

import { motion } from "framer-motion";
import { Play, Clock, Film, Briefcase, Video } from "lucide-react";
import Image from "next/image";

export default function FeaturedShowreel() {
  return (
    <section id="showreel" className="py-24 md:py-32 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="font-heading text-4xl md:text-6xl uppercase tracking-tighter">
              Cinematic <span className="italic text-secondary-text">Showreel</span>
            </h2>
            <p className="text-foreground/60 mt-4 max-w-md">
              A curated collection of my best work across commercial, narrative, and branding projects.
            </p>
          </div>
        </motion.div>

        {/* 21:9 Edge to Edge on Mobile, slightly inset on Desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-video md:aspect-[21/9] bg-secondary overflow-hidden group cursor-pointer"
        >
          <Image
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2918&auto=format&fit=crop"
            alt="Showreel Thumbnail"
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
          />
          <div className="absolute inset-0 bg-background/20 group-hover:bg-background/40 transition-colors duration-500" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full glass flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-2" />
            </div>
          </div>

          {/* Film Strip Accents */}
          <div className="absolute top-0 left-0 w-full h-4 bg-background/80 flex justify-around items-center px-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-4 h-2 bg-background/50 rounded-sm" />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-4 bg-background/80 flex justify-around items-center px-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-4 h-2 bg-background/50 rounded-sm" />
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-border pt-12">
          {[
            { label: "Years Experience", value: "05+", icon: Clock },
            { label: "Projects Delivered", value: "120+", icon: Film },
            { label: "Brands Worked With", value: "45+", icon: Briefcase },
            { label: "Videos Produced", value: "80+", icon: Video },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="flex flex-col gap-2 group"
            >
              <stat.icon size={24} className="text-secondary-text mb-2 group-hover:text-white transition-colors" />
              <span className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold group-hover:scale-105 transform origin-left transition-transform duration-300">
                {stat.value}
              </span>
              <span className="text-sm tracking-widest uppercase text-foreground/60">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
