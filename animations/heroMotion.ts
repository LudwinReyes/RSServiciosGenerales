import { Variants } from 'motion/react';

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2, // Slight delay for the entire container
    },
  },
};

export const textRevealVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.16, 1, 0.3, 1], // Premium easing
      duration: 0.8,
    },
  },
};

export const fadeUpVariants: Variants = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.22, 1, 0.36, 1],
      duration: 0.8,
    },
  },
};

export const backgroundFadeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.05,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 1.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    }
  }
};
