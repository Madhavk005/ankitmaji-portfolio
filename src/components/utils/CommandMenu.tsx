"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open on Spacebar if no input is focused
      if (e.code === "Space" && e.target === document.body) {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const menuItems = [
    { name: "Search Projects", category: "Navigation" },
    { name: "Search Services", category: "Navigation" },
    { name: "Search Case Studies", category: "Archive" },
    { name: "View Showreel", category: "Media" },
    { name: "Contact Studio", category: "Action" },
  ];

  const filteredItems = menuItems.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-secondary border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-4 border-b border-white/10 flex items-center gap-4">
              <Search className="w-5 h-5 text-foreground/50" />
              <input 
                autoFocus
                type="text"
                placeholder="Type a command or search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent outline-none text-lg text-foreground placeholder:text-foreground/30 font-sans"
              />
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-md transition-colors">
                <X className="w-5 h-5 text-foreground/50" />
              </button>
            </div>

            <div className="p-2 max-h-[60vh] overflow-y-auto">
              {filteredItems.length === 0 ? (
                <div className="p-8 text-center text-foreground/40 font-mono text-sm">
                  No results found.
                </div>
              ) : (
                filteredItems.map((item, idx) => (
                  <button 
                    key={idx}
                    className="w-full text-left px-4 py-3 hover:bg-primary/20 hover:text-primary transition-colors rounded-lg flex justify-between items-center group"
                  >
                    <span className="font-heading text-lg tracking-wide uppercase">{item.name}</span>
                    <span className="text-[10px] tracking-widest uppercase text-foreground/40 group-hover:text-primary/60">
                      {item.category}
                    </span>
                  </button>
                ))
              )}
            </div>
            
            <div className="p-3 border-t border-white/10 bg-black/20 flex gap-4 text-[10px] text-foreground/40 uppercase tracking-widest">
              <span><kbd className="font-mono bg-white/10 px-1 py-0.5 rounded mr-1">↑↓</kbd> Navigate</span>
              <span><kbd className="font-mono bg-white/10 px-1 py-0.5 rounded mr-1">Enter</kbd> Select</span>
              <span><kbd className="font-mono bg-white/10 px-1 py-0.5 rounded mr-1">ESC</kbd> Close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
