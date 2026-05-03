import { Variants } from 'motion/react';

export const widgetEntryVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.5 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: "spring", stiffness: 200, damping: 15, delay: 2 } 
  }
};

export const pulseVariants: Variants = {
  rest: { scale: 1, boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)" },
  pulse: { 
    scale: 1.05, 
    boxShadow: "0 0 0 15px rgba(37, 211, 102, 0)",
    transition: { 
      duration: 2.5, 
      repeat: Infinity, 
      ease: "easeInOut" 
    } 
  },
  hover: {
    scale: 1.1,
    boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)",
    transition: { duration: 0.3 }
  }
};

export const tooltipVariants: Variants = {
  hidden: { opacity: 0, x: 10, pointerEvents: "none" },
  visible: { 
    opacity: 1, 
    x: 0, 
    pointerEvents: "auto",
    transition: { duration: 0.3, ease: "easeOut" } 
  }
};
