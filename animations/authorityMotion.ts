import { Variants, useSpring, useTransform } from 'motion/react';
import { useEffect } from 'react';

export const manifestoContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

export const splitTextVariants: Variants = {
  hidden: {
    y: '110%',
    opacity: 0,
    clipPath: 'inset(0 0 100% 0)',
  },
  visible: {
    y: '0%',
    opacity: 1,
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      ease: [0.16, 1, 0.3, 1],
      duration: 1.0,
    },
  },
};

export const statsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

export const statItemVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
    scale: 0.95,
    filter: 'blur(6px)',
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      ease: [0.16, 1, 0.3, 1],
      duration: 0.8,
    },
  },
};

// Animated counter using spring physics
export function useCounterAnimation(end: number, isInView: boolean, decimals: number = 0) {
  const spring = useSpring(0, { stiffness: 60, damping: 20, mass: 0.8 });
  const display = useTransform(spring, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (isInView) {
      spring.set(end);
    }
  }, [isInView, end, spring]);

  return display;
}
