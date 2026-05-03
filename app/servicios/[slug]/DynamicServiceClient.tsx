'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { Service } from '@/data/servicesData';
import { 
  heroVariants, 
  splitTextVariants, 
  contentFadeUp, 
  sidebarVariants 
} from '@/animations/dynamicServiceMotion';

export default function DynamicServiceClient({ service }: { service: Service }) {
  return (
    <>
      {/* Hero Interno */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <motion.div 
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          {/* Breadcrumb */}
          <div className="flex items-center text-xs font-heading tracking-widest text-slate-500 uppercase mb-8">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-brand-blue truncate">{service.title}</span>
          </div>

          <div className="overflow-hidden">
            <motion.h1 
              variants={splitTextVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-heading text-white uppercase tracking-tight leading-[0.95]"
            >
              {service.title}
            </motion.h1>
          </div>
        </motion.div>
      </section>

      {/* Cuerpo Técnico (Split Layout) */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Izquierda: Detalles Técnicos */}
          <motion.div 
            variants={contentFadeUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 space-y-12"
          >
            <div>
              <h2 className="text-xl font-heading text-slate-300 uppercase tracking-widest mb-6 border-l-2 border-brand-red pl-4">
                Descripción del Servicio
              </h2>
              <p className="font-body text-slate-300 text-lg leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            <div className="bg-deep-slate p-8 border border-slate-800">
              <h3 className="text-lg font-heading text-white uppercase tracking-tight mb-6">
                Beneficios Operativos
              </h3>
              <ul className="space-y-4">
                {[
                  'Ejecución bajo normativas SSOMA e ISO aplicables.',
                  'Personal técnico altamente capacitado y certificado.',
                  'Materiales de primera calidad con garantías extendidas.',
                  'Cumplimiento estricto de cronogramas B2B.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue mt-0.5 mr-3 shrink-0" />
                    <span className="font-body text-slate-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Derecha: Sticky Sidebar CTA */}
          <motion.div 
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-4"
          >
            <div className="sticky top-24 bg-deep-slate border border-slate-800 p-8">
              <h3 className="text-2xl font-heading text-white uppercase tracking-tight mb-4">
                ¿Requiere este servicio?
              </h3>
              <p className="font-body text-slate-400 text-sm mb-8">
                Solicite una evaluación técnica y cotización formal para el servicio de <strong className="text-white font-medium">{service.title}</strong>.
              </p>
              
              <Link href="/contacto" className="w-full inline-flex items-center justify-center bg-brand-red text-white py-4 font-heading text-sm uppercase tracking-widest hover:bg-red-700 transition-colors group">
                Solicitar Cotización
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="mt-8 pt-8 border-t border-slate-800">
                <p className="text-xs font-heading tracking-widest text-slate-500 uppercase mb-2">Contacto Inmediato</p>
                <a href="tel:51954775211" className="font-body text-white block mt-1 hover:text-brand-blue transition-colors">954 775 211</a>
                <a href="mailto:info@rsserviciosgenerales.com" className="font-body text-brand-blue block mt-1 hover:text-white transition-colors">info@rsserviciosgenerales.com</a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
