import { Variants } from 'motion/react';

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

export const textRevealVariants: Variants = {
  hidden: {
    y: 80,
    opacity: 0,
    clipPath: 'inset(100% 0% 0% 0%)',
  },
  visible: {
    y: 0,
    opacity: 1,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      ease: [0.16, 1, 0.3, 1] as const,
      duration: 1.0,
    },
  },
  exit: {
    y: -40,
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeIn' },
  },
};

export const fadeUpVariants: Variants = {
  hidden: {
    y: 40,
    opacity: 0,
    filter: 'blur(4px)',
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      ease: [0.22, 1, 0.36, 1] as const,
      duration: 0.9,
    },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export const backgroundFadeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.08,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      duration: 1.8,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    transition: {
      ease: 'easeInOut',
      duration: 0.9,
    },
  },
};

// Ken Burns continuous zoom on background image
export const kenBurnsVariants: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: 1.06,
    transition: {
      duration: 7,
      ease: 'linear',
    },
  },
};

// Decorative horizontal line that sweeps in
export const lineRevealVariants: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.6,
    },
  },
};

// Badge chip animation
export const badgeVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.22, 1, 0.36, 1] as const,
      duration: 0.7,
    },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: { duration: 0.3 },
  },
};

// Slide indicator dots
export const dotVariants: Variants = {
  inactive: { width: '16px', opacity: 0.4 },
  active: {
    width: '48px',
    opacity: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};
