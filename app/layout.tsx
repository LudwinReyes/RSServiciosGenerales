import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Header from '@/components/layout/Header';
import WhatsAppWidget from '@/components/ui/WhatsAppWidget';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | RS Consorcio Industrial',
    default: 'RS Consorcio Industrial | Servicios Generales y Arquitectura Corporativa',
  },
  description: 'Soluciones integrales de infraestructura para el sector minero, pesquero y corporativo en el Perú. Especialistas en sistemas eléctricos, estructuras metálicas y mantenimiento.',
  keywords: ['servicios generales industriales', 'mantenimiento eléctrico corporativo', 'estructuras metálicas', 'consorcio industrial peru', 'licitaciones b2b', 'drywall corporativo', 'Lima', 'Perú'],
  openGraph: {
    title: 'RS Consorcio Industrial | Servicios Generales',
    description: 'Soluciones integrales de infraestructura para el sector minero, pesquero y corporativo en el Perú.',
    url: 'https://www.rs-consorcio.pe',
    siteName: 'RS Consorcio Industrial Peru SAC',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RS Consorcio Industrial Portada',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RS Consorcio Industrial | Servicios Generales',
    description: 'Soluciones integrales de infraestructura para el sector minero, pesquero y corporativo en el Perú.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/img/empresa/favicon.png',
    shortcut: '/img/empresa/favicon.png',
    apple: '/img/empresa/favicon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'RS Consorcio Industrial Peru SAC',
  description: 'Soluciones integrales de infraestructura para el sector minero, pesquero y corporativo en el Perú. Especialistas en sistemas eléctricos, estructuras metálicas y mantenimiento.',
  areaServed: 'PE',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lima',
    addressCountry: 'PE'
  },
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Sistemas Eléctricos'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Estructuras Metálicas'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Climatización'
      }
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-PE" className={`${inter.variable} ${oswald.variable}`}>
      <body suppressHydrationWarning>
        <SmoothScroll>
          <Header />
          {children}
        </SmoothScroll>
        <WhatsAppWidget />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
