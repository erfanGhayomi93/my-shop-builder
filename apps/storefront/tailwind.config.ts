import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,js,jsx,html}',
    '../../packages/ui/src/**/*.{ts,tsx,js,jsx}' // ← این خط مهمه
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
