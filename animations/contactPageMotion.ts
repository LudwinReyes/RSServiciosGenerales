import { Variants } from 'motion/react';

export const pageRevealLeftVariants: Variants = {
  hidden: { x: '-20%', opacity: 0 },
  visible: { 
    x: '0%', 
    opacity: 1, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
  }
};

export const pageRevealRightVariants: Variants = {
  hidden: { x: '20%', opacity: 0 },
  visible: { 
    x: '0%', 
    opacity: 1, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 } 
  }
};

export const staggerFormVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const formItemSlide: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

// Se exporta la variante solicitada para animación de label estricta con Framer Motion, 
// aunque en producción (ContactPageClient) se utilice Tailwind peer-focus 
// para garantizar Cero Reflow de forma nativa en el explorador.
export const inputFocusVariants: Variants = {
  rest: { y: 0, scale: 1 },
  focused: { 
    y: -24, 
    scale: 0.8, 
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const } 
  }
};
