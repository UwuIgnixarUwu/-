import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0E13',
        card: '#121722',
        accent: '#FF6D00',
        acid: '#A3FF12',
        text: '#E7ECF3',
        muted: '#97A2B8'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,109,0,0.35), 0 12px 40px rgba(255,109,0,0.15)'
      }
    }
  },
  plugins: []
};

export default config;
