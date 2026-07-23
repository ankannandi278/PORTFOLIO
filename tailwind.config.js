/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0C10',
          soft: '#0D1017',
          surface: '#12151C',
          raised: '#171B24',
          border: '#232838',
        },
        paper: {
          DEFAULT: '#F7F8FA',
          surface: '#FFFFFF',
          raised: '#F0F2F6',
          border: '#E2E5EC',
        },
        signal: {
          DEFAULT: '#4F7CFF',
          soft: '#7C9BFF',
          dim: '#2C4CBF',
        },
        growth: {
          DEFAULT: '#34D399',
          soft: '#6EE7B7',
          dim: '#1F9E73',
        },
        ember: {
          DEFAULT: '#FFB454',
        },
        // Flat keys on purpose — avoids "text-ink_text-muted" nested-key ambiguity
        inktext: '#E7EAF0',
        muted: '#8A93A6',
        faint: '#565D6E',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'aurora': 'radial-gradient(60% 50% at 20% 20%, rgba(79,124,255,0.18) 0%, rgba(79,124,255,0) 60%), radial-gradient(50% 40% at 85% 15%, rgba(52,211,153,0.14) 0%, rgba(52,211,153,0) 60%)',
        'grid-faint': 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(79,124,255,0.15), 0 8px 40px -8px rgba(79,124,255,0.35)',
        'glow-green': '0 0 0 1px rgba(52,211,153,0.15), 0 8px 40px -8px rgba(52,211,153,0.35)',
        card: '0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.5)',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
