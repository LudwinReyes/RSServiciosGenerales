'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Wrench } from 'lucide-react';
import { Service } from '@/data/servicesData';
import { gridContainerVariants, cardItemVariants } from '@/animations/servicesGridMotion';

export default function ServicesGridClient({ services }: { services: Service[] }) {
  return (
    <motion.div 
      variants={gridContainerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
    >
      {services.map((service) => (
        <Link href={`/servicios/${service.slug}`} key={service.id} className="block group">
          <motion.div 
            variants={cardItemVariants}
            className="h-full bg-deep-slate border border-slate-800 p-8 hover:border-brand-blue transition-colors duration-300 flex flex-col relative overflow-hidden"
          >
            {/* Elemento decorativo hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full" />
            
            <div className="mb-6 inline-block bg-white/5 p-4 rounded-lg group-hover:bg-brand-blue/10 transition-colors duration-300">
              <motion.div
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.1, rotate: 5, transition: { duration: 0.3 } }
                }}
                initial="rest"
                whileHover="hover"
              >
                <Wrench className="w-8 h-8 text-brand-blue" />
              </motion.div>
            </div>
            
            <h3 className="text-xl font-heading text-white uppercase tracking-tight mb-4 group-hover:text-brand-blue transition-colors duration-300">
              {service.title}
            </h3>
            
            <p className="font-body text-slate-400 text-sm leading-relaxed mb-8 flex-1">
              {service.shortDescription}
            </p>
            
            <div className="flex items-center text-xs font-heading tracking-widest uppercase text-slate-300 group-hover:text-brand-red transition-colors duration-300 mt-auto">
              Ver Detalles <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
}
