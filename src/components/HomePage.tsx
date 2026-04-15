"use client";

import HeroSection from "./HeroSection";
import ComparisonSection from "./ComparisonSection";
import CamKetUytinSection from "./CamKetUytinSection";
import QuyTrinh3Buoc from "./QuyTrinh3Buoc";
import { useSearchParams } from "next/navigation";
import { resolveAffiliate } from "@/lib/affiliate";
import { SEO_FAQS } from "@/data/seo";

export default function HomePage() {
  const searchParams = useSearchParams();
  const affiliate = resolveAffiliate(searchParams.get("ref"));

  return (
    <main className="min-h-screen">
      {/* SECTION 1: Hero - The Instant Buy Engine */}
      <HeroSection />

      {/* SECTION 2: Comparison - Side-by-Side Cards */}
      <ComparisonSection />

      {/* SECTION 3: TRUST & COMMITMENT */}
      <CamKetUytinSection />

      {/* SECTION 4: ACTIVATION PROCESS - Zalo Chat Mockup */}
      <QuyTrinh3Buoc />

      {/* SECTION 5: FAQ */}
      <section id="faq" className="relative bg-[#0a0f1a] pb-20 pt-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-3">
            Câu Hỏi Thường Gặp Về ChatGPT Plus
          </h2>
          <p className="text-slate-400 text-sm md:text-base text-center mb-8">
            Giải đáp nhanh các vấn đề khách hàng thường hỏi trước khi mua.
          </p>

          <div className="space-y-3">
            {SEO_FAQS.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-slate-700/70 bg-slate-900/60 px-4 py-3"
              >
                <summary className="cursor-pointer list-none font-semibold text-white flex items-center justify-between gap-4">
                  <span>{item.question}</span>
                  <span className="text-emerald-400 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* MINIMAL FOOTER */}
      <footer className="py-6 bg-slate-950 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            © 2026 PremiumShop. Hỗ trợ khách hàng 24/7 qua{" "}
            <a
              href={affiliate.zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300"
            >
              Hotline
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
