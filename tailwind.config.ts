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
        // Original Color Palette
        'regal-navy': '#134074',      // هدر، دکمه‌های اصلی، متن‌های رسمی و تیترهای مهم
        'oxford-navy': '#13315c',    // فوتر، بخش ویژگی‌ها و تماس، دکمه‌های ثانویه
        'prussian-blue': '#0b2545',  // تیترها و متن‌های جزئیات
        'powder-blue': '#8da9c4',    // پس‌زمینه بخش Hero، برچسب‌ها و تگ‌های دعوت‌کننده
        'mint-cream': '#eef4ed',     // پس‌زمینه کارت‌ها و بخش محصولات، متن‌های روشن روی رنگ‌های تیره
        // Keep Material colors for compatibility
        primary: '#134074',
        'primary-variant': '#13315c',
        surface: '#FFFFFF',
        background: '#eef4ed',
        outline: '#E4E7EB',
        'text-primary': '#0b2545',
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

