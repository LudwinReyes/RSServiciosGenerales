'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {
  ctaContainerVariants,
  footerGridVariants,
  columnVariants,
  linkItemVariants,
} from '@/animations/footerMotion';

const currentYear = new Date().getFullYear();

const coreServices = [
  { label: 'Sistemas Eléctricos', href: '/servicios/sistemas-electricos' },
  { label: 'Estructuras Metálicas', href: '/servicios/estructuras-drywall' },
  { label: 'Climatización', href: '/servicios/climatizacion-mantenimiento' },
  { label: 'Redes y Seguridad', href: '/servicios/redes-seguridad' },
];

export default function Footer() {
  return (
    <footer className="relative bg-onyx-black mt-24">
      {/* Mega CTA Block (Floats slightly above the footer grid) */}
      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-24 mb-16 z-10">
        <motion.div
          variants={ctaContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative bg-deep-slate border border-slate-800 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 overflow-hidden shadow-2xl shadow-black/50"
        >
          {/* Subtle top/bottom glow (brand-blue) */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent"></div>
          
          <div className="flex-1 max-w-2xl relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white uppercase tracking-tight mb-4">
              ¿Listo para escalar la <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">infraestructura</span> de su empresa?
            </h2>
            <p className="text-base md:text-lg font-body text-slate-300 font-light leading-relaxed">
              Hablemos de su próximo proyecto. Cotizaciones técnicas precisas para el sector industrial, pesquero y corporativo en todo el Perú.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <button className="w-full md:w-auto group flex items-center justify-center gap-3 px-8 md:px-10 py-5 bg-brand-red text-white font-heading text-lg tracking-widest uppercase transition-transform duration-300 hover:scale-105 active:scale-95 hover:bg-red-700 shadow-xl shadow-brand-red/10 focus:outline-none ring-offset-deep-slate focus:ring-2 focus:ring-brand-red focus:ring-offset-2">
              <span>Solicitar Cotización Técnica</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-8">
        <motion.div
          variants={footerGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-slate-800/50 pb-12"
        >
          {/* Column 1: Brand */}
          <motion.div variants={columnVariants} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-brand-red flex items-center justify-center font-heading text-lg text-white">RS</div>
              <span className="font-heading text-lg tracking-widest text-white">CONSORCIO INDUSTRIAL PERU</span>
            </div>
            <p className="font-body text-sm text-slate-400 leading-relaxed font-light mb-6">
              Sólida experiencia ejecutando proyectos de infraestructura, electrificación y mantenimiento corporativo. Excelencia técnica y seguridad para la industria peruana.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 flex items-center justify-center border border-slate-700 text-slate-400 hover:text-white hover:border-brand-blue cursor-pointer transition-colors duration-300">
                <span className="font-heading text-xs">IN</span>
              </div>
              <div className="w-8 h-8 flex items-center justify-center border border-slate-700 text-slate-400 hover:text-white hover:border-brand-blue cursor-pointer transition-colors duration-300">
                <span className="font-heading text-xs">FB</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Empty Spacer for Layout Balance (Optional) or can span Core Services wider */}
          
          {/* Column 2: Core Services */}
          <motion.div variants={columnVariants} className="lg:col-span-1 lg:col-start-2">
            <h3 className="font-heading text-sm text-white tracking-[0.2em] uppercase mb-6 border-l-2 border-brand-red pl-3">
              Servicios Especializados
            </h3>
            <ul className="space-y-4">
              {coreServices.map((service, index) => (
                <li key={index}>
                  <motion.div 
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className="flex flex-col"
                  >
                    <Link 
                      href={service.href} 
                      className="group flex flex-col cursor-pointer"
                    >
                      <motion.span 
                        variants={linkItemVariants}
                        className="font-body text-sm text-slate-400 group-hover:text-white transition-colors duration-300"
                      >
                        {service.label}
                      </motion.span>
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact */}
          <motion.div variants={columnVariants} className="lg:col-span-2 lg:col-start-3">
            <h3 className="font-heading text-sm text-white tracking-[0.2em] uppercase mb-6 border-l-2 border-brand-blue pl-3">
              Contacto Directo OPM
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-brand-red mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-heading text-xs text-slate-300 tracking-widest uppercase mb-1">Dirección Corporativa</h4>
                  <p className="font-body text-sm text-slate-400">Av. Guillermo Dansey 351, Of. 250<br/>Cercado de Lima</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <Phone className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-heading text-xs text-slate-300 tracking-widest uppercase mb-1">Emergencias 24/7</h4>
                  <p className="font-body text-sm text-slate-400">954 775 211<br/>Atención ininterrumpida OPM</p>
                </div>
              </div>

              <div className="flex gap-4 items-start sm:col-span-2">
                <Mail className="w-5 h-5 text-slate-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-heading text-xs text-slate-300 tracking-widest uppercase mb-1">Cuentas Corporativas</h4>
                  <p className="font-body text-sm text-brand-blue hover:text-white transition-colors cursor-pointer">
                    info@rsserviciosgenerales.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-body text-xs text-slate-600">
            &copy; {currentYear} RS Consorcio Industrial Peru SAC. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 font-body text-xs text-slate-600">
            <span className="hover:text-slate-400 cursor-pointer transition-colors duration-300">Políticas de Privacidad</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors duration-300">Términos de Servicio</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
