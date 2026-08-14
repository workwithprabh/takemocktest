import type { Config } from 'tailwindcss';

// Monochrome design system — a single-hue ink tonal ramp plus two
// functional colors reserved strictly for the test-results screen
// (correct/incorrect). No other color exists in this palette.
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    // Overridden (not extended): every rounded-* utility resolves to 0.
    // Sharp corners everywhere, no exceptions, no pill shapes.
    borderRadius: {
      none: '0',
      sm: '0',
      DEFAULT: '0',
      md: '0',
      lg: '0',
      xl: '0',
      '2xl': '0',
      '3xl': '0',
      full: '0',
    },
    extend: {
      colors: {
        ink: {
          50: '#F5F6F9',
          100: '#E7E9F0',
          200: '#C9CEDD',
          300: '#9AA3BE',
          400: '#6B7699',
          500: '#3F4A70',
          600: '#2A3358',
          700: '#1B2340',
          800: '#101730',
          900: '#0A0F20',
        },
        // Reserved for the test-results screen only (score breakdown,
        // right/wrong indicators) — never for buttons, links, or badges.
        correct: '#3F6B4E',
        incorrect: '#8C3A2E',
      },
      fontFamily: {
        sans: ['"General Sans"', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', '"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
