import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ZaloFloatingButton from "@/components/ZaloFloatingButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://premiumshop.tech"),
  title: "PREMIUMSHOP - Slot ChatGPT Business",
  description:
    "Chỉ 50k/30 ngày – Trial miễn phí 7 ngày. Bảo hành thay slot nếu die. Chat Zalo ngay để nhận!",
  keywords: "chatgpt business, slot chatgpt, mua chatgpt giá rẻ, premium slot",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "PREMIUMSHOP",
    description:
      "Slot ChatGPT Business\nChỉ 50k/30 ngày – Trial miễn phí 7 ngày\nBảo hành thay slot nếu die\nChat Zalo ngay để nhận!",
    type: "website",
    locale: "vi_VN",
    siteName: "PREMIUMSHOP",
    url: "https://premiumshop.tech",
    images: [
      {
        url: "/logo.png",
        width: 2000,
        height: 2000,
        alt: "PREMIUMSHOP Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PREMIUMSHOP",
    description:
      "Slot ChatGPT Business – Chỉ 50k/30 ngày – Trial miễn phí 7 ngày – Bảo hành thay slot nếu die",
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
        <Header />
        <main className="min-h-screen">{children}</main>
        <ZaloFloatingButton />
      </body>
    </html>
  );
}
