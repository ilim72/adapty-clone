'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { smoothEase } from '@/lib/animations';

const directions = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 }
};

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.7,
  once = true,
  amount = 0.3
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const initialOffset = directions[direction] || directions.up;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initialOffset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...initialOffset }}
      transition={{
        duration,
        delay,
        ease: smoothEase
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Wrapper for sections that should animate as a whole
export function AnimatedContainer({
  children,
  className = '',
  delay = 0,
  staggerChildren = 0.1
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
            delay,
            staggerChildren,
            delayChildren: delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Child component for AnimatedContainer
export function AnimatedItem({
  children,
  className = '',
  direction = 'up'
}) {
  const initialOffset = directions[direction] || directions.up;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...initialOffset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.5, ease: smoothEase }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
