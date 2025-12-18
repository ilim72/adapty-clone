/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Bold & Vibrant Color Palette
        primary: {
          DEFAULT: '#8B5CF6', // Electric Violet
          hover: '#7C3AED',
          light: 'rgba(139, 92, 246, 0.12)',
          dark: '#6D28D9',
        },
        accent: {
          DEFAULT: '#EC4899', // Hot Pink/Magenta
          hover: '#DB2777',
          light: 'rgba(236, 72, 153, 0.12)',
        },
        secondary: {
          DEFAULT: '#06B6D4', // Cyan
          hover: '#0891B2',
          light: 'rgba(6, 182, 212, 0.12)',
        },
        energy: {
          lime: '#84CC16',
          yellow: '#FACC15',
          orange: '#F97316',
        },
        text: {
          primary: '#0F0F1A', // Near-black with warmth
          secondary: '#4B5563',
          tertiary: '#9CA3AF',
          muted: '#D1D5DB',
        },
        border: {
          DEFAULT: '#E5E7EB',
          light: '#F3F4F6',
        },
        surface: {
          DEFAULT: '#FAFBFF', // Slight violet tint
          elevated: '#F5F3FF',
          hover: '#EDE9FE',
        },
        // Gradient stops
        gradient: {
          start: '#8B5CF6',
          mid: '#EC4899',
          end: '#F97316',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'space-xs': '12px',
        'space-s': '24px',
        'space-m': '32px',
        'space-l': '48px',
        'space-xl': '64px',
        'space-xxl': '96px',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 40px rgba(139, 92, 246, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)',
        'glow-primary': '0 0 40px rgba(139, 92, 246, 0.4)',
        'glow-accent': '0 0 40px rgba(236, 72, 153, 0.4)',
        'glow-secondary': '0 0 40px rgba(6, 182, 212, 0.4)',
        'button': '0 4px 14px rgba(139, 92, 246, 0.4)',
        'button-hover': '0 6px 20px rgba(139, 92, 246, 0.5)',
      },
      aspectRatio: {
        'post': '4 / 2.15',
        'featured': '4 / 2.15',
      },
      maxWidth: {
        container: '1440px',
      },
      transitionDuration: {
        fast: '150ms',
        normal: '300ms',
        slow: '500ms',
      },
      fontSize: {
        'h2': '36px',
        'h3': '28px',
        'text-m': '21px',
        'text-s': '14px',
        'text-xs': '12px',
        // Display sizes for landing page
        'display-xl': ['72px', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['44px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-sm': ['36px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      lineHeight: {
        tight: '1.1',
        snug: '1.3',
        normal: '1.5',
      },
      letterSpacing: {
        tighter: '-0.4px',
        tight: '-0.2px',
        normal: '0',
        wide: '0.4px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(236, 72, 153, 0.06) 50%, rgba(6, 182, 212, 0.04) 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
