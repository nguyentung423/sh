"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { SiZalo, SiOpenai } from "react-icons/si";
import { FaShieldAlt, FaCheck } from "react-icons/fa";
import { sendGAEvent } from "@next/third-parties/google";
import { ZALO_CONFIG } from "@/data/products";
import { formatVnd, resolveAffiliate } from "@/lib/affiliate";
import TransactionModal from "./TransactionModal";

// Pricing options - 3 options including Trial
const pricingOptions = [
  {
    id: "trial",
    name: "Trial 5 Ngày",
    price: "0",
    priceLabel: "0",
    note: "Dùng thử miễn phí",
    badge: "Hot",
    badgeStyle: "trial",
    getMessage: () =>
      ZALO_CONFIG.getTrialMessage("ChatGPT Business GPT-5.4 - Trial 5 Ngày"),
  },
  {
    id: "1month",
    name: "Gói 1 Tháng",
    price: "50.000",
    priceLabel: "50k",
    note: null,
    badge: "Best Seller",
    badgeStyle: "best",
    getMessage: () =>
      ZALO_CONFIG.getMessage("ChatGPT Business GPT-5.4 - 1 Tháng"),
  },
  {
    id: "3month",
    name: "Gói 3 Tháng",
    price: "135.000",
    priceLabel: "135k",
    note: "Tạm ngưng bán",
    badge: "Hết hàng",
    badgeStyle: "disabled",
    disabled: true,
    getMessage: () =>
      ZALO_CONFIG.getMessage("ChatGPT Business GPT-5.4 - 3 Tháng"),
  },
];

// Shortcode mapping
const SHORTCODES: Record<string, string> = {
  trial: "DK_TRIAL",
  "1month": "MUA_GPT_50K",
  "3month": "MUA_GPT_135K",
};

export default function HeroSection() {
  const searchParams = useSearchParams();
  const affiliate = resolveAffiliate(searchParams.get("ref"));
  const [selectedPlan, setSelectedPlan] = useState("1month");
  const [showModal, setShowModal] = useState(false);
  const monthlyPrice = affiliate.monthlyPrice;
  const monthlyPriceLabel = `${formatVnd(monthlyPrice)}đ`;
  const oldPrice = 799000;
  const savings = oldPrice - monthlyPrice;

  const handleZaloClick = async () => {
    const shortcode = SHORTCODES[selectedPlan] || "MUA_GPT_50K";

    // Track GA4 event - Step 1: User shows interest
    sendGAEvent("event", "begin_zalo_flow", {
      plan: selectedPlan,
      shortcode: shortcode,
    });

    try {
      await navigator.clipboard.writeText(shortcode);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = shortcode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    // Show modal (NOT auto-redirect)
    setShowModal(true);
  };

  const openZalo = () => {
    // Track GA4 event - Step 2: User confirms opening Zalo (Final action)
    sendGAEvent("event", "click_zalo_final", {
      plan: selectedPlan,
    });

    window.open(affiliate.zaloLink, "_blank");
    setShowModal(false);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center snap-start">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 translate-x-1/4 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-amber-500/8 rounded-full blur-[100px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* ============ LEFT COLUMN - The Hook & Anchor ============ */}
          <div className="order-1">
            {/* Main Headline */}
            <h1 className="mb-3 md:mb-4">
              <span className="block text-white font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Trải Nghiệm{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                  GPT-5.4
                </span>
              </span>
              <span className="block text-white font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mt-1">
                Đỉnh Cao AI
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm md:text-base lg:text-lg leading-relaxed mb-5 md:mb-8 max-w-md">
              Tài khoản{" "}
              <span className="text-emerald-400 font-semibold">
                Business Team
              </span>{" "}
              chính chủ. Nhanh hơn, Thông minh hơn.
            </p>

            {/* ====== PRICE SLASH LAYOUT ====== */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
              {/* Old Price - Strikethrough */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-slate-500 text-sm">Giá gốc:</span>
                <span className="text-red-400/80 text-lg line-through decoration-red-500/50 decoration-2">
                  {formatVnd(oldPrice)}đ/tháng
                </span>
              </div>

              {/* New Price - HUGE with Arrow */}
              <div className="flex items-end gap-4">
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-emerald-400 via-green-400 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(16,185,129,0.4)]">
                      {monthlyPriceLabel}
                    </span>
                    <span className="text-slate-400 text-lg">/tháng</span>
                  </div>
                </div>

                {/* -94% Badge with Arrow */}
                <div className="flex flex-col items-center">
                  <span className="text-slate-500 text-lg mb-1">↓</span>
                  <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 text-sm font-black shadow-lg shadow-amber-500/30">
                    -94%
                  </span>
                </div>
              </div>

              {/* Savings Text */}
              <p className="text-emerald-400/80 text-sm mt-3 flex items-center gap-1">
                <span>✨</span> Tiết kiệm{" "}
                <span className="font-bold text-emerald-300">
                  {formatVnd(savings)}đ
                </span>{" "}
                mỗi tháng
              </p>
            </div>
          </div>

          {/* ============ RIGHT COLUMN - Checkout Form ============ */}
          <div className="order-2 lg:sticky lg:top-24">
            <div className="relative backdrop-blur-2xl bg-slate-900/80 border-2 border-emerald-500/30 rounded-2xl p-6 shadow-[0_0_60px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/10">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    Chọn Gói
                  </h3>
                  <p className="text-slate-400 text-sm">
                    ChatGPT Business - GPT-5.4
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <SiOpenai className="w-5 h-5 text-emerald-400" />
                </div>
              </div>

              {/* Pricing Options - Radio Style (Compact) */}
              <div className="space-y-2 mb-4">
                {pricingOptions.map((option) => (
                  <label
                    key={option.id}
                    className={`relative flex items-center justify-between px-3 py-2.5 rounded-xl border-2 transition-all duration-200 ${
                      option.disabled
                        ? "cursor-not-allowed opacity-50 border-slate-700/30 bg-slate-800/20"
                        : selectedPlan === option.id
                          ? option.id === "trial"
                            ? "cursor-pointer border-orange-500/60 bg-orange-500/10 shadow-[0_0_15px_rgba(249,115,22,0.2)] ring-1 ring-orange-500/20"
                            : "cursor-pointer border-emerald-500 bg-emerald-500/15 shadow-[0_0_20px_rgba(16,185,129,0.25)] ring-2 ring-emerald-500/20"
                          : option.id === "trial"
                            ? "cursor-pointer border-slate-700/40 bg-slate-800/20 hover:border-orange-500/30 hover:bg-orange-500/5"
                            : "cursor-pointer border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 hover:bg-slate-800/50"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          selectedPlan === option.id
                            ? option.id === "trial"
                              ? "border-orange-500 bg-orange-500"
                              : "border-emerald-500 bg-emerald-500"
                            : "border-slate-600"
                        }`}
                      >
                        {selectedPlan === option.id && (
                          <FaCheck className="w-2 h-2 text-white" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`font-medium text-sm ${
                              option.id === "trial"
                                ? "text-slate-300"
                                : "text-white"
                            }`}
                          >
                            {option.name}
                          </span>
                          {option.badge && (
                            <span
                              className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${
                                option.badgeStyle === "best"
                                  ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900"
                                  : option.badgeStyle === "trial"
                                    ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                                    : option.badgeStyle === "disabled"
                                      ? "bg-slate-600/30 text-slate-400 border border-slate-500/30"
                                      : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                              }`}
                            >
                              {option.badge}
                            </span>
                          )}
                        </div>
                        {option.note && (
                          <p
                            className={`text-[10px] mt-0.5 ${
                              option.id === "trial"
                                ? "text-orange-400/70"
                                : "text-slate-500"
                            }`}
                          >
                            {option.note}
                          </p>
                        )}
                      </div>
                    </div>
                    <span
                      className={`text-base font-bold ${
                        option.id === "trial" ? "text-orange-400" : "text-white"
                      }`}
                    >
                      {option.priceLabel === "0"
                        ? "Miễn phí"
                        : option.id === "1month"
                          ? monthlyPriceLabel
                          : option.priceLabel}
                      {option.priceLabel !== "0" && option.id !== "1month" && (
                        <span className="text-slate-500 text-xs font-normal">
                          đ
                        </span>
                      )}
                    </span>
                    <input
                      type="radio"
                      name="pricing"
                      value={option.id}
                      checked={selectedPlan === option.id}
                      onChange={() =>
                        !option.disabled && setSelectedPlan(option.id)
                      }
                      disabled={option.disabled}
                      className="sr-only"
                    />
                  </label>
                ))}
              </div>

              {/* Main CTA Button - Pulsing Shadow */}
              <button
                onClick={handleZaloClick}
                className={`w-full flex items-center justify-center gap-3 text-white font-bold text-lg py-4 rounded-xl transition-all duration-300 cursor-pointer ${
                  selectedPlan === "trial"
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.6)]"
                    : "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] animate-pulse-glow"
                }`}
              >
                <SiZalo className="w-6 h-6" />
                <span>
                  {selectedPlan === "trial"
                    ? "Đăng ký dùng thử"
                    : "MUA NGAY - HOTLINE"}
                </span>
              </button>

              {/* Confirmation Modal - Bottom Sheet on Mobile */}
              {showModal && (
                <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
                  {/* Backdrop */}
                  <div
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={() => setShowModal(false)}
                  />

                  {/* Modal Content - Bottom sheet on mobile, centered on desktop */}
                  <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border-t sm:border border-emerald-500/30 rounded-t-3xl sm:rounded-2xl p-6 pb-8 sm:p-8 w-full sm:max-w-sm shadow-2xl shadow-emerald-500/20 animate-slide-up sm:animate-fade-in safe-bottom">
                    {/* Drag Handle - Mobile only */}
                    <div className="flex justify-center mb-4 sm:hidden">
                      <div className="w-12 h-1.5 bg-slate-600 rounded-full" />
                    </div>

                    {/* Close button - Desktop only */}
                    <button
                      onClick={() => setShowModal(false)}
                      className="hidden sm:block absolute top-3 right-3 text-slate-500 hover:text-white transition-colors"
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

                    {/* Success Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <FaCheck className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-2">
                      Đã copy mã kích hoạt!
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm text-center mb-5 sm:mb-6 leading-relaxed">
                      Vui lòng{" "}
                      <span className="text-amber-400 font-semibold">
                        Dán (Paste)
                      </span>{" "}
                      vào khung chat Zalo để nhân viên hỗ trợ ngay
                    </p>

                    {/* CTA Button - Larger touch target on mobile */}
                    <button
                      onClick={openZalo}
                      className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 active:from-blue-600 active:to-blue-700 text-white font-bold text-base sm:text-lg py-4 sm:py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-150 active:scale-[0.98]"
                    >
                      <SiZalo className="w-6 h-6" />
                      <span>Mở Zalo ngay</span>
                      <span className="text-lg">➔</span>
                    </button>

                    {/* Hint - Mã code */}
                    <p className="text-slate-500 text-xs text-center mt-4">
                      Mã của bạn:{" "}
                      <span className="text-emerald-400 font-mono font-bold">
                        {SHORTCODES[selectedPlan]}
                      </span>
                    </p>
                  </div>
                </div>
              )}

              {!affiliate.isAffiliate && (
                <div className="mt-3 text-center">
                  <TransactionModal />
                </div>
              )}

              {/* Trust Icons */}
              <div className="mt-3 pt-3 border-t border-slate-700/50 flex items-center justify-center gap-4 text-slate-500 text-xs">
                <span className="flex items-center gap-1">
                  <FaShieldAlt className="w-3 h-3 text-emerald-400" />
                  Bảo hành 1:1
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-amber-400">⚡</span>
                  Kích hoạt 5 phút
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
