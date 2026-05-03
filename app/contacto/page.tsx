import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contacto Comercial y Operativo',
  description: 'Contáctese con RS Consorcio Industrial para requerimientos corporativos, licitaciones y mantenimiento industrial en Perú.',
};

export default function ContactPage() {
  return (
    <main className="bg-onyx-black flex flex-col">
      <ContactPageClient />
    </main>
  );
}

