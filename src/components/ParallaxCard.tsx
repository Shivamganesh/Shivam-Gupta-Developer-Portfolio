
'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

type ParallaxCardProps = {
  children: React.ReactNode;
  speed: number;
};

export const ParallaxCard = ({ children, speed }: ParallaxCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollY, [0, 1000], [0, -speed]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="relative mb-10"
    >
      {children}
    </motion.div>
  );
};
