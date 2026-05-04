'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Zap, Building2, Network, ThermometerSnowflake, ArrowRight } from 'lucide-react';
import {
  sectionVariants,
  gridVariants,
  cardVariants,
  imageHoverVariants,
  labelVariants,
} from '@/animations/servicesMotion';

const servicesData = [
  {
    id: 'sistemas-electricos',
    title: 'Sistemas Eléctricos',
    description: 'Instalación de grupos electrógenos, tableros, media/baja tensión y pozos a tierra.',
    cta: 'Especificaciones Eléctricas',
    Icon: Zap,
    gradient: 'from-blue-900/20 to-transparent',
    accent: '#3B82F6',
  },
  {
    id: 'estructuras-drywall',
    title: 'Estructuras y Drywall',
    description: 'Fabricación de estructuras metálicas, techos y divisiones arquitectónicas corporativas.',
    cta: 'Ver Proyectos',
    Icon: Building2,
    gradient: 'from-red-900/20 to-transparent',
    accent: '#EF4444',
  },
  {
    id: 'redes-seguridad',
    title: 'Redes y Seguridad',
    description: 'Cableado estructurado avanzado y sistemas de videovigilancia industrial.',
    cta: 'Consultar Cobertura',
    Icon: Network,
    gradient: 'from-blue-900/20 to-transparent',
    accent: '#3B82F6',
  },
  {
    id: 'climatizacion-mantenimiento',
    title: 'Climatización y Mantenimiento',
    description: 'Equipos de aire acondicionado y mantenimiento preventivo/correctivo.',
    cta: 'Planes de Mantenimiento',
    Icon: ThermometerSnowflake,
    gradient: 'from-slate-700/20 to-transparent',
    accent: '#64748B',
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
          <motion.div
            variants={labelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-xs text-brand-blue font-bold tracking-[0.2em] uppercase border-l-2 border-brand-blue pl-3">
              Especialidades Técnicas
            </span>
            <motion.div
              className="h-[1px] bg-slate-800"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            />
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-heading text-white uppercase leading-[0.9] tracking-[-0.01em]"
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Capacidad Operativa y{' '}
              <br className="hidden md:block" />
              <span className="text-slate-500">Soluciones Integrales</span>
            </motion.h2>
          </div>

          <motion.p
            className="text-lg font-body text-slate-400 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ejecución técnica de alto nivel para el sector minero, pesquero y corporativo.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group relative flex flex-col justify-between bg-deep-slate p-8 border border-slate-800/50 hover:border-brand-blue/50 transition-colors duration-500 min-h-[320px] overflow-hidden cursor-pointer"
            >
              {/* Background gradient on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-b ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Card index number */}
              <div className="absolute top-5 right-6 font-heading text-[48px] leading-none text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500 select-none">
                0{idx + 1}
              </div>

              {/* Top content */}
              <div className="relative z-10">
                <motion.div
                  variants={imageHoverVariants}
                  className="mb-8 w-12 h-12 flex items-center justify-center bg-onyx-black border border-slate-800 text-slate-400 group-hover:text-brand-blue group-hover:border-brand-blue/40 transition-all duration-400"
                >
                  <service.Icon className="w-6 h-6" strokeWidth={1.5} />
                </motion.div>

                <h3 className="text-2xl font-heading text-white uppercase tracking-tight mb-4 group-hover:text-brand-blue transition-colors duration-400">
                  {service.title}
                </h3>

                <p className="font-body text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-400">
                  {service.description}
                </p>
              </div>

              {/* Bottom CTA */}
              <div className="relative z-10 mt-8 pt-6 border-t border-slate-800 group-hover:border-slate-700 transition-colors duration-400">
                <Link
                  href={`/servicios/${service.id}`}
                  className="inline-flex items-center gap-2 font-heading text-sm uppercase tracking-widest text-slate-500 group-hover:text-brand-red transition-colors duration-400"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>
              </div>

              {/* Bottom accent bar */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-brand-red"
                variants={{ rest: { width: '0%' }, hover: { width: '100%' } }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Left side accent */}
              <motion.div
                className="absolute top-0 left-0 w-[2px] bg-brand-blue"
                variants={{ rest: { height: '0%' }, hover: { height: '100%' } }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
