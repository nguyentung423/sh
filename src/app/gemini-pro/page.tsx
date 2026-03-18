"use client";

import { useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { FaCheck, FaShieldAlt, FaBolt, FaGraduationCap } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { resolveAffiliate } from "@/lib/affiliate";

// Feature data for the 6 Pillars
const features = [
  {
    icon: "🤖",
    title: "Gemini 3.1 Pro",
    subtitle: "Super Brain",
    description:
      "Giải toán, fix code, tư duy logic thay bạn. Thông minh gấp 10 lần bản thường.",
    color: "from-blue-500 to-blue-600",
    glowColor: "group-hover:shadow-blue-500/30",
    borderColor: "hover:border-blue-500/50",
  },
  {
    icon: "📄",
    title: "Gemini in Docs",
    subtitle: "Auto-Writer",
    description:
      "Tự viết email, soạn bài tập, dàn ý báo cáo ngay trong Google Docs. Không cần copy-paste.",
    color: "from-red-500 to-red-600",
    glowColor: "group-hover:shadow-red-500/30",
    borderColor: "hover:border-red-500/50",
  },
  {
    icon: "🎥",
    title: "Veo Video",
    subtitle: "NEW!",
    description:
      "Tạo video kể chuyện, làm intro thuyết trình chuẩn điện ảnh chỉ từ 1 câu lệnh.",
    color: "from-yellow-500 to-amber-500",
    glowColor: "group-hover:shadow-yellow-500/30",
    borderColor: "hover:border-yellow-500/50",
    isNew: true,
  },
  {
    icon: "☁️",
    title: "2TB Storage",
    subtitle: "Life Saver",
    description:
      "Lưu trữ thả ga tài liệu, ảnh kỷ yếu, video quay dựng. Không bao giờ lo 'Dung lượng đầy'.",
    color: "from-green-500 to-emerald-500",
    glowColor: "group-hover:shadow-green-500/30",
    borderColor: "hover:border-green-500/50",
    isHighlight: true,
  },
  {
    icon: "📹",
    title: "Meet Premium",
    subtitle: "Pro Interview",
    description:
      "Call video phỏng vấn/họp nhóm không giới hạn giờ, lọc tạp âm, hình ảnh 4K sắc nét.",
    color: "from-cyan-500 to-teal-500",
    glowColor: "group-hover:shadow-cyan-500/30",
    borderColor: "hover:border-cyan-500/50",
  },
  {
    icon: "📅",
    title: "Smart Calendar",
    subtitle: "Auto-Schedule",
    description:
      "Tự động sắp xếp lịch học, lịch thi, deadline bài tập thông minh. Nhắc nhở đúng lúc.",
    color: "from-purple-500 to-violet-500",
    glowColor: "group-hover:shadow-purple-500/30",
    borderColor: "hover:border-purple-500/50",
  },
];

export default function GeminiProPage() {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref");
  const affiliate = resolveAffiliate(ref);
  const homeHref = ref ? `/?ref=${ref}` : "/";
  const [showModal, setShowModal] = useState(false);

  const handleCtaClick = async () => {
    const shortcode = "KICH_HOAT_PRO";

    sendGAEvent("event", "begin_zalo_flow", {
      plan: "google_ai_pro",
      value: 50000,
      currency: "VND",
      shortcode,
    });

    try {
      await navigator.clipboard.writeText(shortcode);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = shortcode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    setShowModal(true);
  };

  const openZalo = () => {
    sendGAEvent("event", "click_zalo_final", {
      plan: "google_ai_pro",
      value: 50000,
      currency: "VND",
    });
    window.open(affiliate.zaloLink, "_blank");
    setShowModal(false);
  };

  return (
    <div
      className="min-h-screen bg-[#0a0a0d] pt-16 md:pt-18"
      style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
    >
      {/* ========== HERO SECTION - "Unlimited Power" ========== */}
      <section className="relative overflow-hidden">
        {/* Multi-colored Google Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0a0a0d]" />
          {/* Google 4-color gradient orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px]" />
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-red-500/8 rounded-full blur-[130px]" />
          <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-yellow-500/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-[140px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* ============ HERO CONTENT ============ */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-white/70 text-sm font-medium">
                Google AI Pro • All-in-One Suite
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
              <span className="text-white">Full Combo Google AI Pro:</span>
              <br />
              <span className="bg-linear-to-r from-blue-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                Cân Mọi Deadline - Chấp Hết Bài Tập
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-white/50 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
              Sở hữu{" "}
              <span className="text-blue-400 font-medium">Gemini 3.1</span>,{" "}
              <span className="text-yellow-400 font-medium">Veo tạo video</span>
              , <span className="text-green-400 font-medium">2TB Lưu trữ</span>{" "}
              và AI tích hợp sâu trong Docs/Sheets.
              <br />
              <span className="text-white/70">
                Trợ thủ học tập số 1 cho sinh viên.
              </span>
            </p>

            {/* ====== FLOATING ECOSYSTEM VISUAL ====== */}
            <div className="relative max-w-2xl mx-auto mb-16">
              {/* Central Laptop Illustration */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 via-yellow-500/20 to-green-500/20 rounded-3xl blur-3xl" />

                <div className="relative bg-[#111114] border border-white/10 rounded-3xl p-8 md:p-12">
                  {/* Floating Icons around */}
                  <div className="absolute -top-4 -left-4 w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 animate-bounce">
                    <span className="text-2xl">📄</span>
                  </div>
                  <div className="absolute -top-4 -right-4 w-14 h-14 rounded-2xl bg-linear-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/30 animate-bounce delay-100">
                    <span className="text-2xl">🎥</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-2xl bg-linear-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30 animate-bounce delay-200">
                    <span className="text-2xl">☁️</span>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-14 h-14 rounded-2xl bg-linear-to-br from-cyan-500 to-teal-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 animate-bounce delay-300">
                    <span className="text-2xl">📹</span>
                  </div>

                  {/* Center Content - Laptop Screen Simulation */}
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl mb-4">💻</div>
                    <p className="text-white font-bold text-xl md:text-2xl mb-2">
                      Hệ sinh thái Google AI Pro
                    </p>
                    <p className="text-white/40 text-sm">
                      Tất cả trong 1 tài khoản • Tích hợp liền mạch
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============ 6 FEATURE GRID - Glassmorphism Cards ============ */}
          <div className="mb-20">
            <h2 className="text-center text-white/40 text-sm font-medium uppercase tracking-widest mb-8">
              6 Sức Mạnh Vượt Trội
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-2xl bg-white/3 border border-white/10 ${feature.borderColor} p-6 transition-all duration-300 hover:bg-white/5 ${feature.glowColor} hover:shadow-xl cursor-default`}
                >
                  {/* New badge for Veo */}
                  {feature.isNew && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-yellow-500/20 border border-yellow-500/30">
                      <span className="text-yellow-400 text-[10px] font-bold uppercase">
                        Mới
                      </span>
                    </div>
                  )}

                  {/* Highlight badge for Storage */}
                  {feature.isHighlight && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-green-500/20 border border-green-500/30">
                      <span className="text-green-400 text-[10px] font-bold uppercase">
                        Hot
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="text-4xl mb-4">{feature.icon}</div>

                  {/* Title & Subtitle */}
                  <div className="mb-3">
                    <h3 className="text-white font-bold text-lg">
                      {feature.title}
                    </h3>
                    <p
                      className={`text-xs font-medium bg-linear-to-r ${feature.color} bg-clip-text text-transparent`}
                    >
                      {feature.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-white/40 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ============ PRICING CARD - Glassmorphism ============ */}
          <div className="max-w-lg mx-auto">
            {/* Glow effect */}
            <div className="relative">
              <div className="absolute -inset-2 bg-linear-to-r from-blue-500/20 via-yellow-500/20 to-green-500/20 rounded-3xl blur-2xl opacity-60" />

              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
                {/* Header */}
                <div className="bg-linear-to-r from-blue-600/90 via-red-600/90 via-50% to-green-600/90 py-4 px-6 text-center">
                  <span className="text-white text-sm font-bold uppercase tracking-wider">
                    🎓 Gói Sinh Viên Ưu Đãi
                  </span>
                </div>

                {/* Body */}
                <div className="p-8">
                  {/* Price Comparison */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-white/30 text-lg line-through">
                        475.000đ
                      </span>
                      <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/30">
                        -89%
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl md:text-6xl font-black text-transparent bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text drop-shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                        50.000đ
                      </span>
                      <span className="text-white/40 text-lg">/ tháng</span>
                    </div>

                    {/* Fun Comparison */}
                    <p className="text-white/30 text-sm mt-3">
                      Giá gốc đắt bằng{" "}
                      <span className="text-white/50">10 bát phở</span> →{" "}
                      <span className="text-green-400 font-medium">
                        Giá Shop chỉ bằng 1 cốc trà sữa
                      </span>
                    </p>
                  </div>

                  {/* What&apos;s Included */}
                  <div className="space-y-3 mb-8">
                    {[
                      "Gemini 3.1 Pro - Deep Reasoning",
                      "Veo Video Generation",
                      "2TB Google Drive Storage",
                      "Meet Premium không giới hạn",
                      "AI trong Docs, Sheets, Gmail",
                      "Bảo hành 1-1 trọn đời",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                          <FaCheck className="w-2.5 h-2.5 text-green-400" />
                        </div>
                        <span className="text-white/70 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={handleCtaClick}
                    className="w-full relative overflow-hidden rounded-2xl cursor-pointer group"
                  >
                    {/* Animated gradient */}
                    <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-green-500 to-blue-500 bg-size-[200%_100%] animate-[shimmer_2s_linear_infinite]" />
                    <div className="relative bg-linear-to-r from-blue-500 via-green-500 to-emerald-500 hover:from-blue-600 hover:via-green-600 hover:to-emerald-600 text-white font-bold text-base py-4 px-6 transition-all duration-300 flex items-center justify-center gap-2">
                      <span>KÍCH HOẠT GÓI PRO NGAY</span>
                    </div>
                  </button>

                  {/* Micro-copy */}
                  <p className="text-center text-white/30 text-xs mt-4">
                    Nâng cấp trực tiếp trên mail chính chủ • Bảo hành trọn đời
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TRUST INDICATORS ========== */}
      <section className="border-y border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-white/40">
              <FaBolt className="w-4 h-4 text-yellow-400/80" />
              <span className="text-sm">Uptime 99.9%</span>
            </div>

            <div className="flex items-center gap-2 text-white/40">
              <FaGraduationCap className="w-4 h-4 text-blue-400/80" />
              <span className="text-sm">
                Tin dùng bởi SV Bách Khoa, RMIT, FPT
              </span>
            </div>

            <div className="flex items-center gap-2 text-white/40">
              <FaShieldAlt className="w-4 h-4 text-green-400/80" />
              <span className="text-sm">Bảo hành 1-1 Instant</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== USE CASES SECTION ========== */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Sinh viên dùng Google AI làm gì?
            </h2>
            <p className="text-white/40 text-base max-w-xl mx-auto">
              Từ làm bài tập đến video thuyết trình - AI lo hết
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: "📝",
                title: "Viết Bài & Báo Cáo",
                desc: "Gemini tự tạo dàn ý, phân tích dữ liệu, trích dẫn nguồn. Giảm 70% thời gian research.",
              },
              {
                emoji: "💻",
                title: "Coding & Debug",
                desc: "Fix lỗi code trong tích tắc. Giải thích thuật toán, viết unit test tự động.",
              },
              {
                emoji: "🎬",
                title: "Làm Video Thuyết Trình",
                desc: "Veo tạo intro cinematic, hình ảnh minh họa chuyên nghiệp chỉ từ 1 câu lệnh.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#111114] border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6">
                <Image
                  src="/logo.png"
                  alt="PremiumShop"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <p className="text-white/60 font-medium text-sm">PremiumShop</p>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href={homeHref}
                className="text-white/30 hover:text-white/50 text-sm transition-colors"
              >
                Trang Chủ
              </Link>
              <span className="text-white/10">•</span>
              <span className="text-white/30 text-sm">
                © 2026 All rights reserved
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* ========== CONFIRMATION MODAL ========== */}
      {showModal && (
        <div className="fixed inset-0 z-100 flex items-end sm:items-center justify-center">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />

          <div className="relative bg-[#111114] rounded-t-2xl sm:rounded-2xl p-6 pb-8 sm:p-8 w-full sm:max-w-sm border border-white/10 safe-bottom">
            <div className="flex justify-center mb-4 sm:hidden">
              <div className="w-12 h-1.5 bg-white/10 rounded-full" />
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="hidden sm:block absolute top-4 right-4 text-white/30 hover:text-white/60 transition-colors cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 rounded-full bg-linear-to-r from-blue-500/20 via-green-500/20 to-yellow-500/20 flex items-center justify-center border border-green-500/30">
                <FaCheck className="w-7 h-7 text-green-400" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-white text-center mb-2">
              Đã copy mã kích hoạt
            </h3>
            <p className="text-white/40 text-sm text-center mb-6 leading-relaxed">
              Dán{" "}
              <span className="text-green-400 font-mono font-medium">
                KICH_HOAT_PRO
              </span>{" "}
              vào Zalo để được hỗ trợ
            </p>

            <button
              onClick={openZalo}
              className="w-full flex items-center justify-center gap-2.5 bg-linear-to-r from-blue-500 via-green-500 to-emerald-500 hover:from-blue-600 hover:via-green-600 hover:to-emerald-600 text-white font-semibold text-sm py-4 rounded-xl transition-all duration-200 cursor-pointer"
            >
              <SiZalo className="w-5 h-5" />
              <span>Mở Zalo</span>
            </button>

            <p className="text-white/20 text-xs text-center mt-4">
              Kích hoạt trong 30 giây • Hỗ trợ 24/7
            </p>
          </div>
        </div>
      )}

      {/* Shimmer Animation Style */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -100% 0;
          }
        }
      `}</style>
    </div>
  );
}
