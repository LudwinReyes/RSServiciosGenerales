import { Metadata } from 'next';
import NotFoundClient from './NotFoundClient';

export const metadata: Metadata = {
  title: '404 - Infraestructura No Localizada',
  description: 'El recurso técnico o servicio que intenta consultar no está disponible o ha sido reubicado.',
};

export default function NotFound() {
  return <NotFoundClient />;
}
