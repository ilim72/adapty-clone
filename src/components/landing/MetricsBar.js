'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '@/components/ui/Container';
import { metrics } from '@/data/landing';
import { smoothEase } from '@/lib/animations';

// Count-up animation hook
function useCountUp(end, duration = 2000, inView = false) {
  const [count, setCount] = useState(0);
  const numericEnd = parseInt(end.replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    if (!inView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * numericEnd));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [numericEnd, duration, inView]);

  return count;
}

function MetricItem({ metric, index, inView }) {
  const numericPart = metric.value.replace(/[^0-9]/g, '');
  const prefix = metric.value.match(/^[^0-9]*/)?.[0] || '';
  const suffix = metric.value.match(/[^0-9]*$/)?.[0] || '';

  const count = useCountUp(numericPart, 2000 + index * 200, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: smoothEase }}
      className="text-center"
    >
      <div className="flex items-baseline justify-center gap-1 mb-2">
        <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent tracking-tight">
          {prefix}{inView ? count : 0}{suffix}
        </span>
        {metric.unit && (
          <span className="text-lg md:text-xl text-text-secondary font-medium">
            {metric.unit}
          </span>
        )}
      </div>
      <p className="text-sm md:text-base text-text-secondary">
        {metric.label}
      </p>
    </motion.div>
  );
}

export default function MetricsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 md:py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      <Container className="relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <MetricItem
              key={index}
              metric={metric}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
