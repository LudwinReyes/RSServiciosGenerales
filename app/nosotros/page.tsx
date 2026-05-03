import { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conozca la trayectoria técnica y estándares operativos de RS Consorcio Industrial Peru SAC.',
};

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-onyx-black flex flex-col pt-32 lg:pt-40">
      <AboutClient />
      <Footer />
    </main>
  );
}
