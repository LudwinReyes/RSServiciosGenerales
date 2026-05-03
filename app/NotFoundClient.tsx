'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, PhoneCall } from 'lucide-react';
import { notFoundContainer, glitchTextVariants } from '@/animations/resilienceMotion';

export default function NotFoundClient() {
  return (
    <main className="min-h-screen bg-onyx-black flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background 404 outline/transparent text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="font-heading text-[30vw] text-slate-800/10 leading-none">
          404
        </span>
      </div>

      <motion.div 
        variants={notFoundContainer}
        initial="hidden"
        animate="visible"
        className="w-full max-w-3xl mx-auto text-center relative z-10"
      >
        <motion.div variants={glitchTextVariants} className="mb-6 inline-block">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-red border-l-2 border-brand-red pl-3">
            Error Crítico de Enrutamiento
          </span>
        </motion.div>
        
        <motion.h1 
          variants={glitchTextVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-heading uppercase tracking-tight text-white mb-6"
        >
          404 - INFRAESTRUCTURA <br className="hidden sm:block" />
          <span className="text-slate-500">NO LOCALIZADA.</span>
        </motion.h1>

        <motion.p 
          variants={glitchTextVariants}
          className="font-body text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto mb-12"
        >
          El recurso técnico o servicio que intenta consultar no está disponible o ha sido reubicado.
        </motion.p>

        <motion.div 
          variants={glitchTextVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link 
            href="/servicios"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-white font-heading text-sm uppercase tracking-widest hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Catálogo de Servicios
          </Link>
          <Link 
            href="/contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-brand-red text-brand-red font-heading text-sm uppercase tracking-widest hover:bg-brand-red hover:text-white transition-colors"
          >
            <PhoneCall className="w-4 h-4 mr-2" />
            Contactar a Soporte 24/7
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
