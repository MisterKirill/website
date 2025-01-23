import type { Config } from 'tailwindcss';

export default {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '40px',
    },
    extend: {
      fontFamily: {
        lexend: 'var(--font-lexend)',
        noto: 'var(--font-noto-sans)',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
} satisfies Config;
