import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#7BB0FF',
          cyan: '#8AE6FF',
          'blue-dim': 'rgba(123, 176, 255, 0.15)',
          'cyan-dim': 'rgba(138, 230, 255, 0.1)',
        },
        base: '#080b14',
        elevated: '#0d1020',
      },
      fontFamily: {
        space: ['var(--font-space)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      backdropBlur: {
        xl: '18px',
      },
    },
  },
  plugins: [],
};

export default config;
