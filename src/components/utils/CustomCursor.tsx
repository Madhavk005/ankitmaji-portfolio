"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState<"default" | "VIEW" | "PLAY" | "DRAG" | "hover">("default");

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const cursorTarget = target.closest('[data-cursor]');
      if (cursorTarget) {
        const mode = cursorTarget.getAttribute('data-cursor') as "default" | "VIEW" | "PLAY" | "DRAG" | "hover";
        setCursorState(mode);
        return;
      }

      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: { scale: 1, backgroundColor: "rgba(255, 255, 255, 1)", mixBlendMode: "difference" as const },
    hover: { scale: 1.5, backgroundColor: "rgba(255, 255, 255, 0.5)", mixBlendMode: "difference" as const },
    VIEW: { scale: 4, backgroundColor: "rgba(255, 255, 255, 1)", mixBlendMode: "normal" as const },
    PLAY: { scale: 4, backgroundColor: "rgba(255, 255, 255, 1)", mixBlendMode: "normal" as const },
    DRAG: { scale: 4, backgroundColor: "rgba(255, 255, 255, 1)", mixBlendMode: "normal" as const },
  };

  const isTextMode = ["VIEW", "PLAY", "DRAG"].includes(cursorState);

  return (
    <motion.div
      className="hidden md:flex fixed top-0 left-0 pointer-events-none z-[9999] items-center justify-center rounded-full"
      style={{ width: 12, height: 12, x: mousePosition.x - 6, y: mousePosition.y - 6 }}
      animate={variants[cursorState]}
      transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.2 }}
    >
      {isTextMode && (
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[3px] font-bold tracking-widest text-black"
        >
          {cursorState}
        </motion.span>
      )}
    </motion.div>
  );
}
