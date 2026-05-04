import { Variants } from 'motion/react';

export const leftPanelVariants: Variants = {
  hidden: { x: -60, opacity: 0, filter: 'blur(8px)' },
  visible: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] }
  }
};

export const rightPanelVariants: Variants = {
  hidden: { x: 60, opacity: 0, filter: 'blur(8px)' },
  visible: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }
  }
};

export const formContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.35 }
  }
};

export const formItemVariants: Variants = {
  hidden: { y: 28, opacity: 0, filter: 'blur(4px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const successMessageVariants: Variants = {
  hidden: { scale: 0.85, opacity: 0, y: 20 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};
