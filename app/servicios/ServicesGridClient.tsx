'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Service } from '@/data/servicesData';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0, filter: 'blur(8px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ServicesGridClient({ services }: { services: Service[] }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
    >
      {services.map((service, idx) => {
        const isBlue = service.accentColor === 'blue';
        const accentClass = isBlue ? 'bg-brand-blue' : 'bg-brand-red';
        const accentText = isBlue ? 'text-brand-blue' : 'text-brand-red';
        const accentBorder = isBlue ? 'group-hover:border-brand-blue/50' : 'group-hover:border-brand-red/50';

        return (
          <motion.div key={service.id} variants={cardVariants}>
            <Link href={`/servicios/${service.slug}`} className="block group h-full">
              <div className={`relative flex flex-col h-full bg-deep-slate border border-slate-800/80 ${accentBorder} overflow-hidden transition-all duration-500`}>

                {/* ── Image with overlay ── */}
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  {/* Placeholder overlay (visible when no image) */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 to-onyx-black">
                    <span className="font-heading text-[80px] leading-none text-white/[0.03] select-none">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    onError={() => {/* silently fall back to bg */}}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-slate via-deep-slate/40 to-transparent" />

                  {/* Tag badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`${accentClass} text-white font-heading text-[10px] tracking-[0.2em] uppercase px-3 py-1`}>
                      {service.tag}
                    </span>
                  </div>

                  {/* Number */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="font-heading text-xs text-white/30 tracking-widest">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* ── Content ── */}
                <div className="flex flex-col flex-1 p-7">
                  <h3 className={`text-xl font-heading text-white uppercase tracking-tight mb-3 ${accentText} transition-colors duration-300 leading-tight`}
                    style={{ color: 'white' }}
                  >
                    <span className="group-hover:text-inherit transition-colors duration-300">
                      {service.title}
                    </span>
                  </h3>

                  <p className="font-body text-sm text-slate-400 leading-relaxed mb-6 flex-1 group-hover:text-slate-300 transition-colors duration-300">
                    {service.shortDescription}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-7">
                    {service.bullets.slice(0, 3).map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <div className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${accentClass}`} />
                        <span className="font-body text-xs text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className={`flex items-center gap-2 pt-5 border-t border-slate-800 group-hover:border-slate-700 transition-colors duration-300`}>
                    <span className={`font-heading text-xs uppercase tracking-widest text-slate-500 group-hover:${accentText} transition-colors duration-300`}>
                      Ver Detalles
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 text-slate-600 group-hover:${accentText} transform group-hover:translate-x-1.5 transition-all duration-300`} />
                  </div>
                </div>

                {/* Bottom accent bar */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-[2px] ${accentClass}`}
                  initial={{ width: '0%' }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
