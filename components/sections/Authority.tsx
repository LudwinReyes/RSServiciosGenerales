'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import {
  manifestoContainerVariants,
  splitTextVariants,
  statsContainerVariants,
  statItemVariants,
  useCounterAnimation,
} from '@/animations/authorityMotion';

interface StatProps {
  end: number;
  prefix?: string;
  suffix?: string;
  description: string;
  index: number;
}

function StatCard({ end, prefix = "", suffix = "", description, index }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const rounded = useCounterAnimation(end, isInView, 0);

  return (
    <motion.div
      ref={ref}
      variants={statItemVariants}
      className="group relative flex flex-col items-start p-8 bg-onyx-black border border-slate-800 hover:border-slate-600 hover:bg-deep-slate transition-all duration-500 overflow-hidden"
    >
      {/* Corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-brand-red/20 border-r-transparent"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
      />

      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 30%, rgba(59,130,246,0.06) 0%, transparent 70%)' }}
      />

      <div className="flex items-baseline mb-4 relative z-10">
        {prefix && (
          <motion.span
            className="text-3xl md:text-4xl lg:text-5xl font-heading text-brand-red tracking-tight mr-1"
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
          >
            {prefix}
          </motion.span>
        )}
        <motion.span className="text-5xl md:text-6xl lg:text-7xl font-heading text-brand-blue leading-none tracking-tight">
          {rounded}
        </motion.span>
        {suffix && (
          <motion.span
            className="text-3xl md:text-4xl lg:text-5xl font-heading text-brand-red tracking-tight ml-1"
            initial={{ opacity: 0, x: 10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
          >
            {suffix}
          </motion.span>
        )}
      </div>

      <p className="font-body text-xs sm:text-sm text-slate-400 font-medium tracking-widest uppercase relative z-10">
        {description}
      </p>

      {/* Bottom line reveal */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-brand-blue"
        initial={{ width: '0%' }}
        animate={isInView ? { width: '100%' } : {}}
        transition={{ delay: 0.6 + index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
      />
    </motion.div>
  );
}

export default function Authority() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section ref={sectionRef} className="relative w-full bg-onyx-black py-24 sm:py-36 overflow-hidden">
      {/* Parallax radial background */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 60% 50%, #111318 0%, #0a0a0a 70%)',
          y: bgY,
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
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
              <div className="overflow-hidden">
                <motion.div variants={splitTextVariants}>Estándares De</motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div variants={splitTextVariants}>Ingeniería Para</motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div variants={splitTextVariants} className="text-slate-500">
                  Proyectos Críticos.
                </motion.div>
              </div>
            </h2>

            {/* Animated separator */}
            <motion.div
              className="h-[1px] mb-8 bg-gradient-to-r from-brand-blue/50 via-slate-700 to-transparent"
              variants={{
                hidden: { scaleX: 0, originX: 0 },
                visible: { scaleX: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const } },
              }}
            />

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
            <StatCard end={10} prefix="+" description="Años de Respaldo Técnico" index={0} />
            <StatCard end={24} suffix="/7" description="Cobertura de Emergencias Industriales" index={1} />
            <StatCard end={100} suffix="%" description="Cumplimiento de Protocolos SSOMA" index={2} />
            <StatCard end={360} suffix="°" description="Soluciones Integrales: Eléctricas y Civiles" index={3} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
