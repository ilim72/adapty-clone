'use client';

import { motion } from 'framer-motion';
import { buttonHover, buttonTap } from '@/lib/animations';

const variants = {
  primary: 'bg-gradient-to-r from-primary to-accent text-white shadow-button hover:shadow-button-hover',
  secondary: 'border-2 border-primary text-primary hover:bg-primary-light',
  ghost: 'text-text-secondary hover:text-text-primary hover:bg-surface-hover',
  outline: 'border border-border text-text-primary hover:border-primary hover:text-primary',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) {
  return (
    <motion.button
      whileHover={disabled ? undefined : buttonHover}
      whileTap={disabled ? undefined : buttonTap}
      className={`
        inline-flex items-center justify-center gap-2
        font-semibold rounded-lg
        transition-colors duration-fast
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
}

// Icon button variant
export function IconButton({
  children,
  className = '',
  ...props
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`
        inline-flex items-center justify-center
        w-10 h-10 rounded-full
        text-text-secondary hover:text-primary
        hover:bg-primary-light
        transition-colors duration-fast
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}
