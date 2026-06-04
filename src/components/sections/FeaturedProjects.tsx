"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Neon Nights",
    client: "Nike",
    industry: "Sports Apparel",
    deliverables: "Commercial",
    timeline: "3 Weeks",
    role: "Director, DP",
    image: "https://images.unsplash.com/photo-1552068751-34cb5cf059b5?q=80&w=2865&auto=format&fit=crop",
    width: "w-[85vw] md:w-[40vw]",
    aspect: "aspect-[4/3]",
  },
  {
    id: 2,
    title: "Echoes",
    client: "A24 Films",
    industry: "Entertainment",
    deliverables: "Short Film",
    timeline: "3 Months",
    role: "Cinematographer",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2940&auto=format&fit=crop",
    width: "w-[75vw] md:w-[30vw]",
    aspect: "aspect-[3/4]",
  },
  {
    id: 3,
    title: "Urban Drift",
    client: "Porsche",
    industry: "Automotive",
    deliverables: "Brand Film",
    timeline: "4 Weeks",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1503376712341-ea1d7b1a629b?q=80&w=2940&auto=format&fit=crop",
    width: "w-[85vw] md:w-[35vw]",
    aspect: "aspect-square",
  },
  {
    id: 4,
    title: "Soundscapes",
    client: "Spotify",
    industry: "Technology",
    deliverables: "Visual Identity",
    timeline: "2 Months",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2940&auto=format&fit=crop",
    width: "w-[90vw] md:w-[50vw]",
    aspect: "aspect-[16/9]",
  },
];

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Adjust the scroll distance based on total width, -80% works better for larger scrolling walls
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section id="work" ref={containerRef} className="relative h-[300vh] bg-background">
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
          className="flex gap-8 px-6 w-max"
          data-cursor="DRAG"
        >
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`relative group ${project.width} flex-shrink-0`}
              data-cursor="VIEW"
            >
              <div className={`w-full ${project.aspect} bg-card overflow-hidden relative border border-border`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 85vw, 40vw"
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                
                {/* Metadata Drawer Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-md flex flex-col justify-end p-8">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-heading text-4xl uppercase tracking-tighter mb-6 text-white flex items-center gap-4">
                      {project.title}
                      <ArrowRight size={24} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 delay-100" />
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-y-6 text-[10px] uppercase tracking-widest text-secondary-text">
                      <div>
                        <span className="block text-white/30 mb-1">Client</span>
                        <span className="text-white">{project.client}</span>
                      </div>
                      <div>
                        <span className="block text-white/30 mb-1">Role</span>
                        <span className="text-white">{project.role}</span>
                      </div>
                      <div>
                        <span className="block text-white/30 mb-1">Industry</span>
                        <span className="text-white">{project.industry}</span>
                      </div>
                      <div>
                        <span className="block text-white/30 mb-1">Timeline</span>
                        <span className="text-white">{project.timeline}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex justify-between items-center group-hover:opacity-0 transition-opacity duration-500">
                <h4 className="font-mono text-sm tracking-widest uppercase">{project.title}</h4>
                <span className="text-[10px] tracking-widest uppercase text-secondary-text">{project.client}</span>
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
