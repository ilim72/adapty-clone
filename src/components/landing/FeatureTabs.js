'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import FeatureCard from './FeatureCard';
import { features } from '@/data/landing';
import { smoothEase } from '@/lib/animations';

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(features.tabs[0].id);

  const activeFeature = features.tabs.find((tab) => tab.id === activeTab);

  return (
    <section id="features" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />

      <Container className="relative">
        <SectionHeading
          title="Всё для роста подписок"
          subtitle="Один инструмент для создания пейволлов, A/B тестирования и аналитики"
        />

        {/* Tabs with animated indicator */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {features.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'text-text-secondary hover:text-text-primary bg-surface-elevated hover:bg-surface-hover'
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabBg"
                  className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl"
                  transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          {activeFeature && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: smoothEase }}
            >
              {/* Tab Description */}
              <p className="text-center text-text-secondary mb-10 max-w-xl mx-auto">
                {activeFeature.description}
              </p>

              {/* Feature Cards with stagger */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.1 }
                  }
                }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {activeFeature.items.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, ease: smoothEase }
                      }
                    }}
                  >
                    <FeatureCard
                      title={item.title}
                      description={item.description}
                      icon={item.icon}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
