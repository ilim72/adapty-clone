'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { pricing } from '@/data/landing';
import { smoothEase } from '@/lib/animations';

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="pricing" className="py-20 md:py-28 bg-surface-elevated relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent pointer-events-none" />

      <Container className="relative">
        <SectionHeading
          title={pricing.headline}
          subtitle={pricing.subheadline}
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {pricing.tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: smoothEase }
                }
              }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className={`relative p-8 rounded-2xl border ${
                tier.highlighted
                  ? 'bg-white border-transparent shadow-card-hover'
                  : 'bg-white border-border-light hover:shadow-card-hover'
              }`}
            >
              {/* Gradient border for highlighted card */}
              {tier.highlighted && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary p-[2px] -z-10">
                  <div className="absolute inset-[2px] rounded-2xl bg-white" />
                </div>
              )}

              {/* Popular badge */}
              {tier.highlighted && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring', bounce: 0.5 }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                >
                  <span className="px-4 py-1.5 bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold rounded-full shadow-button">
                    Популярный
                  </span>
                </motion.div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${tier.highlighted ? 'gradient-text' : 'text-text-primary'}`}>
                    {tier.price}
                  </span>
                  <span className="text-text-secondary">{tier.period}</span>
                </div>
                <p className="text-sm text-text-secondary mt-2">
                  {tier.description}
                </p>
              </div>

              {/* Features with staggered animation */}
              <motion.ul
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.3 + index * 0.2 }
                  }
                }}
                className="space-y-3 mb-8"
              >
                {tier.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-energy-lime/20 to-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-energy-lime"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA */}
              <Button
                variant={tier.highlighted ? 'primary' : 'secondary'}
                className="w-full"
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
