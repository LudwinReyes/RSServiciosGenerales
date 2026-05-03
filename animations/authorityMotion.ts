'use client';

import { Variants, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect } from 'react';

export const manifestoContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const splitTextVariants: Variants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.16, 1, 0.3, 1],
      duration: 0.8,
    },
  },
};

export const statsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

export const statItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function useCounterAnimation(endValue: number, inView: boolean, duration: number = 2) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (inView) {
      animate(count, endValue, { 
        duration, 
        ease: [0.22, 1, 0.36, 1] 
      });
    }
  }, [count, endValue, inView, duration]);

  return rounded;
}
