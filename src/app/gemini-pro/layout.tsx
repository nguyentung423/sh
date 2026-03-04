import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Google AI Pro | Full Combo Gemini 3.1 + 2TB + Veo Video | PremiumShop",
  description:
    "Cân Mọi Deadline - Chấp Hết Bài Tập. Gemini 3.1 Pro, Veo Video, 2TB Storage, Meet Premium trong 1 gói. Chỉ 50k/tháng cho sinh viên.",
  keywords:
    "google ai pro, gemini 3.1 pro, veo video, 2tb storage, google meet premium, ai sinh vien, hoc tap, bai tap",
  openGraph: {
    title: "Google AI Pro | Full Combo cho Sinh viên 2026",
    description:
      "6 tính năng AI Pro trong 1 gói. Giá gốc 475k → Giá Shop chỉ 50k/tháng.",
    type: "website",
    locale: "vi_VN",
    siteName: "PREMIUMSHOP",
  },
};

export default function GeminiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
