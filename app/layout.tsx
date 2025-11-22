import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "فروشگاه Telegram Stars | خرید استار تلگرام",
  description: "با بهترین قیمت و سریع‌ترین تحویل، استارهای تلگرام خود را خریداری کنید",
  keywords: ["telegram stars", "خرید استار تلگرام", "telegram stars shop"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}


