"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md bg-[#0f0f12] border border-white/10 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Đóng"
        >
          <svg
            className="w-4 h-4 text-white/70"
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

        {/* Content */}
        <div className="p-6 pt-8 text-center">
          {/* Icon */}
          <div className="text-4xl mb-4">🚀</div>

          {/* Headline */}
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            Google AI Pro cho Sinh viên
          </h2>

          {/* Main Text */}
          <p className="text-white/60 text-sm mb-1">
            Gemini 3.1 + Veo Video + 2TB Storage
          </p>
          <p className="text-white/60 text-sm mb-4">
            Cân mọi deadline - Chấp hết bài tập
          </p>

          {/* Highlight Sub-text */}
          <div className="inline-block bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2.5 mb-6">
            <p className="text-green-400 font-bold text-lg">Chỉ 50k/tháng</p>
            <p className="text-white/50 text-xs">
              Giá gốc 475k → Tiết kiệm 89%
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/gemini-pro"
            onClick={handleClose}
            className="block w-full py-3.5 px-6 bg-linear-to-r from-blue-500 via-green-500 to-emerald-500 hover:from-blue-600 hover:via-green-600 hover:to-emerald-600 text-white font-semibold text-sm rounded-xl transition-all duration-300"
          >
            Xem chi tiết gói Pro
          </Link>

          {/* Dismiss text */}
          <button
            onClick={handleClose}
            className="mt-4 text-white/50 text-xs hover:text-white/70 transition-colors"
          >
            Để sau
          </button>
        </div>
      </div>
    </div>
  );
}
