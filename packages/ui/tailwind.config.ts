import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}', // مسیر کامپوننت‌های UI
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
