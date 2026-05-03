import { Variants, MotionValue, useTransform } from 'motion/react';

export const projectHeaderVariants: Variants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function useStackedCards(scrollYProgress: MotionValue<number>, index: number, totalCards: number) {
  const isLast = index === totalCards - 1;

  // Empezar a encoger cuando el progreso del contenedor sobrepasa a esta tarjeta
  // El index 0 se encogerá desde 0, el index 1 desde 0.33, index 2 desde 0.66
  const startShrink = index / totalCards;
  const endShrink = 1;

  const finalScale = isLast ? 1 : Math.max(1 - ((totalCards - index) * 0.05), 0.85);
  const finalOpacity = isLast ? 1 : 0.3;

  const scale = useTransform(
    scrollYProgress,
    [startShrink, endShrink],
    [1, finalScale]
  );

  const opacity = useTransform(
    scrollYProgress,
    [startShrink, endShrink],
    [1, finalOpacity]
  );

  return { scale, opacity };
}
