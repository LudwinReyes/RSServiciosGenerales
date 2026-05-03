'use client';

import { motion } from 'motion/react';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Authority from '@/components/sections/Authority';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import { pageVariants } from '@/animations/pageMotion';

export default function Home() {
  return (
    <motion.main 
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-onyx-black flex flex-col overflow-x-hidden"
    >
      <Hero />
      <Services />
      <Authority />
      <Projects />
      <Contact />
      <Footer />
    </motion.main>
  );
}
