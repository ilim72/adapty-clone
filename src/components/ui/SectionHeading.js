'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { smoothEase, fadeInUp, staggerContainer } from '@/lib/animations';

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  gradient = false,
  badge = null,
  className = ''
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={`${centered ? 'text-center' : ''} mb-12 md:mb-16 ${className}`}
    >
      {/* Decorative gradient line */}
      {centered && (
        <motion.div
          variants={fadeInUp}
          className="flex justify-center mb-6"
        >
          <div className="w-16 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full" />
        </motion.div>
      )}

      {/* Optional badge */}
      {badge && (
        <motion.div variants={fadeInUp} className="mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-light text-primary text-sm font-medium rounded-full">
            {badge}
          </span>
        </motion.div>
      )}

      {/* Title */}
      <motion.h2
        variants={fadeInUp}
        className={`
          text-3xl md:text-4xl lg:text-display-sm font-bold tracking-tight mb-4
          ${gradient ? 'gradient-text' : 'text-text-primary'}
        `}
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

// Compact variant for smaller sections
export function SectionHeadingCompact({
  title,
  subtitle,
  className = ''
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: smoothEase }}
      className={`mb-8 ${className}`}
    >
      <h3 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight mb-2">
        {title}
      </h3>
      {subtitle && (
        <p className="text-base text-text-secondary">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
