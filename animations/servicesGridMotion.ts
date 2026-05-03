import { Variants } from 'motion/react';

export const pageHeaderVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export const gridContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export const cardItemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export const imageScaleHover: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05, 
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};
