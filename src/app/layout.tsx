import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ZaloFloatingButton from "@/components/ZaloFloatingButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "PremiumShop - Mua Slot ChatGPT Business, Netflix, YouTube Giá Rẻ 50k",
  description:
    "Cung cấp slot premium ChatGPT Business, Netflix, YouTube, Spotify, Midjourney với giá rẻ nhất từ 50k/tháng. Trial miễn phí 7 ngày, bảo hành 100%.",
  keywords:
    "chatgpt business, slot chatgpt, mua chatgpt giá rẻ, netflix premium, youtube premium, spotify premium, midjourney, canva pro",
  icons: {
    icon: "/Cream and Brown Minimalist Furniture Logo (2).svg",
    apple: "/Cream and Brown Minimalist Furniture Logo (2).svg",
  },
  openGraph: {
    title: "PremiumShop - Slot Premium Giá Rẻ Từ 50k",
    description:
      "ChatGPT Business, Netflix, YouTube Premium & nhiều hơn nữa. Trial miễn phí 7 ngày!",
    type: "website",
    locale: "vi_VN",
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
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-white text-dark-900`}
        suppressHydrationWarning={true}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <ZaloFloatingButton />
      </body>
    </html>
  );
}
