import { Variants } from 'motion/react';

export const sectionVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export const cardVariants: Variants = {
  hidden: {
    y: 60,
    opacity: 0,
    filter: 'blur(8px)',
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  rest: {},
  hover: {},
};

export const imageHoverVariants: Variants = {
  rest: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: 1.1,
    rotate: 3,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
    },
  },
};

// For the accent line sweep at card bottom
export const lineVariants: Variants = {
  rest: { scaleX: 0, originX: 0 },
  hover: {
    scaleX: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Section label sweep in
export const labelVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
