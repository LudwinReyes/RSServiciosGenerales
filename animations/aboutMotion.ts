import { Variants } from 'motion/react';

export const heroContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

export const heroTextVariants: Variants = {
  hidden: {
    y: '110%',
    clipPath: 'inset(0 0 100% 0)',
  },
  visible: {
    y: '0%',
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      duration: 1.1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const pillarsGridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const pillarCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const imageRevealVariants: Variants = {
  hidden: {
    clipPath: 'inset(0 100% 0 0)',
    opacity: 0,
  },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const lineRevealVariants: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.0,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.4,
    },
  },
};

export const timelineItemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
