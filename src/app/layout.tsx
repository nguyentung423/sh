import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/Header";
import ZaloFloatingButton from "@/components/ZaloFloatingButton";
import ClientModals from "@/components/ClientModals";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://premiumshop.tech"),
  applicationName: "PremiumShop",
  title: "PremiumShop | Slot ChatGPT Business Giá Rẻ",
  description:
    "Chỉ 70k/30 ngày – Trial miễn phí 7 ngày. Bảo hành thay slot nếu die. Chat Zalo ngay để nhận!",
  keywords: "chatgpt business, slot chatgpt, mua chatgpt giá rẻ, premium slot",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "PremiumShop | Slot ChatGPT Business Giá Rẻ",
    description:
      "Slot ChatGPT Business\nChỉ 70k/30 ngày – Trial miễn phí 7 ngày\nBảo hành thay slot nếu die\nChat Zalo ngay để nhận!",
    type: "website",
    locale: "vi_VN",
    siteName: "PremiumShop",
    url: "https://premiumshop.tech",
    images: [
      {
        url: "/logo.png",
        width: 2000,
        height: 2000,
        alt: "PremiumShop Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PremiumShop | Slot ChatGPT Business Giá Rẻ",
    description:
      "Slot ChatGPT Business – Chỉ 70k/30 ngày – Trial miễn phí 7 ngày – Bảo hành thay slot nếu die",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-dark-900`}
        suppressHydrationWarning={true}
      >
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <main className="min-h-screen">{children}</main>
        <Suspense fallback={null}>
          <ZaloFloatingButton />
        </Suspense>
        <Suspense fallback={null}>
          <ClientModals />
        </Suspense>
      </body>
      <GoogleAnalytics gaId="G-06X9BX4Y2W" />
    </html>
  );
}
