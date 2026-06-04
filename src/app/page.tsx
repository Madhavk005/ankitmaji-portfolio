"use client";

import { useState } from "react";
import CustomCursor from "@/components/utils/CustomCursor";
import OpeningSequence from "@/components/sections/OpeningSequence";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedShowreel from "@/components/sections/FeaturedShowreel";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import FilmStripGallery from "@/components/sections/FilmStripGallery";
import CreativePhilosophy from "@/components/sections/CreativePhilosophy";
import CreativeDNA from "@/components/sections/CreativeDNA";
import CreativeProcess from "@/components/sections/CreativeProcess";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import CommandMenu from "@/components/utils/CommandMenu";
import EasterEgg from "@/components/utils/EasterEgg";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <main className={`relative bg-background text-foreground min-h-screen selection:bg-primary selection:text-background ${!hasEntered ? 'h-screen overflow-hidden' : ''}`}>
      <CustomCursor />
      <CommandMenu />
      <EasterEgg />
      
      {!hasEntered && <OpeningSequence onEnter={() => setHasEntered(true)} />}

      {/* Main Content */}
      <div className={`transition-opacity duration-1000 ${hasEntered ? 'opacity-100' : 'opacity-0'}`}>
        {hasEntered && <Navbar />}
        
        <Hero />
        <FeaturedShowreel />
        <FilmStripGallery />
        <CreativePhilosophy />
        <FeaturedProjects />
        <CreativeDNA />
        <CreativeProcess />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
