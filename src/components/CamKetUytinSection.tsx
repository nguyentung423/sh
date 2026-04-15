"use client";

import { Handshake, ShieldCheck, Lock } from "lucide-react";
import NeuralNetworkBackground from "./NeuralNetworkBackground";

const commitments = [
  {
    icon: Handshake,
    title: "Nâng Cấp Xong - Mới Thanh Toán",
    desc: "An tâm tuyệt đối. Chúng tôi nâng cấp thành công vào chính tài khoản của bạn. Bạn đăng nhập kiểm tra OK rồi mới cần chuyển khoản.",
    color: "text-cyan-400",
    glow: "shadow-cyan-500/40",
    hoverGlow: "group-hover/item:shadow-[0_0_40px_rgba(6,182,212,0.15)]",
  },
  {
    icon: ShieldCheck,
    title: "Bảo Hành 1 Đổi 1 Siêu Tốc",
    desc: "Cam kết bảo hành trọn thời gian sử dụng. Nếu có sự cố, chúng tôi hỗ trợ cấp mới ngay lập tức — không rườm rà.",
    color: "text-emerald-400",
    glow: "shadow-emerald-500/40",
    hoverGlow: "group-hover/item:shadow-[0_0_40px_rgba(16,185,129,0.15)]",
  },
  {
    icon: Lock,
    title: "Bảo Mật Riêng Tư 100%",
    desc: "Chỉ cần Email — không bao giờ hỏi mật khẩu hay bất kỳ quyền truy cập nào. Dữ liệu của bạn luôn thuộc về bạn.",
    color: "text-purple-400",
    glow: "shadow-purple-500/40",
    hoverGlow: "group-hover/item:shadow-[0_0_40px_rgba(147,51,234,0.15)]",
  },
];

export default function CamKetUytinSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] py-20 lg:py-28">
      <NeuralNetworkBackground nodeCount={72} />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-emerald-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Commitment
          </p>
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

        {/* Holographic 3-Column Grid */}
        <div className="group/grid grid grid-cols-1 md:grid-cols-3">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group/item relative flex flex-col items-center text-center px-6 lg:px-10 py-10 transition-all duration-500 ease-out
                  group-hover/grid:[&:not(:hover)]:opacity-50
                  hover:!opacity-100 hover:-translate-y-2 ${item.hoverGlow}
                  ${idx > 0 ? "md:border-l md:border-dashed md:border-gray-800" : ""}
                  ${idx < commitments.length - 1 ? "border-b border-dashed border-gray-800 md:border-b-0" : ""}
                `}
              >
                {/* Glowing Icon */}
                <div
                  className={`relative w-20 h-20 rounded-full flex items-center justify-center mb-8 bg-white/[0.03] border border-white/[0.06] shadow-lg ${item.glow} transition-shadow duration-500 group-hover/item:shadow-xl`}
                >
                  <div
                    className={`absolute inset-0 rounded-full ${item.color} opacity-[0.06] blur-xl transition-opacity duration-500 group-hover/item:opacity-[0.15]`}
                  />
                  <Icon
                    className={`relative z-10 w-9 h-9 ${item.color} drop-shadow-lg transition-transform duration-300 group-hover/item:scale-110`}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg lg:text-xl font-bold text-white mb-3 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
