import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Material Minimalism Color System
        primary: '#6200EE',
        'primary-variant': '#7E3FF2',
        secondary: '#03DAC5',
        surface: '#FFFFFF',
        background: '#F6F7F9',
        outline: '#E4E7EB',
        'text-primary': '#1A1A1A',
        'text-secondary': '#555',
        'hover-bg': '#F2F3F7',
      },
      spacing: {
        // Spacing Scale: 4 / 8 / 12 / 16 / 20 / 24 / 32
      },
      borderRadius: {
        card: '12px',
        input: '10px',
        button: '10px',
      },
      fontFamily: {
        sans: ['Vazirmatn', 'sans-serif'],
      },
      fontSize: {
        base: '15px',
        h1: '30px',
        h2: '24px',
        h3: '18px',
      },
      lineHeight: {
        base: '1.6',
      },
      boxShadow: {
        idle: '0 3px 6px rgba(0,0,0,0.08)',
        hover: '0 6px 12px rgba(0,0,0,0.12)',
        'header-subtle': '0 1px 2px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
};
export default config;

