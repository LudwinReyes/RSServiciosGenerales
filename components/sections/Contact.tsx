'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Clock, Mail, Phone } from 'lucide-react';
import { 
  leftPanelVariants, 
  rightPanelVariants, 
  formContainerVariants, 
  formItemVariants, 
  successMessageVariants 
} from '@/animations/contactMotion';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simular llamada a API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="contacto" className="w-full bg-onyx-black py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 shadow-2xl">
          
          {/* Left Panel: Trust & Info */}
          <motion.div
            variants={leftPanelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-brand-blue p-10 sm:p-16 lg:p-20 text-white flex flex-col justify-between relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 mb-16 lg:mb-32">
              <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase border-l-2 border-white pl-3 mb-6">
                Contacto Directo
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading uppercase leading-[0.95] tracking-tight mb-6">
                Inicie su <br />Proyecto Hoy.
              </h2>
              <p className="font-body text-blue-100 text-lg lg:text-xl font-light leading-relaxed max-w-md">
                Respuesta técnica en menos de 24 horas para requerimientos corporativos e industriales.
              </p>
            </div>

            <div className="relative z-10 flex flex-col gap-8">
              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-white/10 rounded-full group-hover:bg-brand-red transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-heading text-xs uppercase tracking-widest text-blue-200 mb-1">Central Telefónica</p>
                  <p className="font-body text-lg font-medium">+51 (01) 000-0000</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-white/10 rounded-full group-hover:bg-brand-red transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-heading text-xs uppercase tracking-widest text-blue-200 mb-1">Cotizaciones y Proyectos</p>
                  <p className="font-body text-lg font-medium">proyectos@rs-serviciosgenerales.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-white/10 rounded-full group-hover:bg-brand-red transition-colors duration-300">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-heading text-xs uppercase tracking-widest text-blue-200 mb-1">Atención OPM</p>
                  <p className="font-body text-lg font-medium">Lunes a Sábado | 24/7 Emergencias</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Form */}
          <motion.div
            variants={rightPanelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-deep-slate p-10 sm:p-16 lg:p-20 relative flex items-center border-t lg:border-t-0 lg:border-l border-slate-800"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  variants={formContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
                  onSubmit={handleSubmit} 
                  className="w-full flex justify-center flex-col"
                >
                  <div className="space-y-6">
                    {/* RUC / Razón Social */}
                    <motion.div variants={formItemVariants} className="relative pb-5">
                       <div className="relative">
                         <input 
                           type="text" 
                           id="company" 
                           required
                           className="peer w-full bg-transparent border-b border-slate-700 text-white font-body text-base py-3 px-0 focus:outline-none focus:border-brand-blue focus:ring-0 transition-colors placeholder-transparent"
                           placeholder="RUC / Razón Social de la Empresa"
                         />
                         <label htmlFor="company" className="absolute left-0 top-3 text-slate-500 font-body text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-blue peer-valid:-top-3.5 peer-valid:text-xs peer-valid:text-slate-400 tracking-wide cursor-text">
                            RUC / Razón Social de la Empresa
                         </label>
                       </div>
                       {/* Box para mensajes de error sin layout shift */}
                       <div className="absolute bottom-0 left-0 h-5 w-full"></div>
                    </motion.div>

                    {/* Nombre del Contacto */}
                    <motion.div variants={formItemVariants} className="relative pb-5">
                       <div className="relative">
                         <input 
                           type="text" 
                           id="contact_name" 
                           required
                           className="peer w-full bg-transparent border-b border-slate-700 text-white font-body text-base py-3 px-0 focus:outline-none focus:border-brand-blue focus:ring-0 transition-colors placeholder-transparent"
                           placeholder="Nombre del Contacto Técnico"
                         />
                         <label htmlFor="contact_name" className="absolute left-0 top-3 text-slate-500 font-body text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-blue peer-valid:-top-3.5 peer-valid:text-xs peer-valid:text-slate-400 tracking-wide cursor-text">
                            Nombre del Contacto Técnico
                         </label>
                       </div>
                       <div className="absolute bottom-0 left-0 h-5 w-full"></div>
                    </motion.div>

                    {/* Correo Corporativo */}
                    <motion.div variants={formItemVariants} className="relative pb-5">
                       <div className="relative">
                         <input 
                           type="email" 
                           id="email" 
                           required
                           className="peer w-full bg-transparent border-b border-slate-700 text-white font-body text-base py-3 px-0 focus:outline-none focus:border-brand-blue focus:ring-0 transition-colors placeholder-transparent"
                           placeholder="Correo Corporativo"
                         />
                         <label htmlFor="email" className="absolute left-0 top-3 text-slate-500 font-body text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-blue peer-valid:-top-3.5 peer-valid:text-xs peer-valid:text-slate-400 tracking-wide cursor-text">
                            Correo Corporativo
                         </label>
                       </div>
                       <div className="absolute bottom-0 left-0 h-5 w-full"></div>
                    </motion.div>

                    {/* Tipo de Servicio */}
                    <motion.div variants={formItemVariants} className="relative pb-5 z-10">
                       <div className="relative">
                         <select 
                           id="service_type" 
                           required
                           className="peer w-full bg-transparent border-b border-slate-700 text-slate-300 font-body text-base py-3 px-0 focus:outline-none focus:border-brand-blue transition-colors appearance-none cursor-pointer placeholder-transparent invalid:text-slate-500"
                           defaultValue=""
                         >
                            <option value="" disabled className="bg-deep-slate text-slate-500">Seleccione el Tipo de Servicio Requerido</option>
                            <option value="electricos" className="bg-deep-slate text-slate-200">Sistemas Eléctricos y Media Tensión</option>
                            <option value="estructuras" className="bg-deep-slate text-slate-200">Estructuras Metálicas y Drywall</option>
                            <option value="climatizacion" className="bg-deep-slate text-slate-200">Climatización Industrial (HVAC)</option>
                            <option value="redes" className="bg-deep-slate text-slate-200">Redes, Cableado y CCTV</option>
                         </select>
                         <div className="absolute right-0 top-3 pointer-events-none text-slate-500">
                           <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                         </div>
                       </div>
                       <div className="absolute bottom-0 left-0 h-5 w-full"></div>
                    </motion.div>

                    {/* Detalles Técnicos */}
                    <motion.div variants={formItemVariants} className="relative pb-5">
                       <div className="relative">
                         <textarea 
                           id="details" 
                           required
                           rows={3}
                           className="peer w-full bg-transparent border-b border-slate-700 text-white font-body text-base py-3 px-0 focus:outline-none focus:border-brand-blue transition-colors placeholder-transparent resize-none"
                           placeholder="Detalles Técnicos del Proyecto"
                         ></textarea>
                         <label htmlFor="details" className="absolute left-0 top-3 text-slate-500 font-body text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-blue peer-valid:-top-3.5 peer-valid:text-xs peer-valid:text-slate-400 tracking-wide cursor-text">
                            Detalles Técnicos del Proyecto
                         </label>
                       </div>
                       <div className="absolute bottom-0 left-0 h-5 w-full"></div>
                    </motion.div>
                  </div>

                  {/* Submit Button */}
                  <motion.div variants={formItemVariants} className="mt-8">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full relative overflow-hidden bg-brand-red text-white font-heading text-lg tracking-widest uppercase py-5 transition-all hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 ring-offset-deep-slate disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      <span className={`relative z-10 transition-transform duration-300 ${isSubmitting ? 'translate-y-[-150%]' : 'translate-y-0'} block`}>
                        Enviar Requerimiento Técnico
                      </span>
                      <span className={`absolute inset-0 z-10 flex items-center justify-center transition-transform duration-300 ${isSubmitting ? 'translate-y-0' : 'translate-y-[150%]'}`}>
                        <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </span>
                    </button>
                  </motion.div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  variants={successMessageVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  className="w-full flex flex-col items-center justify-center text-center py-10 lg:py-20"
                >
                  <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-brand-blue" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-heading text-white uppercase tracking-tight mb-4">
                    Cotización Recibida
                  </h3>
                  <p className="font-body text-slate-400 max-w-sm mx-auto leading-relaxed mb-10">
                    Nuestro equipo de ingeniería evaluará su requerimiento y se pondrá en contacto con usted en las próximas 24 horas.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="px-8 py-4 border border-slate-700 font-heading text-sm uppercase tracking-widest text-slate-300 hover:text-white hover:border-brand-blue transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue ring-offset-deep-slate"
                  >
                    Enviar otro requerimiento
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
