'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Zap, Building2, Network, ThermometerSnowflake, ArrowRight } from 'lucide-react';
import {
  sectionVariants,
  gridVariants,
  cardVariants,
  imageHoverVariants,
} from '@/animations/servicesMotion';

const servicesData = [
  {
    id: 'sistemas-electricos',
    title: 'Sistemas Eléctricos',
    description: 'Instalación de grupos electrógenos, tableros, media/baja tensión y pozos a tierra.',
    cta: 'Especificaciones Eléctricas',
    Icon: Zap,
  },
  {
    id: 'estructuras-drywall',
    title: 'Estructuras y Drywall',
    description: 'Fabricación de estructuras metálicas, techos y divisiones arquitectónicas corporativas.',
    cta: 'Ver Proyectos',
    Icon: Building2,
  },
  {
    id: 'redes-seguridad',
    title: 'Redes y Seguridad',
    description: 'Cableado estructurado avanzado y sistemas de videovigilancia industrial.',
    cta: 'Consultar Cobertura',
    Icon: Network,
  },
  {
    id: 'climatizacion-mantenimiento',
    title: 'Climatización y Mantenimiento',
    description: 'Equipos de aire acondicionado y mantenimiento preventivo/correctivo.',
    cta: 'Planes de Mantenimiento',
    Icon: ThermometerSnowflake,
  },
];

export default function Services() {
  return (
    <section className="w-full bg-onyx-black py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 md:mb-24 max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs text-brand-blue font-bold tracking-[0.2em] uppercase">Especialidades Técnicas</span>
            <div className="h-[1px] w-16 bg-slate-800"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white uppercase leading-[0.9] tracking-[-0.01em] mb-6">
            Capacidad Operativa y <br className="hidden md:block" />
            <span className="text-slate-500">Soluciones Integrales</span>
          </h2>
          <p className="text-lg font-body text-slate-400 max-w-xl leading-relaxed">
            Ejecución técnica de alto nivel para el sector minero, pesquero y corporativo.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group relative flex flex-col justify-between bg-deep-slate p-8 border border-onyx-black hover:border-brand-blue transition-colors duration-300 min-h-[320px]"
            >
              {/* Top content (Icon, Title, Desc) */}
              <div>
                <motion.div 
                  variants={imageHoverVariants}
                  className="mb-8 w-12 h-12 flex items-center justify-center bg-onyx-black border border-slate-800 text-slate-400 group-hover:text-brand-blue transition-colors duration-300"
                >
                  <service.Icon className="w-6 h-6" strokeWidth={1.5} />
                </motion.div>
                
                <h3 className="text-2xl font-heading text-white uppercase tracking-tight mb-4 group-hover:text-brand-blue transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="font-body text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 pt-6 border-t border-onyx-black group-hover:border-slate-800 transition-colors duration-300">
                <Link 
                  href={`/servicios/${service.id}`}
                  className="inline-flex items-center gap-2 font-heading text-sm uppercase tracking-widest text-slate-500 group-hover:text-brand-red transition-colors duration-300"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
              
              {/* Subtle accent line at the bottom */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-red group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
