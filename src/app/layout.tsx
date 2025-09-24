import type { Metadata } from "next";
import "@/styles/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { CartProvider } from "@/app/context/CartContext";


export const metadata: Metadata = {
  title: "SD Parfum",
  description: "Ecommerce perfume shop built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        {/* favicon (đặt trong /public) */}
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" sizes="512x512" href="/android-chrome-512x512.png" />
      </head>
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
