import type { Config } from 'tailwindcss';

// Ink remains the site foundation. Action, live and attention are reserved
// semantic accents for interactive controls and time-sensitive exam states.
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
        action: {
          50: '#EEF4FF',
          100: '#DCE8FF',
          600: '#2457D6',
          700: '#1D46AD',
          800: '#173987',
        },
        live: {
          50: '#EAF8F4',
          100: '#CDEDE3',
          600: '#087A63',
          700: '#06624F',
          800: '#044A3C',
        },
        attention: {
          50: '#FFF7E6',
          100: '#FDE8B2',
          600: '#B85C00',
          700: '#8F4500',
          800: '#703600',
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
