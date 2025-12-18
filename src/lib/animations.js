// Smooth easing curve for natural deceleration
export const smoothEase = [0.22, 1, 0.36, 1];

// Fade in from bottom
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: smoothEase }
  }
};

// Simple fade in
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Scale in with fade
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: smoothEase }
  }
};

// Slide from left
export const slideFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: smoothEase }
  }
};

// Slide from right
export const slideFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: smoothEase }
  }
};

// Container for staggered children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Fast stagger for grids with many items
export const fastStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
};

// Individual stagger item
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Stagger item with scale
export const staggerItemScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: smoothEase }
  }
};

// Button hover effect
export const buttonHover = {
  scale: 1.02,
  y: -2,
  transition: { duration: 0.2, ease: 'easeOut' }
};

// Button tap effect
export const buttonTap = {
  scale: 0.98,
  transition: { duration: 0.1 }
};

// Card hover effect
export const cardHover = {
  y: -8,
  transition: { duration: 0.3, ease: smoothEase }
};

// Subtle card hover
export const cardHoverSubtle = {
  y: -4,
  transition: { duration: 0.2, ease: 'easeOut' }
};

// Logo/icon hover
export const iconHover = {
  scale: 1.1,
  rotate: 5,
  transition: { duration: 0.2, ease: 'easeOut' }
};

// Floating animation for decorative elements
export const floatingAnimation = {
  y: [0, -20, 0],
  scale: [1, 1.05, 1],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};

// Slow rotation for background elements
export const slowRotate = {
  rotate: [0, 360],
  transition: {
    duration: 30,
    repeat: Infinity,
    ease: 'linear'
  }
};

// Pulse glow effect
export const pulseGlow = {
  scale: [1, 1.05, 1],
  opacity: [0.5, 1, 0.5],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};

// Page transition variants
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: smoothEase }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 }
  }
};

// Tab content transition
export const tabContent = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: smoothEase }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 }
  }
};

// Number counting animation helper
export const countUp = (end, duration = 2000) => ({
  from: 0,
  to: end,
  duration
});
