/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          hover: '#4f46e5',
          light: 'rgba(99, 102, 241, 0.1)',
        },
        text: {
          primary: '#09090b',
          secondary: '#71717a',
          tertiary: '#a1a1aa',
          muted: '#d4d4d8',
        },
        border: {
          DEFAULT: '#e4e4e7',
          light: '#f4f4f5',
        },
        surface: {
          DEFAULT: '#ffffff',
          elevated: '#fafafa',
          hover: '#f9fafb',
        },
        category: {
          blue: '#3b82f6',
          purple: '#a855f7',
          pink: '#ec4899',
          orange: '#f97316',
          green: '#10b981',
          yellow: '#eab308',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-geist-sans)', 'system-ui', 'sans-serif'],
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
        xl: '32px',
      },
      boxShadow: {
        // Minimal shadows like Adapty
        'card': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
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
        // Adapty typography scale
        'h2': '36px',
        'h3': '28px',
        'text-m': '21px',
        'text-s': '14px',
        'text-xs': '12px',
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
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
