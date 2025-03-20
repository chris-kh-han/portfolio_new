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
      colors: {
        bg: 'var(--bg)', // ✅ data-theme의 --bg 변수 사용
        line: 'var(--line)',
        fill: 'var(--fill)',
        text: 'var(--text)',
        subtext: 'var(--subtext)',
        duo: 'var(--duo)',
      },
    },
  },
  // plugins: [daisyui],
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: 'oklch(0.5 0.4 260)', // OKLCH 형식
  //         secondary: 'oklch(0.6 0.3 190)',
  //         accent: 'oklch(0.4 0.7 120)',
  //       },
  //     },
  //     'light',
  //     'dark',
  //     'cupcake',
  //   ],
  // },
};
