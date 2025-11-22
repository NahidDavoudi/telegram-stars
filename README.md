# فروشگاه Telegram Stars - Next.js

پروژه فروشگاه Telegram Stars با Next.js 14، TypeScript و Tailwind CSS

## ویژگی‌ها

- ✅ Next.js 14 با App Router
- ✅ TypeScript
- ✅ Tailwind CSS با پالت رنگی سفارشی
- ✅ Flip Card برای محصولات
- ✅ مدیریت State با React Context
- ✅ Responsive Design
- ✅ آماده برای API و پنل مدیریت

## نصب و راه‌اندازی

```bash
npm install
npm run dev
```

باز کردن [http://localhost:3000](http://localhost:3000)

## ساختار پروژه

```
telegram-stars/
├── app/
│   ├── api/          # API routes
│   ├── globals.css   # Global styles
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── providers.tsx # Context providers
├── components/       # React components
├── contexts/         # Context providers
├── data/            # JSON data files
├── lib/             # Utility functions
└── types/           # TypeScript types
```

## کامپوننت‌ها

- `Header` - هدر با سبد خرید
- `HeroSection` - بخش هیرو
- `ProductsGrid` - گرید محصولات
- `ProductCard` - کارت محصول با flip
- `ContactSection` - بخش تماس
- `CartSidebar` - سایدبار سبد خرید
- `Footer` - فوتر
- `Layout` - Layout اصلی

## API Routes

- `GET /api/products` - دریافت لیست محصولات
- `POST /api/cart` - به‌روزرسانی سبد خرید

## پالت رنگی

- `regal-navy`: #134074
- `oxford-navy`: #13315c
- `prussian-blue`: #0b2545
- `powder-blue`: #8da9c4
- `mint-cream`: #eef4ed

## توسعه آینده

- پنل مدیریت
- اتصال به دیتابیس
- سیستم احراز هویت
- درگاه پرداخت

