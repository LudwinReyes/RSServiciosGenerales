'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { Settings, ShieldCheck, Map, Award, Users, Zap, CheckCircle2, TrendingUp, Clock } from 'lucide-react';
import {
  heroContainerVariants,
  heroTextVariants,
  fadeUpVariants,
  pillarsGridVariants,
  pillarCardVariants,
  imageRevealVariants,
  lineRevealVariants,
  timelineItemVariants,
} from '@/animations/aboutMotion';

/* ─── Data ──────────────────────────────────────────────── */
const pillars = [
  {
    Icon: Settings,
    title: 'Cero Fricción Operativa',
    body: 'Gestión integral desde la obra civil hasta la puesta en marcha eléctrica. Un único punto de contacto, responsabilidad centralizada y control de calidad total.',
    color: 'brand-blue',
    hoverBorder: '#0077B6',
    hoverShadow: 'rgba(0,119,182,0.2)',
  },
  {
    Icon: ShieldCheck,
    title: 'Protocolos SSOMA Inquebrantables',
    body: 'Seguridad industrial y salud ocupacional como regla de negocio, no como opción. Mitigamos el riesgo en cada fase constructiva y de mantenimiento.',
    color: 'brand-red',
    hoverBorder: '#D91E2E',
    hoverShadow: 'rgba(217,30,46,0.2)',
  },
  {
    Icon: Map,
    title: 'Cobertura a Escala Nacional',
    body: 'Capacidad logística probada para el despliegue técnico en plantas pesqueras, campamentos mineros remotos y centros logísticos corporativos a nivel nacional.',
    color: 'brand-blue',
    hoverBorder: '#0077B6',
    hoverShadow: 'rgba(0,119,182,0.2)',
  },
];

const timeline = [
  { year: '2012', event: 'Fundación en Lima con foco en sistemas eléctricos industriales.' },
  { year: '2015', event: 'Expansión a estructuras metálicas y campamentos mineros en zona sur.' },
  { year: '2018', event: 'Certificación SSOMA y primer contrato con el sector pesquero a gran escala.' },
  { year: '2021', event: 'Incorporación de unidad de redes, CCTV y climatización corporativa.' },
  { year: '2024', event: 'Consolidación como socio estratégico B2B para 50+ empresas en todo el Perú.' },
];

const values = [
  { Icon: Award, label: 'Excelencia Técnica' },
  { Icon: Users, label: 'Equipo Especializado' },
  { Icon: Zap, label: 'Respuesta Inmediata' },
  { Icon: TrendingUp, label: 'Mejora Continua' },
  { Icon: Clock, label: 'Cumplimiento de Plazos' },
  { Icon: CheckCircle2, label: 'Calidad Garantizada' },
];

/* ─── Sub-components ─────────────────────────────────────── */
function TimelineItem({ year, event, index }: { year: string; event: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      variants={timelineItemVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay: index * 0.1 }}
      className="relative flex gap-6 group"
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <motion.div
          className="w-3 h-3 rounded-full border-2 border-brand-blue bg-onyx-black group-hover:bg-brand-blue transition-colors duration-300 mt-1 shrink-0"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 0.2 + index * 0.1, duration: 0.4, ease: 'backOut' }}
        />
        {index < timeline.length - 1 && (
          <motion.div
            className="w-[1px] flex-1 bg-slate-800 mt-2"
            initial={{ scaleY: 0, originY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.35 + index * 0.1, duration: 0.6 }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-10">
        <span className="font-heading text-xs text-brand-blue tracking-[0.2em] uppercase mb-1 block">{year}</span>
        <p className="font-body text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
          {event}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Main Component ──────────────────────────────────────── */
export default function AboutClient() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <div className="flex-1 w-full overflow-x-hidden">

      {/* ═══ HERO ═══════════════════════════════════════════ */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 lg:mb-36">
        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl"
        >
          <div className="overflow-hidden mb-6">
            <motion.span
              variants={heroTextVariants}
              className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-brand-red border-l-2 border-brand-red pl-3"
            >
              Nuestra Identidad Corporativa
            </motion.span>
          </div>

          <h1 className="text-[38px] sm:text-[58px] lg:text-[80px] xl:text-[90px] font-heading uppercase leading-[0.85] tracking-tight mb-10">
            <div className="overflow-hidden pb-2"><motion.div variants={heroTextVariants}>NO SOMOS CONTRATISTAS.</motion.div></div>
            <div className="overflow-hidden pb-2"><motion.div variants={heroTextVariants} className="text-slate-500">SOMOS SU SOCIO ESTRATÉGICO</motion.div></div>
            <div className="overflow-hidden pb-2"><motion.div variants={heroTextVariants} className="text-brand-blue">EN INFRAESTRUCTURA.</motion.div></div>
          </h1>

          {/* Animated divider */}
          <motion.div
            variants={lineRevealVariants}
            className="h-[1px] bg-gradient-to-r from-brand-blue/60 via-slate-700 to-transparent mb-10 max-w-2xl"
          />

          <div className="overflow-hidden">
            <motion.p
              variants={fadeUpVariants}
              className="font-body text-slate-300 text-lg lg:text-2xl font-light leading-relaxed max-w-4xl"
            >
              En RS Consorcio Industrial Perú, centralizamos la ingeniería, ejecución y mantenimiento operativo.
              Nacimos para resolver la fragmentación técnica en los sectores más exigentes del país.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* ═══ IMAGEN + MISIÓN ════════════════════════════════ */}
      <section ref={sectionRef} className="relative w-full mb-24 lg:mb-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-stretch">

            {/* Image Column */}
            <motion.div
              variants={imageRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative overflow-hidden bg-deep-slate border border-slate-800 min-h-[400px] lg:min-h-[600px]"
            >
              {/* 
                ════════════════════════════════════════════════
                   📸 ZONA DE IMAGEN — coloca aquí tu foto
                   Ruta sugerida: /img/nosotros/equipo.jpg
                   Ejemplo:
                   <Image src="/img/nosotros/equipo.jpg" alt="Equipo RS Consorcio" fill className="object-cover" />
                ════════════════════════════════════════════════
              */}
              <motion.div className="absolute inset-0" style={{ y: imageY }}>
                {/* ▼▼▼ REEMPLAZA ESTE BLOQUE CON TU <Image> ▼▼▼ */}
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-slate-900 to-onyx-black">
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-slate-600 flex items-center justify-center">
                    <Users className="w-8 h-8 text-slate-600" />
                  </div>
                  <p className="font-heading text-xs text-slate-600 tracking-widest uppercase text-center px-8">
                    Coloca aquí la imagen del equipo<br />o instalaciones de la empresa
                  </p>
                </div>
                {/* ▲▲▲ FIN DEL PLACEHOLDER ▲▲▲ */}
              </motion.div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-onyx-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Corner label */}
              <div className="absolute bottom-6 left-6 z-10">
                <span className="font-heading text-xs text-white/60 tracking-[0.2em] uppercase">Lima, Perú — Desde 2012</span>
              </div>
            </motion.div>

            {/* Mission Column */}
            <motion.div
              className="flex flex-col justify-center py-12 lg:py-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
            >
              <motion.div variants={fadeUpVariants} className="mb-8">
                <span className="text-xs text-brand-blue font-bold tracking-[0.25em] uppercase border-l-2 border-brand-blue pl-3 block mb-6">
                  Misión y Visión
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white uppercase leading-[0.95] tracking-tight mb-6">
                  Infraestructura<br />
                  <span className="text-slate-500">Sin Compromisos.</span>
                </h2>
                <p className="font-body text-slate-300 text-base lg:text-lg leading-relaxed font-light mb-6">
                  <span className="text-white font-medium">Misión:</span> Proveer soluciones integrales de infraestructura técnica con el más alto estándar de calidad, seguridad y cumplimiento normativo para el sector industrial peruano.
                </p>
                <p className="font-body text-slate-300 text-base lg:text-lg leading-relaxed font-light">
                  <span className="text-white font-medium">Visión:</span> Ser el consorcio de referencia en el Perú para proyectos de ingeniería civil y eléctrica en entornos industriales exigentes, reconocido por nuestra confiabilidad y precisión técnica.
                </p>
              </motion.div>

              {/* Key facts */}
              <motion.div variants={fadeUpVariants} className="grid grid-cols-2 gap-4 mt-4">
                {[
                  { value: '+10', label: 'Años de experiencia' },
                  { value: '50+', label: 'Empresas atendidas' },
                  { value: '100%', label: 'SSOMA compliant' },
                  { value: '24/7', label: 'Soporte técnico' },
                ].map((fact) => (
                  <div key={fact.label} className="bg-onyx-black border border-slate-800 p-5 hover:border-slate-600 transition-colors duration-300 group">
                    <div className="font-heading text-2xl text-brand-blue mb-1 group-hover:text-white transition-colors duration-300">{fact.value}</div>
                    <div className="font-body text-xs text-slate-500 uppercase tracking-widest">{fact.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══ VALORES ═══════════════════════════════════════ */}
      <section className="w-full bg-deep-slate/30 border-y border-slate-800/50 py-16 mb-24 lg:mb-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
            className="flex flex-wrap justify-center gap-4 lg:gap-6"
          >
            {values.map(({ Icon, label }) => (
              <motion.div
                key={label}
                variants={pillarCardVariants}
                whileHover={{ scale: 1.04, borderColor: '#0077B6' }}
                className="flex items-center gap-3 px-6 py-4 bg-onyx-black border border-slate-800 cursor-default group transition-all duration-300"
              >
                <Icon className="w-4 h-4 text-brand-blue shrink-0 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                <span className="font-heading text-sm text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors duration-300">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ PILARES OPERATIVOS ═════════════════════════════ */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 lg:mb-36">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
          className="mb-12 lg:mb-16"
        >
          <span className="text-xs text-brand-blue font-bold tracking-[0.25em] uppercase border-l-2 border-brand-blue pl-3 block mb-4">Cómo Operamos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white uppercase leading-[0.9] tracking-tight">
            Nuestros Estándares<br />
            <span className="text-slate-500">De Excelencia</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={pillarsGridVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {pillars.map(({ Icon, title, body, color, hoverBorder, hoverShadow }) => (
            <motion.div
              key={title}
              variants={pillarCardVariants}
              whileHover={{ y: -6, borderColor: hoverBorder, boxShadow: `0 12px 40px -10px ${hoverShadow}` }}
              className="relative bg-deep-slate border border-slate-800 p-8 lg:p-12 transition-all duration-400 group overflow-hidden"
            >
              {/* Ghost number */}
              <div className="absolute top-4 right-6 font-heading text-[80px] leading-none text-white/[0.025] select-none pointer-events-none">
                {pillars.indexOf({ Icon, title, body, color, hoverBorder, hoverShadow }) + 1}
              </div>

              <div className={`w-14 h-14 bg-onyx-black flex items-center justify-center mb-8 border border-slate-800 group-hover:border-${color} transition-colors duration-300`}>
                <Icon className={`w-7 h-7 text-${color}`} />
              </div>
              <h3 className={`text-xl font-heading text-white uppercase tracking-tight mb-4 group-hover:text-${color} transition-colors duration-300`}>
                {title}
              </h3>
              <p className="font-body text-slate-400 text-sm lg:text-base leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                {body}
              </p>

              {/* Bottom accent */}
              <motion.div
                className={`absolute bottom-0 left-0 h-[2px] bg-${color}`}
                variants={{ rest: { width: '0%' }, hover: { width: '100%' } }}
                initial="rest"
                whileHover="hover"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══ TRAYECTORIA / TIMELINE ══════════════════════════ */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 lg:mb-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            className="lg:sticky lg:top-32"
          >
            <motion.span variants={fadeUpVariants} className="text-xs text-brand-red font-bold tracking-[0.25em] uppercase border-l-2 border-brand-red pl-3 block mb-6">
              Nuestra Trayectoria
            </motion.span>
            <motion.h2 variants={fadeUpVariants} className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white uppercase leading-[0.9] tracking-tight mb-8">
              Más de una <br />
              <span className="text-slate-500">Década de</span><br />
              Ejecución.
            </motion.h2>
            <motion.div variants={lineRevealVariants} className="h-[2px] bg-gradient-to-r from-brand-red/60 via-slate-700 to-transparent mb-8 max-w-xs" />
            <motion.p variants={fadeUpVariants} className="font-body text-slate-400 text-base lg:text-lg leading-relaxed font-light">
              Desde nuestros inicios en Lima hasta convertirnos en referente nacional, cada proyecto ha fortalecido nuestra capacidad técnica y compromiso con la excelencia.
            </motion.p>
          </motion.div>

          {/* Right: Timeline */}
          <div className="pt-2">
            {timeline.map((item, i) => (
              <TimelineItem key={item.year} year={item.year} event={item.event} index={i} />
            ))}
          </div>

        </div>
      </section>

      {/* ═══ CTA FINAL ══════════════════════════════════════ */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-brand-blue p-12 lg:p-16 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Background glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-red/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl lg:text-5xl font-heading text-white uppercase leading-[0.95] tracking-tight mb-4">
              ¿Listo para trabajar <span className="text-blue-200">con los mejores?</span>
            </h2>
            <p className="font-body text-blue-100 text-lg font-light leading-relaxed">
              Contáctenos hoy y reciba una cotización técnica detallada en menos de 24 horas.
            </p>
          </div>

          <motion.a
            href="/contacto"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="relative z-10 shrink-0 px-10 py-5 bg-white text-brand-blue font-heading text-base uppercase tracking-widest hover:bg-slate-100 transition-colors duration-300 focus:outline-none shadow-xl"
          >
            Solicitar Cotización
          </motion.a>
        </motion.div>
      </section>

    </div>
  );
}
