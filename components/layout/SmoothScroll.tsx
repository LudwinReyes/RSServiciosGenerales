'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import { ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis root options={{ lerp: 0.08, wheelMultiplier: 1 }}>
      {children as any}
    </ReactLenis>
  );
}
