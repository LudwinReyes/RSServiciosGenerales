'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  manifestoContainerVariants, 
  splitTextVariants, 
  statsContainerVariants, 
  statItemVariants,
  useCounterAnimation 
} from '@/animations/authorityMotion';

interface StatProps {
  end: number;
  prefix?: string;
  suffix?: string;
  description: string;
}

function StatCard({ end, prefix = "", suffix = "", description }: StatProps) {
  // SSR Safe: margin -100px so it triggers right when user reads it
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const rounded = useCounterAnimation(end, isInView, 2);

  return (
    <motion.div 
      ref={ref}
      variants={statItemVariants}
      className="flex flex-col items-start p-8 bg-onyx-black border border-slate-800 hover:border-slate-700 hover:bg-deep-slate transition-colors duration-500"
    >
      <div className="flex items-baseline mb-4">
        {prefix && (
          <span className="text-4xl md:text-5xl lg:text-6xl font-heading text-brand-red tracking-tight mr-1">
            {prefix}
          </span>
        )}
        <motion.span 
          className="text-5xl md:text-6xl lg:text-7xl font-heading text-brand-blue leading-none tracking-tight"
        >
          {rounded}
        </motion.span>
        {suffix && (
          <span className="text-4xl md:text-5xl lg:text-6xl font-heading text-brand-red tracking-tight ml-1">
            {suffix}
          </span>
        )}
      </div>
      <p className="font-body text-xs sm:text-sm text-slate-400 font-medium tracking-widest uppercase">
        {description}
      </p>
    </motion.div>
  );
}

export default function Authority() {
  return (
    <section className="relative w-full bg-onyx-black py-24 sm:py-32 overflow-hidden">
      {/* Subtle radial gradient background (deep-slate at center to onyx-black) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{ background: 'radial-gradient(circle at 60% 50%, #111318 0%, #0a0a0a 70%)' }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: The Manifesto */}
          <motion.div
            variants={manifestoContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col"
          >
            <div className="mb-8 overflow-hidden">
              <motion.span 
                variants={splitTextVariants}
                className="inline-block text-xs text-brand-red font-bold tracking-[0.3em] uppercase border-l-2 border-brand-red pl-3"
              >
                Autoridad y Diferenciación B2B
              </motion.span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white uppercase leading-[0.95] tracking-tight mb-8">
              <div className="overflow-hidden"><motion.div variants={splitTextVariants}>Estándares De</motion.div></div>
              <div className="overflow-hidden"><motion.div variants={splitTextVariants}>Ingeniería Para</motion.div></div>
              <div className="overflow-hidden"><motion.div variants={splitTextVariants} className="text-slate-500">Proyectos Críticos.</motion.div></div>
            </h2>

            <div className="overflow-hidden">
              <motion.p 
                variants={splitTextVariants}
                className="text-lg md:text-xl font-body text-slate-300 leading-relaxed max-w-xl font-light"
              >
                A diferencia de contratistas tradicionales, RS Consorcio Industrial centraliza el diseño, ejecución y mantenimiento de infraestructura eléctrica y civil. Mitigamos el riesgo operativo garantizando cumplimiento normativo y precisión milimétrica en los sectores más exigentes del país.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Column: The Data Grid */}
          <motion.div
            variants={statsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
          >
            <StatCard end={10} prefix="+" description="Años de Respaldo Técnico" />
            <StatCard end={24} suffix="/7" description="Cobertura de Emergencias Industriales" />
            <StatCard end={100} suffix="%" description="Cumplimiento de Protocolos SSOMA" />
            <StatCard end={360} suffix="°" description="Soluciones Integrales: Eléctricas y Civiles" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
