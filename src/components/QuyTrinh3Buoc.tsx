"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, Phone, Video } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { resolveAffiliate } from "@/lib/affiliate";
import NeuralNetworkBackground from "./NeuralNetworkBackground";

export default function QuyTrinh3Buoc() {
  const searchParams = useSearchParams();
  const affiliate = resolveAffiliate(searchParams.get("ref"));
  const shortcode = `MUA_GPT_${Math.round(affiliate.monthlyPrice / 1000)}K`;
  const transferLabel = `${Math.round(affiliate.monthlyPrice / 1000)}k`;

  const messages = useMemo(
    () => [
      {
        side: "right" as const,
        text: shortcode,
      },
      {
        side: "left" as const,
        text: (
          <>
            Chào bạn 👋 Để nâng cấp, bạn gửi shop{" "}
            <span className="font-semibold text-white">ĐỊA CHỈ EMAIL</span> nhé
            (Cam kết KHÔNG cần mật khẩu). Hệ thống sẽ kích hoạt ngay trong 1
            phút! ⚡
          </>
        ),
      },
      {
        side: "right" as const,
        text: "premiumshop@gmail.com",
      },
      {
        side: "left" as const,
        text: `Đã nâng cấp xong gói Plus! ✅ Bạn đăng nhập check OK rồi mới cần chuyển khoản ${transferLabel} nhé.`,
      },
    ],
    [shortcode, transferLabel],
  );

  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger each message with 600ms delay
          messages.forEach((_, i) => {
            setTimeout(
              () => setVisibleCount((c) => Math.max(c, i + 1)),
              i * 700,
            );
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [messages]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0a0f1a] py-20 lg:py-28"
    >
      <NeuralNetworkBackground nodeCount={68} />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headers */}
        <h2 className="text-3xl font-bold text-center text-white">
          Quy Trình Nâng Cấp Tự Động
        </h2>
        <p className="text-gray-400 text-center mt-2 mb-10 max-w-xl mx-auto">
          Nhanh gọn, bảo mật, và hoàn toàn rủi ro bằng 0. Mọi thứ diễn ra trong
          3 tin nhắn.
        </p>

        {/* Zalo Chat Mockup Container */}
        <div className="max-w-md mx-auto">
          <div className="bg-[#111b21] shadow-2xl shadow-blue-900/20 rounded-[2rem] border border-gray-800 overflow-hidden">
            {/* App Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-800 bg-[#1a2730]">
              <ChevronLeft className="w-5 h-5 text-gray-400 shrink-0" />
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/logo.png"
                  alt="PremiumShop"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-semibold truncate">
                  PremiumShop Hỗ Trợ
                </p>
                <p className="text-green-400 text-xs">Online</p>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Video className="w-5 h-5" />
                <Phone className="w-5 h-5" />
              </div>
            </div>

            {/* Chat Body */}
            <div className="px-4 py-5 flex flex-col gap-2 min-h-[320px]">
              {messages.map((msg, i) => {
                const isVisible = i < visibleCount;
                const isRight = msg.side === "right";

                return (
                  <div
                    key={i}
                    className={`transition-all duration-500 ease-out ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    } ${i > 0 ? "mt-1" : ""}`}
                  >
                    {isRight ? (
                      <div className="flex justify-end">
                        <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-2 w-max max-w-[85%] text-sm">
                          {msg.text}
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-start">
                        <div className="bg-[#202c33] text-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] shadow-sm text-sm leading-relaxed">
                          {msg.text}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Typing indicator — shows briefly before last message */}
              {visibleCount >= 3 && visibleCount < 4 && (
                <div className="flex justify-start mt-1 animate-pulse">
                  <div className="bg-[#202c33] rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input Bar */}
            <div className="px-4 py-3 border-t border-gray-800 bg-[#1a2730] flex items-center gap-3">
              <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-gray-500 text-sm">
                Nhập tin nhắn...
              </div>
              <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Trust Badge */}
        <p className="text-sm text-green-400 text-center mt-6 flex justify-center items-center gap-2">
          🔒 Chỉ yêu cầu Email – Nhận tài khoản trước, an tâm trả tiền sau.
        </p>
      </div>
    </section>
  );
}
