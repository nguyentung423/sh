"use client";

import { SiZalo, SiOpenai } from "react-icons/si";
import { FaCheck, FaCrown } from "react-icons/fa";
import {
  Handshake,
  ShieldCheck,
  Briefcase,
  Mail,
  Settings,
  Sparkles,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import HeroSection from "./HeroSection";

export default function HomePage() {
  const stepContainer: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.12,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const stepItem: Variants = {
    hidden: { opacity: 0, y: 14, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut" as const },
    },
  };

  const steps = [
    {
      title: "1. Gửi Email Chính Chủ",
      desc: "Bạn chỉ cần gửi địa chỉ Email. Không cần mật khẩu hay bất kỳ quyền truy cập nào.",
      icon: Mail,
      accent: "bg-emerald-500/15 border-emerald-400/30 shadow-emerald-500/25",
      glow: "from-emerald-500 to-green-400",
    },
    {
      title: "2. Shop nâng cấp",
      desc: "Tự kích hoạt gói Business trong ~5 phút. Bạn chỉ cần kiểm tra xác nhận xong rồi mới thanh toán.",
      icon: Settings,
      accent: "bg-emerald-500/12 border-emerald-400/30 shadow-emerald-500/25",
      glow: "from-emerald-400 to-teal-400",
    },
    {
      title: "3. Bảo Hành 1 Đổi 1",
      desc: "Nhận mail xác nhận từ OpenAI, có vấn đề hỗ trợ cấp mới ngay. An tâm trọn thời gian.",
      icon: Sparkles,
      accent: "bg-emerald-500/12 border-emerald-400/30 shadow-emerald-500/25",
      glow: "from-emerald-300 to-lime-300",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* SECTION 1: Hero - The Instant Buy Engine */}
      <HeroSection />

      {/* SECTION 2: Comparison Table - The Logic */}
      <section className="min-h-screen bg-[#0a0f1a] relative flex flex-col md:items-center md:justify-center py-20 md:py-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Section Header */}
          <div className="text-center mb-6 md:mb-8">
            <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
              So Sánh{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Trực Tiếp
              </span>
            </h2>
            <p className="text-slate-400 text-xs md:text-sm">
              Tại sao 5.000+ khách hàng chọn PremiumShop?
            </p>
          </div>

          {/* Comparison Table - Desktop */}
          <div className="hidden md:block mt-10 overflow-visible pt-12">
            <div className="grid grid-cols-3 relative items-stretch">
              {/* Header Row */}
              <div className="py-6 px-5 bg-slate-900/30 rounded-tl-2xl h-full" />
              <div className="py-6 px-5 bg-slate-800/40 text-center opacity-50 h-full flex flex-col justify-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <SiOpenai className="w-5 h-5 text-slate-500" />
                  <span className="text-slate-500 font-medium">OpenAI</span>
                </div>
                <p className="text-slate-600 text-xs">Giá gốc</p>
              </div>
              {/* PremiumShop Column Header - Solid Background, No Transparency */}
              <div className="relative z-20 px-5 py-6 bg-slate-900 rounded-t-2xl border-2 border-b-0 border-emerald-500/50 shadow-2xl shadow-emerald-500/20 text-center h-full flex flex-col justify-center gap-1">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold shadow-lg shadow-emerald-500/40">
                    <FaCrown className="w-3 h-3" />
                    Khuyên Dùng
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <SiOpenai className="w-5 h-5 text-emerald-400" />
                  <span className="text-white font-semibold">PremiumShop</span>
                </div>
                <p className="text-emerald-400 text-xs font-medium">
                  Tiết kiệm 93%
                </p>
              </div>

              {/* Row 1: Công Nghệ */}
              <div className="py-5 px-5 bg-slate-900/30 flex items-center border-t border-slate-800/50">
                <span className="text-slate-300 text-sm font-medium">
                  Model AI Chính
                </span>
              </div>
              <div className="py-5 px-5 bg-slate-800/30 flex items-center justify-center opacity-50 border-t border-slate-700/30">
                <span className="text-slate-500 text-sm">GPT-5.2 Standard</span>
              </div>
              <div className="relative z-20 py-5 px-5 bg-slate-900 flex items-center justify-center border-x-2 border-emerald-500/50 shadow-lg shadow-emerald-500/10">
                <span className="text-emerald-400 text-sm font-semibold flex items-center gap-1">
                  <FaCheck className="w-3 h-3" />
                  GPT-5.2 Business
                </span>
              </div>

              {/* Row 2: Tính Năng Đặc Quyền */}
              <div className="py-5 px-5 bg-slate-900/30 flex items-center border-t border-slate-800/50">
                <span className="text-slate-300 text-sm font-medium">
                  Chế độ Pro (Reasoning)
                </span>
              </div>
              <div className="py-5 px-5 bg-slate-800/30 flex items-center justify-center opacity-50 border-t border-slate-700/30">
                <span className="text-slate-500 text-sm">Phải mua gói $30</span>
              </div>
              <div className="relative z-20 py-5 px-5 bg-slate-900 flex flex-col items-center justify-center border-x-2 border-emerald-500/50 shadow-lg shadow-emerald-500/10">
                <span className="text-yellow-400 text-sm font-bold flex items-center gap-1">
                  💎 20 Lần/Tháng
                </span>
                <span className="text-slate-400 text-xs mt-1">
                  Dành cho tác vụ siêu khó
                </span>
              </div>

              {/* Row 3: Chi Phí */}
              <div className="py-5 px-5 bg-slate-900/30 flex items-center border-t border-slate-800/50">
                <span className="text-slate-300 text-sm font-medium">
                  Chi phí hàng tháng
                </span>
              </div>
              <div className="py-5 px-5 bg-slate-800/30 flex items-center justify-center opacity-50 border-t border-slate-700/30">
                <span className="text-red-400 text-sm line-through">
                  799.000đ
                </span>
              </div>
              <div className="relative z-20 py-5 px-5 bg-slate-900 flex items-center justify-center border-x-2 border-emerald-500/50 shadow-lg shadow-emerald-500/10">
                <span className="text-2xl font-bold text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                  50.000đ
                </span>
              </div>

              {/* Row 4: Lưu Trữ Chat */}
              <div className="py-5 px-5 bg-slate-900/30 flex items-center border-t border-slate-800/50">
                <span className="text-slate-300 text-sm font-medium">
                  Lịch sử đoạn chat
                </span>
              </div>
              <div className="py-5 px-5 bg-slate-800/30 flex items-center justify-center opacity-50 border-t border-slate-700/30">
                <span className="text-slate-500 text-sm">Vĩnh viễn</span>
              </div>
              <div className="relative z-20 py-5 px-5 bg-slate-900 flex items-center justify-center border-x-2 border-emerald-500/50 shadow-lg shadow-emerald-500/10">
                <span className="text-emerald-400 text-sm font-medium flex items-center gap-1">
                  <FaCheck className="w-3 h-3" />
                  30 Ngày
                </span>
              </div>

              {/* Row 5: Thanh Toán & Hỗ Trợ */}
              <div className="py-5 px-5 bg-slate-900/30 flex items-center border-t border-slate-800/50 rounded-bl-2xl">
                <span className="text-slate-300 text-sm font-medium">
                  Thanh toán & Support
                </span>
              </div>
              <div className="py-5 px-5 bg-slate-800/30 flex items-center justify-center opacity-50 border-t border-slate-700/30">
                <span className="text-slate-500 text-xs text-center">
                  Visa Quốc Tế
                  <br />
                  Mail (Chậm)
                </span>
              </div>
              <div className="relative z-20 py-5 px-5 bg-slate-900 flex items-center justify-center border-2 border-t-0 border-emerald-500/50 rounded-b-2xl shadow-lg shadow-emerald-500/10">
                <span className="text-emerald-400 text-xs font-medium text-center">
                  Momo/Bank
                  <br />
                  <span className="flex items-center justify-center gap-1 mt-0.5">
                    <SiZalo className="w-3 h-3" /> Zalo 1:1 (24/7)
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Trust Text Below Table */}
          <div className="hidden md:block mt-4 text-center">
            <p className="text-slate-500 text-xs flex items-center justify-center gap-2">
              <span className="text-emerald-400">🔒</span>
              Dữ liệu của bạn an toàn tuyệt đối. Hỗ trợ backup 24/7.
            </p>
          </div>

          {/* Comparison Table - Mobile (Stacked Cards) */}
          <div className="md:hidden space-y-4 mt-4">
            {/* OpenAI Card - Dimmed */}
            <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/40 opacity-50">
              <div className="flex items-center gap-2 mb-2">
                <SiOpenai className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-slate-500 font-medium text-xs">
                  OpenAI (Giá gốc)
                </span>
              </div>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-700/40">
                  <span className="text-slate-600">Model AI Chính</span>
                  <span className="text-slate-500">GPT-5.2 Standard</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-700/40">
                  <span className="text-slate-600">Pro Mode</span>
                  <span className="text-slate-500">Phải mua $30</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-700/40">
                  <span className="text-slate-600">Chi phí</span>
                  <span className="text-red-400 line-through">799k</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-700/40">
                  <span className="text-slate-600">Chat History</span>
                  <span className="text-slate-500">Vĩnh viễn</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-600">Support</span>
                  <span className="text-slate-500">Visa - Mail</span>
                </div>
              </div>
            </div>

            {/* PremiumShop Card - Highlighted Winner */}
            <div className="relative p-4 rounded-xl bg-slate-900 border-2 border-emerald-500/50 shadow-xl shadow-emerald-500/20">
              <div className="absolute -top-3 left-3 z-10">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-[10px] font-bold shadow-lg shadow-emerald-500/40">
                  <FaCrown className="w-2.5 h-2.5" />
                  Khuyên Dùng
                </span>
              </div>
              <div className="flex items-center gap-2 mb-3 mt-1">
                <SiOpenai className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-white font-semibold text-xs">
                  PremiumShop
                </span>
                <span className="text-emerald-400 text-[10px] font-medium ml-auto">
                  Tiết kiệm 93%
                </span>
              </div>
              <div className="space-y-0 text-xs">
                <div className="flex justify-between items-center py-2 border-b border-emerald-500/20">
                  <span className="text-slate-400">Model AI Chính</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <FaCheck className="w-2.5 h-2.5" />
                    GPT-5.2 Business
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-emerald-500/20">
                  <span className="text-slate-400">Pro Mode</span>
                  <span className="text-yellow-400 font-bold flex items-center gap-1">
                    💎 20 Lần/Tháng
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-emerald-500/20">
                  <span className="text-slate-400">Chi phí</span>
                  <span className="text-emerald-400 font-bold text-sm drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
                    50.000đ
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-emerald-500/20">
                  <span className="text-slate-400">Chat History</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <FaCheck className="w-2.5 h-2.5" /> 30 Ngày
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400">Support</span>
                  <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                    <SiZalo className="w-2.5 h-2.5" /> Momo - Zalo 24/7
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Trust Text */}
            <p className="text-slate-500 text-[10px] text-center flex items-center justify-center gap-1">
              <span className="text-emerald-400">🔒</span>
              Dữ liệu an toàn. Hỗ trợ backup 24/7.
            </p>
          </div>

          {/* CTA below table */}
          <div className="mt-6 md:mt-8 text-center">
            <a
              href="https://zalo.me/0374918396"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-300"
            >
              <SiZalo className="w-5 h-5" />
              Mua Ngay - Chỉ 50k/tháng
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: TRUST & PARTNERSHIP */}
      <section className="min-h-screen bg-[#0a0f1a] relative flex flex-col justify-center py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Cam Kết{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Uy Tín
              </span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
              An tâm tuyệt đối với dịch vụ chuyên nghiệp được hàng nghìn khách
              hàng tin tưởng
            </p>
          </div>

          {/* 3 Trust Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: NO-SCAM GUARANTEE - Green Glow */}
            <div className="relative p-6 lg:p-8 rounded-2xl bg-slate-800/30 border-2 border-purple-400/30 shadow-xl shadow-purple-900/20 backdrop-blur-sm">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/8 to-fuchsia-500/8"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-slate-900/60 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-purple-500/30">
                  <Handshake className="w-7 h-7 text-purple-300 drop-shadow-lg drop-shadow-purple-400/50" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-3">
                  Nâng Cấp Xong - Mới Thanh Toán
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  An tâm tuyệt đối. Chúng tôi nâng cấp thành công vào chính tài
                  khoản của bạn. Bạn đăng nhập kiểm tra OK rồi mới cần chuyển
                  khoản.
                </p>
              </div>
            </div>

            {/* Card 2: WARRANTY */}
            <div className="relative p-6 lg:p-8 rounded-2xl bg-slate-800/30 border border-cyan-500/30 shadow-xl backdrop-blur-sm">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-slate-900/60 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-cyan-500/30">
                  <ShieldCheck className="w-7 h-7 text-cyan-400 drop-shadow-lg drop-shadow-cyan-400/50" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-3">
                  Bảo Hành
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Cam kết bảo hành trọn thời gian. Nếu đổi Workspace, chúng tôi
                  hỗ trợ cấp mới ngay lập tức.
                </p>
              </div>
            </div>

            {/* Card 3: PARTNERSHIP */}
            <div className="relative p-6 lg:p-8 rounded-2xl bg-slate-800/30 border border-yellow-500/30 shadow-xl backdrop-blur-sm">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-slate-900/60 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-yellow-500/30">
                  <Briefcase className="w-7 h-7 text-yellow-400 drop-shadow-lg drop-shadow-yellow-400/50" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-3">
                  Tuyển Đại Lý / CTV
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Bạn muốn kinh doanh Software? Hợp tác ngay để nhận bảng giá sỉ
                  siêu tốt (Chiết khấu tới 40%). Hỗ trợ kỹ thuật A-Z.
                </p>
                <a
                  href="https://zalo.me/0374918396"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
                >
                  Liên hệ hợp tác ➔
                </a>
              </div>
            </div>
          </div>
          {/* SIMPLE ACTIVATION PROCESS */}
          <div className="mt-16 relative overflow-hidden rounded-2xl border border-emerald-500/15 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(16,185,129,0.08)]">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/8 via-transparent to-cyan-500/10" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 blur-3xl" />
            <div className="relative p-6 md:p-8">
              <div className="text-center mb-10">
                <p className="text-emerald-400 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                  Quy Trình 3 Bước
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Nâng Cấp Trước - Thanh Toán Sau
                </h3>
                <p className="text-slate-400 text-sm">
                  Bảo mật tuyệt đối · Bảo hành 1 đổi 1 · Hoàn tất trong ~5 phút
                </p>
              </div>

              <motion.div
                className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
                variants={stepContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                {steps.map(({ title, desc, icon: Icon, accent, glow }, idx) => (
                  <motion.div
                    key={title}
                    variants={stepItem}
                    whileHover={{
                      y: -6,
                      scale: 1.01,
                      transition: { duration: 0.2 },
                    }}
                    className="group relative overflow-hidden rounded-xl border border-slate-700/40 bg-slate-900/60 backdrop-blur-xl p-5 md:p-6 shadow-lg"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-emerald-500/8 via-transparent to-emerald-500/15" />
                    <div
                      className={`relative mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border ${accent} bg-white/5 shadow-lg`}
                    >
                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${glow} blur-md opacity-60`}
                      />
                      <Icon
                        className="relative z-10 h-5 w-5 text-emerald-200 drop-shadow-[0_0_12px_rgba(16,185,129,0.45)]"
                        strokeWidth={2.2}
                      />
                    </div>
                    <div className="relative">
                      <p className="text-xs text-emerald-300/80 font-semibold uppercase tracking-[0.12em] mb-2">
                        Bước {idx + 1}
                      </p>
                      <h4 className="text-white font-bold text-sm md:text-base mb-2 leading-tight">
                        {title}
                      </h4>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="text-center mt-8 text-slate-400 text-xs md:text-sm">
                🔒 Bảo mật tuyệt đối – Chỉ cần Email, không bao giờ hỏi mật
                khẩu. Bảo hành 1 đổi 1 nếu có sự cố.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MINIMAL FOOTER */}
      <footer className="py-6 bg-slate-950 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            © 2026 PremiumShop. Hỗ trợ khách hàng 24/7 qua{" "}
            <a
              href="https://zalo.me/0374918396"
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
