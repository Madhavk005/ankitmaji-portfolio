"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Magnetic from "@/components/utils/Magnetic";
import { Home, Film, PenTool, Fingerprint, Mail } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Intro");

  const navItems = [
    { name: "Intro", href: "#home", id: "01", icon: <Home size={14} /> },
    { name: "Work", href: "#work", id: "02", icon: <Film size={14} /> },
    { name: "Process", href: "#process", id: "03", icon: <PenTool size={14} /> },
    { name: "DNA", href: "#dna", id: "04", icon: <Fingerprint size={14} /> },
    { name: "Contact", href: "#contact", id: "05", icon: <Mail size={14} /> },
  ];

  // A very simple scroll spy for demonstration
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Hardcoded thresholds for demo purposes, normally we'd use IntersectionObserver
      if (scrollPosition < 800) setActiveSection("Intro");
      else if (scrollPosition < 2000) setActiveSection("Work");
      else if (scrollPosition < 3000) setActiveSection("Process");
      else if (scrollPosition < 4000) setActiveSection("Story");
      else setActiveSection("Contact");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 md:bottom-auto md:top-8 left-1/2 -translate-x-1/2 z-[100] w-[90vw] sm:w-[80vw] md:w-fit"
    >
      <div className="glass px-2 md:px-6 py-2 md:py-3 rounded-full flex items-center justify-around md:justify-center w-full gap-2 md:gap-8">
        {navItems.map((item) => {
          const isActive = activeSection === item.name;
          return (
            <Magnetic key={item.name}>
              <Link
                href={item.href}
                className="relative flex items-center justify-center w-12 h-12 md:w-auto md:h-auto md:gap-2 group"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 md:-inset-x-4 md:-inset-y-2 bg-white rounded-full z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 font-mono flex items-center justify-center transition-colors ${isActive ? "text-background" : "text-white/50 group-hover:text-white"}`}>
                  <span className="md:hidden">{item.icon}</span>
                  <span className="hidden md:block text-[10px] tracking-widest">{item.id}</span>
                </span>
                <span className={`relative z-10 hidden md:block text-xs uppercase tracking-widest font-bold transition-colors ${isActive ? "text-background" : "text-white/50 group-hover:text-white"}`}>
                  {item.name}
                </span>
              </Link>
            </Magnetic>
          );
        })}
      </div>
    </motion.nav>
  );
}
