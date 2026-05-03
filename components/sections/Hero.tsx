'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { 
  containerVariants, 
  textRevealVariants, 
  fadeUpVariants, 
  backgroundFadeVariants 
} from '@/animations/heroMotion';

const heroSlides = [
  {
    id: 1,
    badge: 'Consorcio Industrial',
    title: ['Estructuras y', 'Obras Civiles', 'Corporativas'],
    subtitle: 'Diseño y ejecución integral de infraestructura bajo rigurosos estándares de seguridad y calidad técnica.',
    image: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=1920&h=1080',
    ctaPrimary: 'Cotizar Proyecto',
    ctaSecondary: 'Ver Servicio',
    link: '/servicios/estructuras-drywall',
  },
  {
    id: 2,
    badge: 'Energía Continua',
    title: ['Sistemas', 'Eléctricos', 'Especializados'],
    subtitle: 'Despliegue de redes de baja y media tensión, subestaciones y mallas a tierra certificadas para cero downtime.',
    image: 'https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?auto=format&fit=crop&q=80&w=1920&h=1080',
    ctaPrimary: 'Cotizar Proyecto',
    ctaSecondary: 'Ver Servicio',
    link: '/servicios/sistemas-electricos',
  },
  {
    id: 3,
    badge: 'Termodinámica Industrial',
    title: ['Sistemas HVAC', 'y Climatización', 'Constante'],
    subtitle: 'Soluciones térmicas para centros corporativos e industriales, garantizando la integridad de su personal y equipamiento.',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=1920&h=1080',
    ctaPrimary: 'Cotizar Proyecto',
    ctaSecondary: 'Ver Servicio',
    link: '/servicios/climatizacion-mantenimiento',
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000); // 7 seconds per slide automatically
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-onyx-black flex items-center">
      <AnimatePresence mode="wait">
        {heroSlides.map((slide, index) => {
          if (index !== currentSlide) return null;
          return (
            <div key={slide.id} className="absolute inset-0">
              {/* Background Layer per slide */}
              <motion.div 
                className="absolute inset-0 z-0 origin-center"
                variants={backgroundFadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ 
                    backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.95)), url('${slide.image}')`
                  }} 
                />
              </motion.div>

              {/* Main Content Area */}
              <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 flex flex-col justify-center">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="max-w-4xl"
                >
                  {/* Badge */}
                  <motion.div variants={fadeUpVariants} className="mb-6 flex items-center gap-4">
                    <span className="text-xs text-brand-blue font-bold tracking-[0.3em] uppercase bg-blue-900/20 px-3 py-1 border-l-2 border-brand-blue">
                      {slide.badge}
                    </span>
                    <div className="hidden sm:block h-[1px] w-12 sm:w-24 bg-slate-700"></div>
                  </motion.div>

                  {/* H1 */}
                  <motion.div variants={textRevealVariants} className="overflow-hidden mb-6 sm:mb-8 max-w-[900px]">
                    <h1 className="text-[40px] sm:text-[64px] md:text-[76px] lg:text-[84px] leading-[0.9] tracking-[-0.02em] font-heading text-white uppercase">
                      <span className="block">{slide.title[0]}</span>
                      <span className="block text-slate-400">{slide.title[1]}</span>
                      <span className="block">{slide.title[2]}</span>
                    </h1>
                  </motion.div>

                  {/* Subtitle */}
                  <motion.div variants={textRevealVariants} className="mb-10 sm:mb-12 max-w-[600px]">
                    <p className="text-sm sm:text-base lg:text-lg font-body text-slate-300 leading-relaxed">
                      {slide.subtitle}
                    </p>
                  </motion.div>

                  {/* Actions */}
                  <motion.div 
                    variants={fadeUpVariants} 
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center"
                  >
                    <Link 
                      href="/contacto"
                      className="px-8 sm:px-10 py-4 sm:py-5 bg-brand-red text-white text-center font-heading text-base sm:text-lg tracking-widest uppercase transition-all hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red ring-offset-2 ring-offset-onyx-black"
                    >
                      {slide.ctaPrimary}
                    </Link>
                    <Link 
                      href={slide.link}
                      className="px-8 sm:px-10 py-4 sm:py-5 border border-slate-500 bg-transparent text-white text-center font-heading text-base sm:text-lg tracking-widest uppercase transition-all hover:border-white focus:outline-none focus:border-white focus:bg-white/5"
                    >
                      {slide.ctaSecondary}
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </AnimatePresence>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-4 sm:left-6 lg:left-8 z-20 flex items-center gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 relative rounded-full ${
              index === currentSlide 
                ? 'w-12 h-1.5 bg-brand-blue' 
                : 'w-4 h-1.5 bg-slate-600 hover:bg-slate-400'
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
