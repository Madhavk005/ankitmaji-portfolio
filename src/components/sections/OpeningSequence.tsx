"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface OpeningSequenceProps {
  onEnter: () => void;
}

const words = [
  "INITIALIZING",
  "LOADING ASSETS",
  "CALIBRATING LENSES",
  "RENDERING FRAMES",
  "THE CREATIVE ARCHIVE",
];

export default function OpeningSequence({ onEnter }: OpeningSequenceProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress counter
    const progressInterval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return p + Math.floor(Math.random() * 10) + 1;
      });
    }, 100);

    // Flashing words
    const wordInterval = setInterval(() => {
      setWordIndex(i => {
        if (i === words.length - 1) {
          clearInterval(wordInterval);
          setIsLoaded(true);
          return i;
        }
        return i + 1;
      });
    }, 400);

    return () => {
      clearInterval(progressInterval);
      clearInterval(wordInterval);
    };
  }, []);

  useEffect(() => {
    if (isLoaded) {
      // Auto transition after a brief pause when loaded
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          onEnter();
        }, 1200); // Wait for exit animation
      }, 500);
    }
  }, [isLoaded, onEnter]);


  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="opening"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Noise */}
          <div className="absolute inset-0 film-grain opacity-30" />

          {/* Top Left Stats */}
          <div className="absolute top-6 left-6 font-mono text-[10px] tracking-widest uppercase text-secondary-text">
            SYS.ARCHIVE_V2<br/>
            {new Date().getFullYear()} ©
          </div>

          {/* Top Right Percentage */}
          <div className="absolute top-6 right-6 font-mono text-[10px] tracking-widest uppercase text-secondary-text">
            {Math.min(progress, 100)}%
          </div>

          {/* Center Dynamic Typography */}
          <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center h-32">
            <AnimatePresence mode="wait">
              <motion.h1
                key={wordIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.1 }}
                className={`font-heading uppercase text-center ${
                  isLoaded 
                    ? "text-4xl md:text-7xl font-bold tracking-tighter text-white" 
                    : "text-xl md:text-2xl tracking-widest text-secondary-text"
                }`}
              >
                {words[wordIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>



          {/* Exit Animation Split Curtains */}
          <AnimatePresence>
            {isExiting && (
              <>
                <motion.div 
                  initial={{ top: "0%" }}
                  animate={{ top: "-50%" }}
                  transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute left-0 w-full h-1/2 bg-[#050505] z-50 pointer-events-none"
                />
                <motion.div 
                  initial={{ bottom: "0%" }}
                  animate={{ bottom: "-50%" }}
                  transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute left-0 w-full h-1/2 bg-[#050505] z-50 pointer-events-none"
                />
              </>
            )}
          </AnimatePresence>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
