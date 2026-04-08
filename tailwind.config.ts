import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0f1419',
          800: '#1a1a2e',
          700: '#16213e',
          600: '#1d3a5c',
        },
        red: {
          primary: '#e94560',
          dark: '#d63031',
          light: '#ff6b7a',
        },
        gold: {
          primary: '#ffd700',
          dark: '#f39c12',
          light: '#ffe55c',
        },
        gray: {
          light: '#e0e0e0',
          lighter: '#f5f5f5',
          dark: '#333333',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(233, 69, 96, 0.7)' },
          '50%': { boxShadow: '0 0 0 10px rgba(233, 69, 96, 0)' },
        },
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
