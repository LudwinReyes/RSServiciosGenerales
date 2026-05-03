'use client';

import { motion } from 'motion/react';
import { Settings, ShieldCheck, Map } from 'lucide-react';
import { 
  heroContainerVariants, 
  heroTextVariants, 
  fadeUpVariants,
  pillarsGridVariants,
  pillarCardVariants
} from '@/animations/aboutMotion';

export default function AboutClient() {
  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      {/* Hero Interno */}
      <motion.div 
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        className="mb-24 lg:mb-32 max-w-6xl"
      >
        <div className="overflow-hidden mb-6">
          <motion.span 
            variants={heroTextVariants}
            className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-brand-red border-l-2 border-brand-red pl-3"
          >
            Nuestra Identidad Corporativa
          </motion.span>
        </div>
        
        <h1 className="text-[40px] sm:text-[60px] lg:text-[80px] xl:text-[90px] font-heading uppercase leading-[0.85] tracking-tight mb-12">
          <div className="overflow-hidden pb-2"><motion.div variants={heroTextVariants}>NO SOMOS CONTRATISTAS.</motion.div></div>
          <div className="overflow-hidden pb-2"><motion.div variants={heroTextVariants} className="text-slate-500">SOMOS SU SOCIO ESTRATÉGICO</motion.div></div>
          <div className="overflow-hidden pb-2"><motion.div variants={heroTextVariants} className="text-brand-blue">EN INFRAESTRUCTURA.</motion.div></div>
        </h1>
        
        <div className="overflow-hidden">
          <motion.p 
            variants={fadeUpVariants}
            className="font-body text-slate-300 text-lg lg:text-2xl font-light leading-relaxed max-w-4xl"
          >
            En RS Consorcio Industrial Perú, centralizamos la ingeniería, ejecución y mantenimiento operativo. Nacimos para resolver la fragmentación técnica en los sectores más exigentes del país.
          </motion.p>
        </div>
      </motion.div>

      {/* Pilares Operativos */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-12 lg:mb-24"
      >
        <motion.div variants={fadeUpVariants} className="mb-12 lg:mb-16">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-slate-800"></div>
            <h2 className="text-2xl lg:text-3xl font-heading text-white uppercase tracking-widest">Nuestros Estándares</h2>
          </div>
        </motion.div>

        <motion.div 
          variants={pillarsGridVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Pilar 1 */}
          <motion.div 
            variants={pillarCardVariants}
            whileHover={{ y: -5, borderColor: '#0077B6', boxShadow: '0 10px 30px -10px rgba(0, 119, 182, 0.2)' }}
            className="bg-deep-slate border border-slate-800 p-8 lg:p-12 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-onyx-black flex items-center justify-center mb-8 border border-slate-800 group-hover:border-brand-blue transition-colors duration-300">
              <Settings className="w-7 h-7 text-brand-blue" />
            </div>
            <h3 className="text-xl font-heading text-white uppercase tracking-tight mb-4 group-hover:text-brand-blue transition-colors duration-300">
              Cero Fricción Operativa
            </h3>
            <p className="font-body text-slate-400 text-sm lg:text-base leading-relaxed">
              Gestión integral desde la obra civil hasta la puesta en marcha eléctrica. Un único punto de contacto, responsabilidad centralizada y control de calidad total.
            </p>
          </motion.div>

          {/* Pilar 2 */}
          <motion.div 
            variants={pillarCardVariants}
            whileHover={{ y: -5, borderColor: '#D91E2E', boxShadow: '0 10px 30px -10px rgba(217, 30, 46, 0.2)' }}
            className="bg-deep-slate border border-slate-800 p-8 lg:p-12 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-onyx-black flex items-center justify-center mb-8 border border-slate-800 group-hover:border-brand-red transition-colors duration-300">
              <ShieldCheck className="w-7 h-7 text-brand-red" />
            </div>
            <h3 className="text-xl font-heading text-white uppercase tracking-tight mb-4 group-hover:text-brand-red transition-colors duration-300">
              Protocolos SSOMA Inquebrantables
            </h3>
            <p className="font-body text-slate-400 text-sm lg:text-base leading-relaxed">
              Seguridad industrial y salud ocupacional como regla de negocio, no como opción. Mitigamos el riesgo en cada fase constructiva y de mantenimiento.
            </p>
          </motion.div>

          {/* Pilar 3 */}
          <motion.div 
            variants={pillarCardVariants}
            whileHover={{ y: -5, borderColor: '#0077B6', boxShadow: '0 10px 30px -10px rgba(0, 119, 182, 0.2)' }}
            className="bg-deep-slate border border-slate-800 p-8 lg:p-12 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-onyx-black flex items-center justify-center mb-8 border border-slate-800 group-hover:border-brand-blue transition-colors duration-300">
              <Map className="w-7 h-7 text-brand-blue" />
            </div>
            <h3 className="text-xl font-heading text-white uppercase tracking-tight mb-4 group-hover:text-brand-blue transition-colors duration-300">
              Cobertura a Escala
            </h3>
            <p className="font-body text-slate-400 text-sm lg:text-base leading-relaxed">
              Capacidad logística probada para el despliegue técnico en plantas pesqueras, campamentos mineros remotos y centros logísticos corporativos a nivel nacional.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
