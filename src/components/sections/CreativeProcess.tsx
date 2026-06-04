"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Camera, Scissors, Send } from "lucide-react";

const processSteps = [
  {
    id: "01",
    title: "Discover",
    subtitle: "Research & Strategy",
    description: "Understanding the core narrative, target audience, and brand objectives before touching a camera or canvas.",
    icon: Search,
  },
  {
    id: "02",
    title: "Concept",
    subtitle: "Ideation & Storyboarding",
    description: "Developing visual concepts, moodboards, and detailed shot lists to map out the creative direction.",
    icon: Lightbulb,
  },
  {
    id: "03",
    title: "Create",
    subtitle: "Production & Design",
    description: "Executing the vision on set or in the design studio, capturing high-end footage and crafting precise visuals.",
    icon: Camera,
  },
  {
    id: "04",
    title: "Refine",
    subtitle: "Post-Production",
    description: "Color grading, editing, sound design, and typography refinement to elevate the final piece.",
    icon: Scissors,
  },
  {
    id: "05",
    title: "Deliver",
    subtitle: "Final Experience",
    description: "Presenting the polished outcome, ready to engage audiences and leave a lasting impression.",
    icon: Send,
  },
];

export default function CreativeProcess() {
  return (
    <section id="process" className="py-24 md:py-32 bg-secondary/30 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center max-w-2xl mx-auto"
        >
          <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tighter">
            The <span className="italic text-secondary-text">Creative</span> Process
          </h2>
          <p className="text-foreground/60 mt-4">
            A methodical approach to visual storytelling, ensuring every frame and pixel serves a purpose.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 top-0 w-[1px] bg-border -translate-x-1/2" 
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 1 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className={`group relative flex flex-col md:flex-row gap-8 md:gap-16 mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 top-4 md:top-6 w-10 h-10 rounded-full bg-background border border-border -translate-x-1/2 flex items-center justify-center z-10 group-hover:border-white transition-colors">
                <motion.div 
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                  className="text-white/50 group-hover:text-white transition-colors"
                >
                  <step.icon size={16} />
                </motion.div>
              </div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 flex flex-col ${
                index % 2 === 0 ? "md:text-left" : "md:text-right md:items-end"
              }`}>
                <span className="text-primary/50 font-heading text-6xl md:text-8xl font-bold opacity-20 absolute -z-10 -top-8 md:-top-12">
                  {step.id}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl uppercase tracking-wider font-bold">
                  {step.title}
                </h3>
                <span className="text-primary text-sm tracking-widest uppercase mt-2 mb-4 block">
                  {step.subtitle}
                </span>
                <p className="text-foreground/70 max-w-sm group-hover:text-foreground transition-colors">
                  {step.description}
                </p>
              </div>
              
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
