"use client";

import HeroSection from "./HeroSection";
import TransactionModal from "./TransactionModal";
import ComparisonSection from "./ComparisonSection";
import CamKetUytinSection from "./CamKetUytinSection";
import QuyTrinh3Buoc from "./QuyTrinh3Buoc";
import { useSearchParams } from "next/navigation";
import { resolveAffiliate } from "@/lib/affiliate";

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

      {!affiliate.isAffiliate && (
        <section className="bg-[#0a0f1a] pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <TransactionModal />
          </div>
        </section>
      )}

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
