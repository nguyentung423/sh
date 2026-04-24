"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SiZalo, SiOpenai } from "react-icons/si";
import { FaShieldAlt, FaCheck } from "react-icons/fa";
import { sendGAEvent } from "@next/third-parties/google";
import { ZALO_CONFIG } from "@/data/products";
import { formatVnd, resolveAffiliate } from "@/lib/affiliate";

// Pricing options
const pricingOptions = [
  {
    id: "trial",
    name: "ChatGPT Business + Canva Pro",
    price: 100000,
    note: "AI + thiết kế cho học tập và sáng tạo • 1 tháng",
    badgeStyle: "trial",
    getMessage: () =>
      ZALO_CONFIG.getMessage("ChatGPT Business + Canva Pro - 1 Tháng"),
  },
  {
    id: "1month",
    name: "ChatGPT Business GPT-5.5",
    price: 70000,
    note: "Tập trung AI chuyên sâu cho học tập và công việc • 1 tháng",
    badgeStyle: "best",
    getMessage: () =>
      ZALO_CONFIG.getMessage("ChatGPT Business GPT-5.5 - 1 Tháng"),
  },
  {
    id: "3month",
    name: "ChatGPT Business + Netflix 4K",
    price: 110000,
    note: "AI làm việc + giải trí 4K sau giờ học • 1 tháng",
    badgeStyle: "best",
    getMessage: () =>
      ZALO_CONFIG.getMessage("ChatGPT Business + Netflix 4K - 1 Tháng"),
  },
];

// Shortcode mapping
const SHORTCODES: Record<string, string> = {
  trial: "MUA_COMBO_100K",
  "1month": "MUA_GPT_70K",
  "3month": "MUA_COMBO_110K",
};

const AFFILIATE_SHORTCODES: Record<string, string> = {
  trial: "MUA_COMBO_100K",
  "1month": "MUA_GPT_60K",
  "3month": "MUA_COMBO_110K",
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const searchParams = useSearchParams();
  const affiliate = resolveAffiliate(searchParams.get("ref"));
  const [selectedPlan, setSelectedPlan] = useState("1month");
  const [showModal, setShowModal] = useState(false);
  const monthlyPrice = affiliate.monthlyPrice;
  const monthlyPriceLabel = `${formatVnd(monthlyPrice)}đ`;
  const oldPrice = 799000;
  const savings = oldPrice - monthlyPrice;
  const activeShortcodes = affiliate.isAffiliate
    ? AFFILIATE_SHORTCODES
    : SHORTCODES;

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const canvasEl = canvasRef.current;
    if (!sectionEl || !canvasEl) return;

    const ctx = canvasEl.getContext("2d");
    if (!ctx) return;

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      depth: number;
      color: string;
    };

    const NODE_COUNT = 92;
    const MAX_LINK_DISTANCE = 120;
    const CURSOR_LINK_DISTANCE = 150;
    const CURSOR_REPEL_DISTANCE = 95;
    const CURSOR_REPEL_FORCE = 0.09;

    let width = 0;
    let height = 0;
    let rafId = 0;
    let particles: Particle[] = [];

    const mouse = {
      x: 0,
      y: 0,
      active: false,
    };

    const colorPool = ["#00ff88", "#00c3ff"];

    const initParticles = () => {
      particles = Array.from({ length: NODE_COUNT }, () => {
        const depth = 0.6 + Math.random() * 1.1;
        const angle = Math.random() * Math.PI * 2;
        const speed = (0.15 + Math.random() * 0.25) * depth;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 0.8 + Math.random() * 1.8,
          depth,
          color: colorPool[Math.floor(Math.random() * colorPool.length)],
        };
      });
    };

    const resizeCanvas = () => {
      width = sectionEl.clientWidth;
      height = sectionEl.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvasEl.width = Math.floor(width * dpr);
      canvasEl.height = Math.floor(height * dpr);
      canvasEl.style.width = `${width}px`;
      canvasEl.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    const onMouseMove = (event: MouseEvent) => {
      const rect = sectionEl.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.active = false;
    };

    const drawNeuralLinks = () => {
      for (let i = 0; i < particles.length; i += 1) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j += 1) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < MAX_LINK_DISTANCE) {
            const opacity = (1 - dist / MAX_LINK_DISTANCE) * 0.42;
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };

    const drawMouseLinksAndRepel = () => {
      if (!mouse.active) return;

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);

        if (dist < CURSOR_LINK_DISTANCE) {
          const opacity = (1 - dist / CURSOR_LINK_DISTANCE) * 0.55;
          ctx.strokeStyle = `rgba(0, 255, 136, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }

        if (dist > 0 && dist < CURSOR_REPEL_DISTANCE) {
          const repelPower =
            ((CURSOR_REPEL_DISTANCE - dist) / CURSOR_REPEL_DISTANCE) *
            CURSOR_REPEL_FORCE;
          p.vx += (dx / dist) * repelPower * p.depth;
          p.vy += (dy / dist) * repelPower * p.depth;
        }
      }

      ctx.fillStyle = "rgba(0, 255, 136, 0.25)";
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 2.5, 0, Math.PI * 2);
      ctx.fill();
    };

    const updateAndDrawParticles = () => {
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        p.vx *= 0.995;
        p.vy *= 0.995;

        if (Math.abs(p.vx) < 0.03) p.vx += (Math.random() - 0.5) * 0.04;
        if (Math.abs(p.vy) < 0.03) p.vy += (Math.random() - 0.5) * 0.04;

        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;

        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));

        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.85;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = 0.18;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.6, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      drawNeuralLinks();
      drawMouseLinksAndRepel();
      updateAndDrawParticles();
      rafId = window.requestAnimationFrame(animate);
    };

    resizeCanvas();
    sectionEl.addEventListener("mousemove", onMouseMove);
    sectionEl.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", resizeCanvas);
    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(rafId);
      sectionEl.removeEventListener("mousemove", onMouseMove);
      sectionEl.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const handleZaloClick = async () => {
    const shortcode = activeShortcodes[selectedPlan] || "MUA_GPT_70K";

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
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center snap-start"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <canvas ref={canvasRef} className="hero-neural-canvas" />
        <div className="hero-code-overlay" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 translate-x-1/4 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-amber-500/8 rounded-full blur-[100px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 md:pt-28 md:pb-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* ============ LEFT COLUMN - The Hook & Anchor ============ */}
          <div className="order-1">
            {/* Main Headline */}
            <h1 className="mb-3 md:mb-4">
              <span className="block text-white font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Trải Nghiệm{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                  GPT-5.5
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
                ChatGPT Business
              </span>{" "}
              chính chủ. Nhanh hơn, Thông minh hơn.
            </p>

            <div className="flex flex-wrap gap-2 mb-5 md:mb-8 text-xs sm:text-sm">
              <a
                href="#comparison"
                className="text-cyan-300/90 hover:text-cyan-200 underline decoration-cyan-500/40 underline-offset-4"
              >
                Xem so sánh gói
              </a>
              <a
                href="#commitment"
                className="text-emerald-300/90 hover:text-emerald-200 underline decoration-emerald-500/40 underline-offset-4"
              >
                Cam kết bảo hành
              </a>
              <a
                href="#process"
                className="text-amber-300/90 hover:text-amber-200 underline decoration-amber-500/40 underline-offset-4"
              >
                Quy trình kích hoạt
              </a>
              <a
                href="#faq"
                className="text-sky-300/90 hover:text-sky-200 underline decoration-sky-500/40 underline-offset-4"
              >
                FAQ ChatGPT Business
              </a>
            </div>

            {/* ====== PRICE SLASH LAYOUT ====== */}
            <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
              {/* Old Price - Strikethrough */}
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <span className="text-slate-500 text-sm">Giá gốc:</span>
                <span className="text-red-400/80 text-base sm:text-lg line-through decoration-red-500/50 decoration-2">
                  {formatVnd(oldPrice)}đ/tháng
                </span>
              </div>

              {/* New Price - HUGE with Arrow */}
              <div className="flex items-end gap-3 sm:gap-4">
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-emerald-400 via-green-400 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(16,185,129,0.4)]">
                      {monthlyPriceLabel}
                    </span>
                    <span className="text-slate-400 text-base sm:text-lg">
                      /tháng
                    </span>
                  </div>
                </div>

                {/* -94% Badge with Arrow */}
                <div className="flex flex-col items-center shrink-0">
                  <span className="text-slate-500 text-base sm:text-lg mb-1">
                    ↓
                  </span>
                  <span className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 text-xs sm:text-sm font-black shadow-lg shadow-amber-500/30">
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
            <div className="border-beam-card rounded-2xl p-[1px]">
              <div className="border-beam-content backdrop-blur-2xl bg-slate-900/80 rounded-[15px] p-4 sm:p-6 shadow-[0_0_60px_rgba(16,185,129,0.15)]">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white">
                      Chọn Gói
                    </h3>
                    <p className="text-slate-400 text-sm">
                      ChatGPT Business - GPT-5.5
                    </p>
                  </div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <SiOpenai className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                  </div>
                </div>

                {/* Pricing Options - Radio Style (Compact) */}
                <div className="space-y-2 mb-4">
                  {pricingOptions.map((option) => {
                    const effectivePrice =
                      option.id === "1month" ? monthlyPrice : option.price;
                    const savePercent = Math.round(
                      ((oldPrice - effectivePrice) / oldPrice) * 100,
                    );

                    return (
                      <label
                        key={option.id}
                        className={`relative flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between px-3 py-3 rounded-xl border-2 transition-all duration-200 ${
                          selectedPlan === option.id
                            ? "cursor-pointer border-emerald-500 bg-emerald-500/15 shadow-[0_0_20px_rgba(16,185,129,0.25)] ring-2 ring-emerald-500/20"
                            : "cursor-pointer border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 hover:bg-slate-800/50"
                        }`}
                      >
                        <div className="flex items-start gap-2.5 min-w-0">
                          <div
                            className={`w-4 h-4 mt-0.5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                              selectedPlan === option.id
                                ? "border-emerald-500 bg-emerald-500"
                                : "border-slate-600"
                            }`}
                          >
                            {selectedPlan === option.id && (
                              <FaCheck className="w-2 h-2 text-white" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-1.5">
                              <span className="font-semibold text-sm text-white leading-snug">
                                {option.name}
                              </span>
                              <span
                                className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                                  option.badgeStyle === "trial"
                                    ? "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                                    : "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900"
                                }`}
                              >
                                Save {savePercent}%
                              </span>
                            </div>
                            <p className="text-[11px] mt-1 text-slate-400 leading-relaxed">
                              {option.note}
                            </p>
                          </div>
                        </div>
                        <span className="text-base sm:text-lg font-bold text-white self-end sm:self-auto">
                          {option.id === "1month"
                            ? monthlyPriceLabel
                            : `${formatVnd(option.price)}đ`}
                        </span>
                        <input
                          type="radio"
                          name="pricing"
                          value={option.id}
                          checked={selectedPlan === option.id}
                          onChange={() => setSelectedPlan(option.id)}
                          className="sr-only"
                        />
                      </label>
                    );
                  })}
                </div>

                {/* Main CTA Button - Pulsing Shadow */}
                <button
                  onClick={handleZaloClick}
                  className="w-full flex items-center justify-center gap-3 text-white font-bold text-base sm:text-lg py-3.5 sm:py-4 rounded-xl transition-all duration-300 cursor-pointer bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] animate-pulse-glow"
                >
                  <SiZalo className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>MUA NGAY - HOTLINE</span>
                </button>

                {/* Trust Icons */}
                <div className="mt-3 pt-3 border-t border-slate-700/50 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-slate-500 text-xs">
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
      </div>

      {/* Confirmation Modal - rendered at section root to avoid stacking conflicts */}
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
              <span className="text-amber-400 font-semibold">Dán (Paste)</span>{" "}
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
                {activeShortcodes[selectedPlan]}
              </span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
