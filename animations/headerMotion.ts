import { useState } from 'react';
import { useScroll, useMotionValueEvent, Variants } from 'motion/react';

export function useSmartHeader() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Si ha scrolleado más de 50px, activa el fondo
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Ocultar al bajar, mostrar al subir
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return { hidden, isScrolled };
}

export const headerVariants: Variants = {
  visible: { y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  hidden: { y: "-100%", transition: { duration: 0.3, ease: 'easeIn' } }
};

export const mobileMenuVariants: Variants = {
  hidden: { 
    x: "100%", 
    opacity: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
  },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
  }
};

export const mobileNavContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const mobileLinkItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};
