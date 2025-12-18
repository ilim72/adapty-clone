'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { smoothEase } from '@/lib/animations';

export default function StaggeredGrid({
  children,
  className = '',
  staggerDelay = 0.1,
  delayChildren = 0.1,
  once = true
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggeredItem({
  children,
  className = '',
  direction = 'up'
}) {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    scale: { scale: 0.9, y: 0, x: 0 }
  };

  const offset = directions[direction] || directions.up;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          transition: { duration: 0.5, ease: smoothEase }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Specialized grid for cards with hover effects
export function AnimatedCard({
  children,
  className = '',
  hoverEffect = true
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: smoothEase }
        }
      }}
      whileHover={hoverEffect ? { y: -8, transition: { duration: 0.3 } } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
