import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "LinkedIn Premium Career 12 Tháng - Tăng 2,7x Cơ Hội Tuyển Dụng | PremiumShop",
  description:
    "Gói LinkedIn Premium Career chính chủ 12 tháng. Tiết kiệm 90%. Xem ai đã view profile, 5 InMail/tháng, 22.000+ khóa học LinkedIn Learning có chứng chỉ. Bảo hành trọn đời.",
  keywords:
    "linkedin premium, linkedin career, mua linkedin premium, linkedin premium giá rẻ",
  openGraph: {
    title: "LinkedIn Premium Career 12 Tháng - Tiết kiệm 90%",
    description:
      "Tăng 2,7x cơ hội được tuyển dụng. Gói chính chủ 12 tháng + Tặng 1 tháng ChatGPT Plus.",
    type: "website",
    locale: "vi_VN",
    siteName: "PREMIUMSHOP",
  },
};

export default function LinkedInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
