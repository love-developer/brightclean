import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#10222b',
        glass: '#cfe8ee',
        paper: '#f3f9fb',
        lime: '#d8f23e',
        teal: '#0b6e75',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
