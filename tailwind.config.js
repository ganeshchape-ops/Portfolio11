/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#7C3AED',
          indigo: '#4F46E5',
          blue: '#2563EB',
          cyan: '#06B6D4',
          emerald: '#10B981',
          dark: '#070B14',
          darkcard: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'floatWidget 6s ease-in-out infinite',
        'float-delayed': 'floatWidget 7s ease-in-out infinite 2s',
      }
    },
  },
  plugins: [],
}
