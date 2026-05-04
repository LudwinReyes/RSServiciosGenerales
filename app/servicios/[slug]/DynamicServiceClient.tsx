'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { ChevronRight, CheckCircle2, ArrowRight, Phone, Mail, ArrowLeft, X, ChevronLeft } from 'lucide-react';
import { Service, services } from '@/data/servicesData';

/* ─── Animation variants ─────────────────────────────────── */
const containerV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};
const slideUpV = {
  hidden: { y: 45, opacity: 0, filter: 'blur(5px)' },
  visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const } },
};
const sidebarV = {
  hidden: { x: 40, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.25 } },
};

/* ─── Gallery Lightbox ────────────────────────────────────── */
function Lightbox({ images, startIndex, onClose }: { images: string[]; startIndex: number; onClose: () => void }) {
  const [current, setCurrent] = useState(startIndex);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-white/10 transition-colors"
        onClick={onClose}
      >
        <X className="w-5 h-5" />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 font-heading text-xs text-white/50 tracking-widest uppercase">
        {current + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        className="absolute left-4 z-10 w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-white/10 transition-colors"
        onClick={(e) => { e.stopPropagation(); prev(); }}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Image */}
      <motion.div
        key={current}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
        className="relative w-full max-w-5xl h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={images[current]} alt={`Imagen ${current + 1}`} fill className="object-contain" />
      </motion.div>

      {/* Next */}
      <button
        className="absolute right-4 z-10 w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-white/10 transition-colors"
        onClick={(e) => { e.stopPropagation(); next(); }}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </motion.div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
export default function DynamicServiceClient({ service }: { service: Service }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.07]);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isBlue = service.accentColor === 'blue';
  const accentBg = isBlue ? 'bg-brand-blue' : 'bg-brand-red';
  const accentText = isBlue ? 'text-brand-blue' : 'text-brand-red';
  const accentBorder = isBlue ? 'border-brand-blue' : 'border-brand-red';
  const accentBg10 = isBlue ? 'bg-brand-blue/10' : 'bg-brand-red/10';
  const accentHex = isBlue ? '#0077B6' : '#D91E2E';

  const related = services
    .filter((s) => s.slug !== service.slug && s.accentColor === service.accentColor)
    .slice(0, 3);

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          HERO — Parallax image, title, breadcrumb
         ══════════════════════════════════════════════════════ */}
      <div ref={heroRef} className="relative w-full h-[62vh] min-h-[460px] overflow-hidden bg-onyx-black">
        {/* Parallax image */}
        <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
          <Image src={service.image} alt={service.title} fill priority className="object-cover" sizes="100vw" />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx-black via-transparent to-black/25" />

        {/* Decorative accent line */}
        <motion.div
          className={`absolute bottom-0 left-0 h-[3px] ${accentBg}`}
          initial={{ width: 0 }}
          animate={{ width: '40%' }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] as const, delay: 0.6 }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          <motion.div variants={containerV} initial="hidden" animate="visible">
            {/* Breadcrumb */}
            <motion.div variants={slideUpV} className="flex items-center gap-2 text-xs font-heading tracking-widest text-slate-400 uppercase mb-5">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link>
              <ChevronRight className="w-3 h-3" />
              <span className={accentText}>{service.tag}</span>
            </motion.div>

            {/* Badge */}
            <motion.div variants={slideUpV}>
              <span className={`inline-block ${accentBg} text-white font-heading text-[10px] tracking-[0.25em] uppercase px-3 py-1 mb-5`}>
                {service.tag}
              </span>
            </motion.div>

            {/* Title */}
            <div className="overflow-hidden">
              <motion.h1
                variants={slideUpV}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-white uppercase tracking-tight leading-[0.9] max-w-4xl"
              >
                {service.title}
              </motion.h1>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          BODY
         ══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 flex-1 bg-onyx-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">

          {/* ─── LEFT: Main Content ──────────────────────────── */}
          <motion.div variants={containerV} initial="hidden" animate="visible" className="lg:col-span-8 space-y-16">

            {/* Description */}
            <motion.div variants={slideUpV}>
              <SectionLabel label="Descripción del Servicio" accentBg={accentBg} accentText={accentText} />
              <p className="font-body text-slate-300 text-lg lg:text-xl leading-relaxed font-light mt-6">
                {service.fullDescription}
              </p>
            </motion.div>

            {/* Gallery */}
            {service.gallery.length > 0 && (
              <motion.div variants={slideUpV}>
                <SectionLabel label="Galería de Proyectos" accentBg={accentBg} accentText={accentText} />
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Large first image */}
                  <button
                    onClick={() => setLightboxIndex(0)}
                    className="sm:col-span-2 relative h-64 sm:h-80 overflow-hidden bg-deep-slate group focus:outline-none"
                    aria-label="Ver imagen 1"
                  >
                    <Image src={service.gallery[0]} alt={`${service.title} — proyecto 1`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 66vw" />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="font-heading text-xs text-white tracking-widest uppercase border border-white/50 px-4 py-2">Ver foto</span>
                    </div>
                  </button>

                  {/* Stacked right images */}
                  <div className="flex flex-col gap-3">
                    {service.gallery.slice(1).map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setLightboxIndex(i + 1)}
                        className="relative h-[calc(50%-6px)] min-h-[120px] sm:flex-1 overflow-hidden bg-deep-slate group focus:outline-none"
                        aria-label={`Ver imagen ${i + 2}`}
                      >
                        <Image src={img} alt={`${service.title} — proyecto ${i + 2}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 33vw" />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="font-heading text-[10px] text-white tracking-widest uppercase border border-white/50 px-3 py-1">Ver foto</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                <p className="mt-3 font-body text-xs text-slate-600 tracking-widest uppercase">
                  Haz clic en las imágenes para ampliar — {service.gallery.length} fotos disponibles
                </p>
              </motion.div>
            )}

            {/* Deliverables bullets */}
            <motion.div variants={slideUpV}>
              <SectionLabel label="Entregables y Beneficios" accentBg={accentBg} accentText={accentText} />
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.bullets.map((bullet, i) => (
                  <motion.div
                    key={bullet}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                    className="flex items-start gap-4 p-5 bg-deep-slate border border-slate-800 hover:border-slate-600 transition-colors duration-300 group"
                  >
                    <CheckCircle2 className={`w-5 h-5 ${accentText} mt-0.5 shrink-0`} />
                    <span className="font-body text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                      {bullet}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div variants={slideUpV}>
              <SectionLabel label="Proceso de Trabajo" accentBg={accentBg} accentText={accentText} />
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {service.process.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
                    className="relative bg-deep-slate border border-slate-800 p-7 group hover:border-slate-600 transition-colors duration-300 overflow-hidden"
                  >
                    {/* Ghost step number */}
                    <div className="absolute top-4 right-5 font-heading text-[52px] leading-none text-white/[0.03] select-none">
                      {step.step}
                    </div>
                    {/* Accent bar top */}
                    <motion.div
                      className={`absolute top-0 left-0 h-[2px] ${accentBg}`}
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
                    />
                    <span className={`font-heading text-xs ${accentText} tracking-[0.2em] uppercase mb-3 block`}>
                      Paso {step.step}
                    </span>
                    <h3 className="font-heading text-base text-white uppercase tracking-tight mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="font-body text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {step.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Standards */}
            <motion.div
              variants={slideUpV}
              className={`p-8 border-l-4 ${accentBorder} bg-deep-slate`}
            >
              <h3 className="font-heading text-sm text-white uppercase tracking-widest mb-5">Normativas y Estándares Aplicados</h3>
              <div className="flex flex-wrap gap-3">
                {service.standards.map((std) => (
                  <span
                    key={std}
                    className="font-heading text-xs text-slate-400 border border-slate-700 px-4 py-2 uppercase tracking-widest hover:text-white hover:border-slate-500 transition-colors duration-200 cursor-default"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Back link */}
            <motion.div variants={slideUpV}>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 font-heading text-xs uppercase tracking-widest text-slate-500 hover:text-white transition-colors duration-300 group"
              >
                <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1.5 transition-transform duration-300" />
                Ver todos los servicios
              </Link>
            </motion.div>

          </motion.div>

          {/* ─── RIGHT: Sticky Sidebar ──────────────────────── */}
          <motion.div variants={sidebarV} initial="hidden" animate="visible" className="lg:col-span-4">
            <div className="sticky top-28 space-y-5">

              {/* CTA Card */}
              <div className="bg-deep-slate border border-slate-800 p-8 relative overflow-hidden">
                <div className={`absolute -top-12 -right-12 w-40 h-40 ${accentBg10} rounded-full blur-3xl pointer-events-none`} />
                <div className="relative z-10">
                  <span className={`inline-block text-xs font-bold tracking-[0.25em] uppercase ${accentText} border-l-2 ${accentBorder} pl-3 mb-5 block`}>
                    ¿Requiere este servicio?
                  </span>
                  <h3 className="text-2xl font-heading text-white uppercase tracking-tight mb-3 leading-tight">
                    Cotización técnica en 24 horas
                  </h3>
                  <p className="font-body text-slate-400 text-sm mb-8 leading-relaxed">
                    Solicite una evaluación formal para{' '}
                    <strong className="text-white font-medium">{service.title}</strong>.
                  </p>
                  <Link
                    href="/contacto"
                    className={`w-full inline-flex items-center justify-center ${accentBg} text-white py-4 font-heading text-sm uppercase tracking-widest hover:opacity-90 transition-opacity group`}
                  >
                    Solicitar Cotización
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Contact info */}
              <div className="bg-deep-slate border border-slate-800 p-8">
                <h4 className="font-heading text-xs uppercase tracking-widest text-slate-500 mb-6">Contacto Directo</h4>
                <a href="tel:+51954775211" className="flex items-center gap-3 mb-4 group">
                  <div className="w-9 h-9 bg-onyx-black border border-slate-700 flex items-center justify-center group-hover:border-brand-blue transition-colors duration-300">
                    <Phone className="w-4 h-4 text-slate-400 group-hover:text-brand-blue transition-colors" />
                  </div>
                  <div>
                    <div className="font-heading text-[10px] text-slate-500 uppercase tracking-widest mb-0.5">Central Telefónica</div>
                    <div className="font-body text-white text-sm group-hover:text-brand-blue transition-colors">+51 954 775 211</div>
                  </div>
                </a>
                <a href="mailto:proyectos@rs-serviciosgenerales.com" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 bg-onyx-black border border-slate-700 flex items-center justify-center group-hover:border-brand-blue transition-colors duration-300">
                    <Mail className="w-4 h-4 text-slate-400 group-hover:text-brand-blue transition-colors" />
                  </div>
                  <div>
                    <div className="font-heading text-[10px] text-slate-500 uppercase tracking-widest mb-0.5">Proyectos</div>
                    <div className="font-body text-white text-sm group-hover:text-brand-blue transition-colors break-all">
                      proyectos@rs-serviciosgenerales.com
                    </div>
                  </div>
                </a>
              </div>

              {/* Related services */}
              {related.length > 0 && (
                <div className="bg-deep-slate border border-slate-800 p-8">
                  <h4 className="font-heading text-xs uppercase tracking-widest text-slate-500 mb-5">Servicios Relacionados</h4>
                  <div className="flex flex-col gap-3">
                    {related.map((rel) => (
                      <Link key={rel.id} href={`/servicios/${rel.slug}`} className="flex items-center gap-3 group">
                        <div className={`w-1 h-6 ${accentBg} shrink-0 group-hover:h-8 transition-all duration-300`} />
                        <span className="font-heading text-xs text-slate-400 uppercase tracking-wide group-hover:text-white transition-colors duration-300">
                          {rel.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Lightbox ──────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={service.gallery}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Helper ──────────────────────────────────────────────── */
function SectionLabel({ label, accentBg, accentText }: { label: string; accentBg: string; accentText: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className={`h-[2px] w-8 ${accentBg}`} />
      <span className={`text-xs font-heading tracking-[0.25em] uppercase ${accentText}`}>{label}</span>
    </div>
  );
}
