'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import {
  containerVariants,
  textRevealVariants,
  fadeUpVariants,
  backgroundFadeVariants,
  kenBurnsVariants,
  badgeVariants,
  dotVariants,
} from '@/animations/heroMotion';

const heroSlides = [
  {
    id: 1,
    badge: 'Consorcio Industrial',
    title: ['Estructuras y', 'Obras Civiles', 'Corporativas'],
    subtitle: 'Diseño y ejecución integral de infraestructura bajo rigurosos estándares de seguridad y calidad técnica.',
    image: '/img/slide-servicio-1.webp',
    ctaPrimary: 'Cotizar Proyecto',
    ctaSecondary: 'Ver Servicio',
    link: '/servicios/estructuras-drywall',
    accentColor: '#3B82F6',
  },
  {
    id: 2,
    badge: 'Energía Continua',
    title: ['Sistemas', 'Eléctricos', 'Especializados'],
    subtitle: 'Despliegue de redes de baja y media tensión, subestaciones y mallas a tierra certificadas para cero downtime.',
    image: '/img/slide-servicio-2.webp',
    ctaPrimary: 'Cotizar Proyecto',
    ctaSecondary: 'Ver Servicio',
    link: '/servicios/sistemas-electricos',
    accentColor: '#EF4444',
  },
  {
    id: 3,
    badge: 'Termodinámica Industrial',
    title: ['Sistemas HVAC', 'y Climatización', 'Constante'],
    subtitle: 'Soluciones térmicas para centros corporativos e industriales, garantizando la integridad de su personal y equipamiento.',
    image: '/img/slide-servicio-3.webp',
    ctaPrimary: 'Cotizar Proyecto',
    ctaSecondary: 'Ver Servicio',
    link: '/servicios/climatizacion-mantenimiento',
    accentColor: '#3B82F6',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-onyx-black flex items-center">

      {/* ── Background Layer with Ken Burns ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${slide.id}`}
          className="absolute inset-0 z-0"
          variants={backgroundFadeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Ken Burns wrapper */}
          <motion.div
            className="absolute inset-0"
            variants={kenBurnsVariants}
            initial="initial"
            animate="animate"
            key={`kb-${slide.id}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          </motion.div>

          {/* Dark gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

          {/* Color tint accent (subtle) */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: [0, 0.06, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            style={{ background: `radial-gradient(ellipse at 70% 50%, ${slide.accentColor}55 0%, transparent 65%)` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Decorative vertical lines ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none hidden lg:flex justify-end pr-16 xl:pr-32">
        <div className="flex gap-6 h-full items-stretch opacity-[0.04]">
          <div className="w-[1px] bg-white" />
          <div className="w-[1px] bg-white" />
        </div>
      </div>

      {/* ── Slide number indicator (top-right) ── */}
      <div className="absolute top-24 right-6 sm:right-8 z-20 hidden sm:flex items-center gap-3">
        <motion.div
          key={`num-${currentSlide}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="font-heading text-xs text-slate-500 tracking-widest"
        >
          <span className="text-white text-lg font-bold">0{currentSlide + 1}</span>
          <span className="mx-1">/</span>
          <span>0{heroSlides.length}</span>
        </motion.div>

        <div className="flex flex-col gap-1">
          {heroSlides.map((_, i) => (
            <motion.div
              key={i}
              className="h-[1px] rounded-full bg-brand-blue cursor-pointer"
              animate={{ width: i === currentSlide ? 24 : 8, opacity: i === currentSlide ? 1 : 0.3 }}
              transition={{ duration: 0.4 }}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${slide.id}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-4xl"
          >
            {/* Badge */}
            <motion.div variants={badgeVariants} className="mb-6 flex items-center gap-4">
              <span className="text-xs text-brand-blue font-bold tracking-[0.3em] uppercase bg-blue-900/20 px-3 py-1 border-l-2 border-brand-blue">
                {slide.badge}
              </span>
              <motion.div
                className="hidden sm:block h-[1px] bg-slate-700"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              />
            </motion.div>

            {/* H1 — word by word with clip reveal */}
            <div className="mb-6 sm:mb-8 max-w-[900px]">
              <h1 className="text-[42px] sm:text-[64px] md:text-[76px] lg:text-[88px] leading-[0.88] tracking-[-0.02em] font-heading text-white uppercase overflow-hidden">
                {slide.title.map((line, li) => (
                  <div key={li} className="overflow-hidden">
                    <motion.span
                      className={`block ${li === 1 ? 'text-slate-400' : ''}`}
                      variants={textRevealVariants}
                    >
                      {line}
                    </motion.span>
                  </div>
                ))}
              </h1>
            </div>

            {/* Divider line */}
            <motion.div
              className="mb-8 h-[1px] bg-gradient-to-r from-brand-blue/60 via-slate-700 to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
            />

            {/* Subtitle */}
            <motion.div variants={fadeUpVariants} className="mb-10 sm:mb-12 max-w-[560px]">
              <p className="text-sm sm:text-base lg:text-lg font-body text-slate-300 leading-relaxed">
                {slide.subtitle}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center"
            >
              <Link
                href="/contacto"
                className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-brand-red text-white text-center font-heading text-base sm:text-lg tracking-widest uppercase transition-all hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red ring-offset-2 ring-offset-onyx-black overflow-hidden"
              >
                <span className="relative z-10">{slide.ctaPrimary}</span>
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                  animate={{ translateX: ['−100%', '200%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
                />
              </Link>
              <Link
                href={slide.link}
                className="px-8 sm:px-10 py-4 sm:py-5 border border-slate-500 bg-transparent text-white text-center font-heading text-base sm:text-lg tracking-widest uppercase transition-all hover:border-white hover:bg-white/5 focus:outline-none"
              >
                {slide.ctaSecondary}
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Bottom: dots + scroll cue ── */}
      <div className="absolute bottom-8 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-end justify-between">
        {/* Dot navigation */}
        <div className="flex items-center gap-2">
          {heroSlides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-1.5 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-brand-blue' : 'bg-slate-600 hover:bg-slate-400'
              }`}
              animate={{ width: index === currentSlide ? 48 : 16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:flex flex-col items-center gap-2 opacity-40">
          <div className="w-[1px] h-12 bg-white/50 relative overflow-hidden">
            <motion.div
              className="absolute top-0 w-full bg-white"
              animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ height: '40%' }}
            />
          </div>
          <span className="font-heading text-[9px] tracking-[0.25em] uppercase text-white rotate-90 translate-y-4">Scroll</span>
        </div>
      </div>

      {/* ── Progress bar (bottom) ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-[2px] bg-slate-900">
        <motion.div
          className="h-full bg-brand-blue"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          key={`progress-${currentSlide}`}
          transition={{ duration: 7, ease: 'linear' }}
        />
      </div>
    </section>
  );
}
