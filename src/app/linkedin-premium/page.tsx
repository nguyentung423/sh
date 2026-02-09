"use client";

import { useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import {
  FaLinkedin,
  FaCheck,
  FaShieldAlt,
  FaBolt,
  FaGift,
} from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

export default function LinkedInPremiumPage() {
  const [showModal, setShowModal] = useState(false);

  const handleCtaClick = async () => {
    const shortcode = "MUA_LINKEDIN_12T";

    sendGAEvent("event", "begin_zalo_flow", {
      plan: "linkedin_premium_12m",
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
      location: "linkedin_modal",
      plan: "linkedin_premium_12m",
    });
    window.open("https://zalo.me/0374918396", "_blank");
    setShowModal(false);
  };

  return (
    <div
      className="min-h-screen bg-[#F3F2EF]"
      style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
    >
      {/* ========== HEADER (Dark Mode - Brand Consistency) ========== */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-white/5 shadow-lg shadow-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Left - Logo (Same as Homepage) */}
            <Link
              href="/"
              className="flex items-center gap-1.5 md:gap-3 flex-shrink-0"
            >
              <div className="relative w-12 h-12 md:w-14 md:h-14">
                <Image
                  src="/logo.png"
                  alt="PremiumShop Logo"
                  width={56}
                  height={56}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                PremiumShop
              </span>
            </Link>

            {/* Right - Navigation */}
            <div className="flex items-center">
              <Link
                href="/"
                className="text-white/90 hover:text-white text-sm font-normal transition-colors"
              >
                Trang Chủ
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ========== HERO SECTION (Split Screen) ========== */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* ---- LEFT COLUMN: The Professional Pitch ---- */}
            <div className="order-1 lg:order-1">
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0077B5] leading-tight tracking-tight mb-4">
                Tăng 2,7 Lần Cơ Hội
                <br />
                Được Tuyển Dụng 🚀
              </h1>

              {/* Sub-headline */}
              <p className="text-[#666] text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
                Gói{" "}
                <span className="font-semibold text-[#333]">
                  LinkedIn Career Chính Chủ (12 Tháng)
                </span>{" "}
                — Vũ khí bí mật cho Ứng viên & Sinh viên năm cuối.
              </p>

              {/* Hero Image */}
              <div className="relative mb-10 rounded-2xl overflow-hidden shadow-xl shadow-[#0077B5]/10">
                <Image
                  src="/unnamed (1).png"
                  alt="LinkedIn Premium Career"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* Benefit Bullets */}
              <div className="space-y-5">
                {[
                  {
                    title: "Thấu hiểu Nhà Tuyển Dụng",
                    desc: "Xem danh sách chi tiết ai đã xem hồ sơ của bạn trong 365 ngày. Nắm bắt cơ hội kết nối ngay khi họ quan tâm.",
                  },
                  {
                    title: "Kết nối trực tiếp Decision Maker",
                    desc: "5 InMail/tháng giúp bạn gửi tin nhắn trực tiếp tới HR Manager/CEO mà không cần kết bạn. Tăng tỷ lệ phản hồi gấp 3 lần.",
                  },
                  {
                    title: "Vị thế 'Top Applicant'",
                    desc: "Hồ sơ của bạn luôn được ưu tiên hiển thị đầu danh sách ứng viên. Đánh bại sự cạnh tranh từ hàng trăm hồ sơ khác.",
                  },
                  {
                    title: "Nâng tầm CV chuyên nghiệp",
                    desc: "Truy cập 22.000+ khóa học LinkedIn Learning. Nhận chứng chỉ chính hãng để chứng minh năng lực chuyên môn.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3.5">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#0077B5]/10 flex items-center justify-center mt-0.5">
                      <FaCheck className="w-3.5 h-3.5 text-[#0077B5]" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#333] text-base">
                        {item.title}:
                      </span>{" "}
                      <span className="text-[#666] text-base leading-relaxed">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ---- RIGHT COLUMN: The Conversion Card ---- */}
            <div className="order-2 lg:order-2 lg:sticky lg:top-20">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-200/50 overflow-hidden">
                {/* Best Value Banner */}
                <div className="bg-gradient-to-r from-[#DAA520] to-[#F5C75D] py-2.5 px-4 text-center">
                  <span className="text-white text-xs font-bold tracking-widest uppercase">
                    ⭐ Gói Bán Chạy Nhất
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8">
                  {/* Product Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077B5] to-[#005E93] flex items-center justify-center shadow-lg shadow-[#0077B5]/25">
                      <FaLinkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0077B5] text-lg leading-snug">
                        LinkedIn Premium Career
                      </h3>
                      <p className="text-[#999] text-sm">(Gói 1 Năm)</p>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#999] text-sm">Giá gốc:</span>
                      <span className="text-[#AAA] text-base line-through">
                        7.128.000đ
                      </span>
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl sm:text-5xl font-black text-[#0077B5]">
                        690.000đ
                      </span>
                      <span className="text-[#666] text-base">/ năm</span>
                    </div>
                    <p className="text-[#0077B5] text-sm font-medium mt-1.5">
                      (Tiết kiệm 90% — Nâng cấp chính chủ)
                    </p>
                  </div>

                  {/* ===== PREMIUM BONUS BOX ===== */}
                  <div className="rounded-xl bg-[#FFF8E1] border-2 border-[#DAA520]/40 p-4 sm:p-5 mb-6">
                    <div className="flex items-center gap-2 mb-2.5">
                      <FaGift className="w-4 h-4 text-[#DAA520]" />
                      <span className="font-bold text-[#333] text-sm">
                        ƯU ĐÃI ĐỘC QUYỀN HÔM NAY
                      </span>
                    </div>
                    <p className="text-[#333] text-sm font-semibold mb-1">
                      🎁 TẶNG NGAY:{" "}
                      <span className="text-[#0077B5]">
                        01 Tháng ChatGPT Plus
                      </span>
                    </p>
                    <p className="text-[#777] text-xs leading-relaxed">
                      Combo hủy diệt: AI viết CV + LinkedIn rải hồ sơ.
                    </p>
                  </div>

                  {/* Main CTA */}
                  <button
                    onClick={handleCtaClick}
                    className="w-full bg-[#0077B5] hover:bg-[#005E93] active:bg-[#004D7A] text-white font-extrabold text-lg sm:text-xl py-4 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-[0_4px_20px_rgba(0,119,181,0.4),0_2px_8px_rgba(0,119,181,0.25)] hover:shadow-[0_6px_28px_rgba(0,119,181,0.5),0_4px_12px_rgba(0,119,181,0.3)] cursor-pointer flex items-center justify-center gap-2.5"
                  >
                    <SiZalo className="w-5 h-5" />
                    NÂNG CẤP NGAY
                  </button>

                  {/* Trust line */}
                  <p className="mt-3 text-center text-emerald-600 text-sm font-medium">
                    ✅ Làm xong mới thanh toán (Uy tín 100%)
                  </p>

                  {/* Social Proof */}
                  <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                    <p className="text-sm text-[#666]">
                      <span className="text-[#DAA520]">⭐⭐⭐⭐⭐</span>{" "}
                      <span className="font-semibold text-[#333]">500+</span>{" "}
                      Sinh viên đã tin dùng
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER (Dark - Brand Consistency with Homepage) ========== */}
      <footer className="py-8 bg-slate-950 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="PremiumShop Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <p className="text-white font-bold text-sm">PremiumShop</p>
            </div>

            {/* Trust */}
            <div className="flex items-center gap-4 text-slate-500 text-xs">
              <span className="flex items-center gap-1">
                <FaShieldAlt className="w-3 h-3 text-amber-400" />
                Bảo hành: Lỗi là Hoàn Tiền
              </span>
              <span className="flex items-center gap-1">
                <FaBolt className="w-3 h-3 text-amber-400" />
                Kích hoạt nhanh
              </span>
            </div>

            {/* Link & Copyright */}
            <div className="flex flex-col items-center gap-2">
              <Link
                href="/"
                className="text-white/80 hover:text-white text-sm transition-colors"
              >
                Trang Chủ
              </Link>
              <p className="text-slate-500 text-xs">
                © 2026 All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* ========== CONFIRMATION MODAL ========== */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />

          {/* Modal - Bottom sheet on mobile */}
          <div className="relative bg-white rounded-t-3xl sm:rounded-2xl p-6 pb-8 sm:p-8 w-full sm:max-w-sm shadow-2xl animate-slide-up sm:animate-fade-in safe-bottom">
            {/* Drag Handle - Mobile */}
            <div className="flex justify-center mb-4 sm:hidden">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
            </div>

            {/* Close - Desktop */}
            <button
              onClick={() => setShowModal(false)}
              className="hidden sm:block absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
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
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0077B5]/10 flex items-center justify-center">
                <FaCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[#0077B5]" />
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#333] text-center mb-2">
              Đã copy mã kích hoạt!
            </h3>
            <p className="text-[#666] text-sm text-center mb-5 sm:mb-6 leading-relaxed">
              Vui lòng{" "}
              <span className="text-[#DAA520] font-semibold">Dán (Paste)</span>{" "}
              vào khung chat Zalo để nhân viên hỗ trợ ngay
            </p>

            <button
              onClick={openZalo}
              className="w-full flex items-center justify-center gap-3 bg-[#0077B5] hover:bg-[#005E93] text-white font-bold text-base sm:text-lg py-4 rounded-xl shadow-lg shadow-[#0077B5]/30 transition-all duration-150 active:scale-[0.98]"
            >
              <SiZalo className="w-6 h-6" />
              <span>Mở Zalo ngay</span>
              <span className="text-lg">➔</span>
            </button>

            <p className="text-[#bbb] text-xs text-center mt-4">
              Mã của bạn:{" "}
              <span className="text-[#0077B5] font-mono font-bold">
                MUA_LINKEDIN_12T
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
