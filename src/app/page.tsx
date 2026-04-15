import HomePage from "@/components/HomePage";
import type { Metadata } from "next";
import { Suspense } from "react";
import { SEO_FAQS } from "@/data/seo";

const BASE_URL = "https://premiumshop.tech";

export const metadata: Metadata = {
  title: "Slot ChatGPT Plus Giá Rẻ | PremiumShop",
  description:
    "Mua slot ChatGPT Plus giá rẻ từ 70.000đ/tháng tại PremiumShop. Hỗ trợ kích hoạt nhanh, bảo hành 1 đổi 1 và tư vấn 24/7 qua Zalo.",
  keywords:
    "slot chatgpt plus, mua chatgpt plus giá rẻ, chatgpt plus 70k, premiumshop",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Slot ChatGPT Plus Giá Rẻ | PremiumShop",
    description:
      "Giá từ 70.000đ/tháng, hỗ trợ kích hoạt nhanh và bảo hành 1 đổi 1. Mua ChatGPT Plus tại PremiumShop.",
    url: BASE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slot ChatGPT Plus Giá Rẻ | PremiumShop",
    description:
      "Mua slot ChatGPT Plus giá rẻ từ 70.000đ/tháng. Hỗ trợ nhanh, bảo hành rõ ràng.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PremiumShop",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PremiumShop",
  url: BASE_URL,
  inLanguage: "vi-VN",
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Slot ChatGPT Plus",
  description:
    "Dịch vụ nâng cấp ChatGPT Plus giá rẻ tại PremiumShop, hỗ trợ nhanh qua Zalo.",
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
