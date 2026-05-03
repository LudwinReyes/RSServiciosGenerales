'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { 
  pageRevealLeftVariants, 
  pageRevealRightVariants, 
  staggerFormVariants, 
  formItemSlide 
} from '@/animations/contactPageMotion';

export default function ContactPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row pt-20 lg:pt-0">
      {/* Panel Izquierdo (40%) */}
      <motion.div 
        variants={pageRevealLeftVariants}
        initial="hidden"
        animate="visible"
        className="w-full lg:w-[40%] bg-brand-blue p-8 sm:p-12 lg:p-20 text-white flex flex-col justify-center min-h-[40vh] lg:min-h-screen relative z-10"
      >
        <div className="max-w-md mx-auto lg:mx-0 pt-10 sm:pt-0">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase border-l-2 border-white pl-3 mb-6">
            Contacto B2B
          </span>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading uppercase leading-[0.95] tracking-tight mb-12">
            ESTAMOS LISTOS PARA DESPLEGAR NUESTRA CAPACIDAD OPERATIVA.
          </h1>
          
          <div className="space-y-10 mt-12">
            <div className="flex items-start gap-5 group">
              <Phone className="w-7 h-7 mt-1 text-blue-200 group-hover:text-white transition-colors shrink-0" />
              <div>
                <p className="font-heading text-xs uppercase tracking-widest text-blue-200 mb-2">Central de Emergencias 24/7</p>
                <a href="tel:51954775211" className="font-body text-xl font-medium block hover:text-white transition-colors text-slate-100">954 775 211</a>
              </div>
            </div>
            
            <div className="flex items-start gap-5 group">
              <Mail className="w-7 h-7 mt-1 text-blue-200 group-hover:text-white transition-colors shrink-0" />
              <div>
                <p className="font-heading text-xs uppercase tracking-widest text-blue-200 mb-2">Correos Operativos</p>
                <a href="mailto:info@rsserviciosgenerales.com" className="font-body text-lg font-medium mb-1 block hover:text-white transition-colors text-slate-100">info@rsserviciosgenerales.com</a>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <MapPin className="w-7 h-7 mt-1 text-blue-200 group-hover:text-white transition-colors shrink-0" />
              <div>
                <p className="font-heading text-xs uppercase tracking-widest text-blue-200 mb-2">Sede Corporativa</p>
                <p className="font-body text-lg font-medium max-w-[320px]">
                  Av. Guillermo Dansey 351, Of. 250 - Cercado de Lima
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Panel Derecho (60%) */}
      <motion.div 
        variants={pageRevealRightVariants}
        initial="hidden"
        animate="visible"
        className="w-full lg:w-[60%] bg-onyx-black p-8 sm:p-12 lg:p-24 flex items-center justify-center min-h-[60vh] lg:min-h-screen"
      >
        <div className="w-full max-w-3xl">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form 
                key="form"
                variants={staggerFormVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, x: -30, transition: { duration: 0.3 } }}
                onSubmit={handleSubmit}
                className="w-full space-y-12"
              >
                {/* RUC */}
                <motion.div variants={formItemSlide} className="relative">
                  <input 
                    type="text" 
                    id="ruc" 
                    required
                    className="peer w-full bg-transparent border-b border-slate-700 text-white font-body text-xl lg:text-2xl py-4 px-0 focus:outline-none focus:border-brand-red focus:ring-0 transition-colors placeholder-transparent"
                    placeholder="RUC / Razón Social"
                  />
                  <label htmlFor="ruc" className="absolute left-0 top-4 text-slate-500 font-body text-lg transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-translate-y-6 peer-focus:scale-80 peer-focus:text-brand-red peer-valid:-translate-y-6 peer-valid:scale-80 peer-valid:text-slate-400 origin-left cursor-text">
                    RUC / Razón Social <span className="text-brand-red">*</span>
                  </label>
                </motion.div>

                {/* Nombre y Cargo */}
                <motion.div variants={formItemSlide} className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="peer w-full bg-transparent border-b border-slate-700 text-white font-body text-xl lg:text-2xl py-4 px-0 focus:outline-none focus:border-brand-red focus:ring-0 transition-colors placeholder-transparent"
                    placeholder="Nombre y Cargo (Ej: Gerente de Mantenimiento)"
                  />
                  <label htmlFor="name" className="absolute left-0 top-4 text-slate-500 font-body text-lg transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-translate-y-6 peer-focus:scale-80 peer-focus:text-brand-red peer-valid:-translate-y-6 peer-valid:scale-80 peer-valid:text-slate-400 origin-left cursor-text">
                    Nombre y Cargo (Ej: Gerente de Mantenimiento) <span className="text-brand-red">*</span>
                  </label>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Correo Corporativo */}
                  <motion.div variants={formItemSlide} className="relative">
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="peer w-full bg-transparent border-b border-slate-700 text-white font-body text-xl lg:text-2xl py-4 px-0 focus:outline-none focus:border-brand-red focus:ring-0 transition-colors placeholder-transparent"
                      placeholder="Correo Corporativo"
                    />
                    <label htmlFor="email" className="absolute left-0 top-4 text-slate-500 font-body text-lg transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-translate-y-6 peer-focus:scale-80 peer-focus:text-brand-red peer-valid:-translate-y-6 peer-valid:scale-80 peer-valid:text-slate-400 origin-left cursor-text">
                      Correo Corporativo <span className="text-brand-red">*</span>
                    </label>
                  </motion.div>

                  {/* Teléfono / WhatsApp */}
                  <motion.div variants={formItemSlide} className="relative">
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      className="peer w-full bg-transparent border-b border-slate-700 text-white font-body text-xl lg:text-2xl py-4 px-0 focus:outline-none focus:border-brand-red focus:ring-0 transition-colors placeholder-transparent"
                      placeholder="Teléfono / WhatsApp"
                    />
                    <label htmlFor="phone" className="absolute left-0 top-4 text-slate-500 font-body text-lg transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-translate-y-6 peer-focus:scale-80 peer-focus:text-brand-red peer-valid:-translate-y-6 peer-valid:scale-80 peer-valid:text-slate-400 origin-left cursor-text">
                      Teléfono / WhatsApp <span className="text-brand-red">*</span>
                    </label>
                  </motion.div>
                </div>

                {/* Sector */}
                <motion.div variants={formItemSlide} className="relative z-10 pt-4">
                  <select 
                    id="sector" 
                    required
                    className="peer w-full bg-transparent border-b border-slate-700 text-slate-300 font-body text-xl lg:text-2xl py-4 px-0 focus:outline-none focus:border-brand-red transition-colors appearance-none cursor-pointer placeholder-transparent invalid:text-slate-500"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-deep-slate text-slate-500">Seleccione su sector</option>
                    <option value="mineria" className="bg-deep-slate text-white">Minería</option>
                    <option value="pesca" className="bg-deep-slate text-white">Pesca</option>
                    <option value="corporativo" className="bg-deep-slate text-white">Corporativo / Retail</option>
                    <option value="construccion" className="bg-deep-slate text-white">Construcción</option>
                  </select>
                  <label htmlFor="sector" className="absolute left-0 -top-2 text-slate-400 font-body text-sm origin-left">
                    Sector Industrial <span className="text-brand-red">*</span>
                  </label>
                  <div className="absolute right-0 top-10 pointer-events-none text-slate-500">
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </motion.div>

                {/* Detalle Técnico */}
                <motion.div variants={formItemSlide} className="relative pt-4">
                  <textarea 
                    id="details" 
                    required
                    rows={4}
                    className="peer w-full bg-transparent border-b border-slate-700 text-white font-body text-xl py-4 px-0 focus:outline-none focus:border-brand-red transition-colors placeholder-transparent resize-none"
                    placeholder="Detalle Técnico del Requerimiento"
                  ></textarea>
                  <label htmlFor="details" className="absolute left-0 top-8 text-slate-500 font-body text-lg transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-8 peer-focus:-translate-y-6 peer-focus:scale-80 peer-focus:text-brand-red peer-valid:-translate-y-6 peer-valid:scale-80 peer-valid:text-slate-400 origin-left cursor-text">
                    Detalle Técnico del Requerimiento <span className="text-brand-red">*</span>
                  </label>
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={formItemSlide} className="pt-8">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden bg-brand-red text-white font-heading text-xl md:text-2xl tracking-widest uppercase py-6 lg:py-8 transition-all hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 ring-offset-onyx-black disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    <span className={`relative z-10 transition-transform duration-300 ${isSubmitting ? 'translate-y-[-150%]' : 'translate-y-0'} block`}>
                      Enviar Requerimiento
                    </span>
                    <span className={`absolute inset-0 z-10 flex items-center justify-center transition-transform duration-300 ${isSubmitting ? 'translate-y-0' : 'translate-y-[150%]'}`}>
                      <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "backOut" }}
                className="w-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-24 h-24 bg-brand-red/10 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-12 h-12 text-brand-red" />
                </div>
                <h3 className="text-3xl lg:text-5xl font-heading text-white uppercase tracking-tight mb-6">
                  Requerimiento Ingresado
                </h3>
                <p className="font-body text-slate-400 text-lg lg:text-xl max-w-lg mx-auto leading-relaxed mb-12">
                  Su solicitud ha sido derivada al departamento de ingeniería. Operaciones se comunicará al contacto provisto a la brevedad.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-10 py-5 border-2 border-slate-700 font-heading text-base uppercase tracking-widest text-white hover:border-brand-red transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red ring-offset-onyx-black"
                >
                  Nuevo Requerimiento
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
