// tailwind.config.js
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        bitter: ['Bitter', 'sans-serif'],
      },
      keyframes: {
        fadeFromLeft: {
          '0%': { backgroundPosition: '0% 50%', opacity: '0.3' },
          '50%': { backgroundPosition: '50% 50%', opacity: '1' },
          '100%': { backgroundPosition: '100% 50%', opacity: '0.3' },
        },
        gradientBorder: {
          '0%': {
            borderColor: 'oklch(var(--p))', // DaisyUI primary color variable
          },
          '25%': {
            borderColor: 'oklch(var(--s))', // DaisyUI secondary color variable
          },
          '50%': {
            borderColor: 'oklch(var(--a))', // DaisyUI accent color variable
          },
          '75%': {
            borderColor: 'oklch(var(--s))',
          },
          '100%': {
            borderColor: 'oklch(var(--p))',
          },
        },
        fadeScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollBob: {
          '0%, 100%': { transform: 'translateY(0)' }, // 원래 위치
          '50%': { transform: 'translateY(-10px)' }, // 위로 이동
        },
      },
      animation: {
        fadeFromLeft: 'fadeFromLeft 2s ease-in-out infinite',
        'gradient-border': 'gradientBorder 5s infinite linear',
        fadeScale: 'fadeScale 0.5s ease-in-out',
        reveal: 'reveal 1s ease-out 1.5s backwards',
        scrollBob: 'scrollBob 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: 'oklch(0.5 0.4 260)', // OKLCH 형식
          secondary: 'oklch(0.6 0.3 190)',
          accent: 'oklch(0.4 0.7 120)',
        },
      },
      'light',
      'dark',
      'cupcake',
    ],
  },
};
