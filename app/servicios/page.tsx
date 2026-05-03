import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { services } from '@/data/servicesData';
import ServicesGridClient from './ServicesGridClient';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Nuestros Servicios',
  description: 'Explora todos los servicios técnicos y corporativos de arquitectura e infraestructura que ofrece RS Consorcio Industrial.',
};

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-onyx-black flex flex-col pt-24 lg:pt-32">
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        
        {/* Header estático SSR safe */}
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center text-sm font-heading tracking-widest text-slate-400 hover:text-brand-blue transition-colors uppercase mb-8">
            <ChevronRight className="w-4 h-4 mr-1 rotate-180" />
            Volver al Inicio
          </Link>
          <div className="h-px w-full bg-slate-800 mb-8" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white uppercase tracking-tight mb-6">
            Catálogo de Servicios <span className="text-brand-blue">Especializados</span>
          </h1>
          <p className="font-body text-slate-300 text-lg md:text-xl max-w-3xl leading-relaxed">
            Implementamos infraestructura robusta bajo estrictos estándares B2B. Seleccione una especialidad para conocer los detalles técnicos y proyecciones operativas.
          </p>
        </div>

        {/* Grid de servicios con animaciones de cliente */}
        <ServicesGridClient services={services} />
        
      </div>
      <Footer />
    </main>
  );
}
