import { Variants } from 'motion/react';

export const leftPanelVariants: Variants = {
  hidden: { x: -40, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export const rightPanelVariants: Variants = {
  hidden: { x: 40, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 } 
  }
};

export const formContainerVariants: Variants = {
  hidden: {},
  visible: { 
    transition: { staggerChildren: 0.1, delayChildren: 0.3 } 
  }
};

export const formItemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export const successMessageVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 0.5, ease: "backOut" } 
  }
};
