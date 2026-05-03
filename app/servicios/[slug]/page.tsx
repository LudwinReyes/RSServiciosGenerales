import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/data/servicesData';
import DynamicServiceClient from './DynamicServiceClient';
import Footer from '@/components/layout/Footer';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) {
    return {
      title: 'Servicio No Encontrado',
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailsPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-onyx-black min-h-screen flex flex-col">
      <DynamicServiceClient service={service} />
      <Footer />
    </main>
  );
}
