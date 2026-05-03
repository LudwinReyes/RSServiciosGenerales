'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { widgetEntryVariants, pulseVariants, tooltipVariants } from '@/animations/whatsappMotion';

export default function WhatsAppWidget() {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Montar el widget 2 segundos después para no afectar LCP
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  // Enrutamiento inteligente del mensaje
  let message = "Hola RS Consorcio, solicito información general sobre sus servicios.";
  
  if (pathname.includes('/servicios/')) {
    const serviceSlug = pathname.split('/').pop() || '';
    const formattedService = serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    message = `Hola RS Consorcio, solicito información/soporte de emergencia para el servicio de ${formattedService}.`;
  } else if (pathname === '/contacto') {
    message = "Hola RS Consorcio, me gustaría cotizar un proyecto industrial con ustedes.";
  } else if (pathname === '/nosotros') {
    message = "Hola RS Consorcio, me gustaría conocer más sobre sus estándares constructivos e integrarlos a mi red de proveedores.";
  }

  const encodedMessage = encodeURIComponent(message);
  // Reemplazar con el número de teléfono B2B oficial
  const phoneNumber = "51954775211"; 
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <motion.div
      variants={widgetEntryVariants}
      initial="hidden"
      animate="visible"
      className="fixed bottom-6 right-6 z-[60] flex items-center"
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center"
        initial="rest"
        animate="pulse"
        whileHover="hover"
      >
        <motion.div
          variants={tooltipVariants}
          className="absolute right-full mr-4 w-max bg-deep-slate border border-slate-700 text-white font-body text-xs font-bold uppercase tracking-widest px-4 py-3 rounded shadow-2xl"
        >
          Soporte Técnico 24/7
          {/* Triángulo del tooltip */}
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-slate-700"></div>
          <div className="absolute top-1/2 -right-[3px] -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-deep-slate"></div>
        </motion.div>

        <motion.div
          variants={pulseVariants}
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center border-2 border-onyx-black shadow-lg"
        >
          {/* Ícono Oficial de WhatsApp */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-8 h-8"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.062-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
        </motion.div>
      </motion.a>
    </motion.div>
  );
}
