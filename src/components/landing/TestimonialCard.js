'use client';

import { motion } from 'framer-motion';

export default function TestimonialCard({ quote, author, title, company }) {
  // Generate initials for avatar
  const initials = author
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group p-6 bg-white border border-border-light rounded-xl hover:shadow-card-hover transition-shadow duration-300"
    >
      {/* Quote */}
      <div className="mb-6">
        {/* Gradient quote icon */}
        <div className="w-10 h-10 mb-4 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <svg
            className="w-5 h-5 text-primary"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
          </svg>
        </div>
        <p className="text-text-primary leading-relaxed">{quote}</p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3">
        {/* Avatar with gradient ring */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          <div className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-br from-primary/30 to-accent/30 group-hover:from-primary group-hover:to-accent transition-all duration-300">
            <div className="w-full h-full rounded-full bg-surface-elevated flex items-center justify-center">
              <span className="text-sm font-semibold text-primary">{initials}</span>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-text-primary">{author}</p>
          <p className="text-xs text-text-secondary">
            {title}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
