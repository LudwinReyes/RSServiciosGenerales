import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { services } from '@/data/servicesData';
import ServicesGridClient from './ServicesGridClient';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Nuestros Servicios',
  description: 'Explora todos los servicios técnicos e industriales de RS Consorcio: electricidad, estructuras, HVAC, redes, construcción y más.',
};

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-onyx-black flex flex-col">

      {/* ── Page Hero ── */}
      <section className="relative w-full pt-36 pb-20 lg:pt-44 lg:pb-28 border-b border-slate-800 overflow-hidden">
        {/* Decorative grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/5 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-heading tracking-widest text-slate-500 uppercase mb-10">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-blue">Servicios</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <span className="inline-block text-xs text-brand-red font-bold tracking-[0.3em] uppercase border-l-2 border-brand-red pl-3 mb-6">
                Especialidades Técnicas
              </span>
              <h1 className="text-[44px] sm:text-[60px] lg:text-[76px] font-heading text-white uppercase leading-[0.88] tracking-tight">
                Catálogo de<br />
                <span className="text-slate-500">Servicios</span><br />
                Especializados
              </h1>
            </div>
            <div className="flex flex-col gap-6 pb-2">
              <p className="font-body text-slate-300 text-lg leading-relaxed font-light max-w-xl">
                Implementamos infraestructura robusta bajo estrictos estándares B2B. Seleccione una especialidad para conocer los detalles técnicos.
              </p>
              <div className="flex items-center gap-8">
                <div>
                  <div className="font-heading text-3xl text-brand-blue">13</div>
                  <div className="font-body text-xs text-slate-500 uppercase tracking-widest">Especialidades</div>
                </div>
                <div className="w-[1px] h-10 bg-slate-800" />
                <div>
                  <div className="font-heading text-3xl text-brand-blue">+10</div>
                  <div className="font-body text-xs text-slate-500 uppercase tracking-widest">Años de experiencia</div>
                </div>
                <div className="w-[1px] h-10 bg-slate-800" />
                <div>
                  <div className="font-heading text-3xl text-brand-blue">24/7</div>
                  <div className="font-body text-xs text-slate-500 uppercase tracking-widest">Soporte técnico</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <ServicesGridClient services={services} />
      </section>

      {/* ── Bottom CTA band ── */}
      <section className="w-full bg-deep-slate border-t border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-heading text-2xl lg:text-3xl text-white uppercase tracking-tight mb-2">
              ¿No encuentra lo que busca?
            </h2>
            <p className="font-body text-slate-400 text-sm">Contáctenos directamente para soluciones personalizadas.</p>
          </div>
          <Link
            href="/contacto"
            className="shrink-0 px-10 py-5 bg-brand-red text-white font-heading text-sm uppercase tracking-widest hover:bg-red-700 transition-colors duration-300 focus:outline-none"
          >
            Solicitar Cotización
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
