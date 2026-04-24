import HomePage from "@/components/HomePage";
import type { Metadata } from "next";
import { Suspense } from "react";
import { SEO_FAQS } from "@/data/seo";

const BASE_URL = "https://premiumshop.tech";

export const metadata: Metadata = {
  title: "PremiumShop | Slot ChatGPT Business Giá Rẻ",
  description:
    "Mua slot ChatGPT Business giá rẻ từ 70.000đ/tháng tại PremiumShop. Hỗ trợ kích hoạt nhanh, bảo hành 1 đổi 1 và tư vấn 24/7 qua Zalo.",
  keywords:
    "slot chatgpt business, mua chatgpt business giá rẻ, chatgpt business 70k, premiumshop",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PremiumShop | Slot ChatGPT Business Giá Rẻ",
    description:
      "Giá từ 70.000đ/tháng, hỗ trợ kích hoạt nhanh và bảo hành 1 đổi 1. Mua ChatGPT Business tại PremiumShop.",
    url: BASE_URL,
    type: "website",
    siteName: "PremiumShop",
  },
  twitter: {
    card: "summary_large_image",
    title: "PremiumShop | Slot ChatGPT Business Giá Rẻ",
    description:
      "Mua slot ChatGPT Business giá rẻ từ 70.000đ/tháng. Hỗ trợ nhanh, bảo hành rõ ràng.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "PremiumShop",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "PremiumShop",
  alternateName: "premiumshop.tech",
  url: BASE_URL,
  inLanguage: "vi-VN",
  publisher: {
    "@id": `${BASE_URL}/#organization`,
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Slot ChatGPT Business",
  description:
    "Dịch vụ nâng cấp ChatGPT Business giá rẻ tại PremiumShop, hỗ trợ nhanh qua Zalo.",
  brand: {
    "@type": "Brand",
    name: "OpenAI",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "VND",
    lowPrice: "70000",
    highPrice: "110000",
    offerCount: "3",
    availability: "https://schema.org/InStock",
    url: BASE_URL,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SEO_FAQS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Suspense fallback={null}>
        <HomePage />
      </Suspense>
    </>
  );
}
