'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { 
  useSmartHeader, 
  headerVariants, 
  mobileMenuVariants, 
  mobileNavContainer, 
  mobileLinkItem 
} from '@/animations/headerMotion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { hidden, isScrolled } = useSmartHeader();
  const pathname = usePathname();

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Contáctanos', href: '/contacto' },
  ];

  // Prevenir scroll en body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        variants={headerVariants}
        animate={hidden ? "hidden" : "visible"}
        initial="visible"
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-onyx-black/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 lg:h-24 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center gap-2 group">
            <Image 
              src="/img/empresa/rsconsorcioindustrial.png" 
              alt="RS Consorcio Industrial" 
              width={550} 
              height={84} 
              className="h-10 w-auto lg:w-[275px] lg:h-[42px] object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`font-body text-sm uppercase tracking-widest transition-colors duration-300 ${
                    isActive ? 'text-brand-blue font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:block relative z-50">
            <Link 
              href="/contacto"
              className="px-6 py-3 bg-brand-red text-white font-heading text-sm uppercase tracking-widest hover:bg-red-700 transition-colors focus:ring-2 focus:ring-brand-red ring-offset-2 ring-offset-onyx-black"
            >
              Cotizar Proyecto
            </Link>
          </div>

          {/* Hamburger Mobile */}
          <button
            title="Menu"
            className="lg:hidden relative z-50 p-2 text-white hover:text-brand-blue transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-40 bg-onyx-black flex flex-col justify-center px-6 sm:px-12"
          >
            <motion.nav 
              variants={mobileNavContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div variants={mobileLinkItem} key={link.name}>
                    <Link
                      href={link.href}
                      className={`font-heading text-4xl sm:text-5xl uppercase tracking-tight transition-colors ${
                        isActive ? 'text-brand-blue' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div variants={mobileLinkItem} className="mt-8">
                <Link
                  href="/contacto"
                  className="w-full inline-block bg-brand-red text-white text-center font-heading text-lg p-5 uppercase tracking-widest hover:bg-red-700 transition-colors"
                >
                  Cotizar Proyecto
                </Link>
              </motion.div>
              
              <motion.div variants={mobileLinkItem} className="mt-12 flex flex-col gap-2">
                <p className="font-heading text-xs text-slate-500 uppercase tracking-widest">Contacto Directo</p>
                <a href="tel:51954775211" className="font-body text-xl text-white">954 775 211</a>
                <a href="mailto:info@rsserviciosgenerales.com" className="font-body text-base text-brand-blue">info@rsserviciosgenerales.com</a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
