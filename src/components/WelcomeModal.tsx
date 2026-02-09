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
      <div className="relative w-full max-w-md bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 border border-amber-500/40 rounded-2xl shadow-2xl shadow-amber-500/10 animate-in zoom-in-95 duration-300">
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
          <div className="text-5xl mb-4">🎁</div>

          {/* Headline */}
          <h2 className="text-xl md:text-2xl font-bold bg-linear-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent mb-3">
            🔥 ƯU ĐÃI ĐỘC QUYỀN 🔥
          </h2>

          {/* Main Text */}
          <p className="text-white font-semibold text-lg mb-1">
            Săn LinkedIn Premium Chính Chủ
          </p>
          <p className="text-white font-semibold text-lg mb-4">
            Giá Sinh Viên Cực Tốt
          </p>

          {/* Highlight Sub-text */}
          <div className="inline-block bg-[rgba(255,193,7,0.1)] border border-[#FFC107] rounded-lg px-4 py-2.5 mb-6">
            <p className="text-amber-400 font-medium text-sm">
              🎁 Tặng ngay ChatGPT Plus
            </p>
            <p className="text-white/90 font-medium text-sm">
              Dành cho 20 đơn đầu tiên!
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/linkedin-premium"
            onClick={handleClose}
            className="block w-full py-3.5 px-6 bg-linear-to-r from-amber-500 via-yellow-500 to-amber-500 hover:from-amber-400 hover:via-yellow-400 hover:to-amber-400 text-slate-900 font-bold text-base rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/25"
          >
            XEM CHI TIẾT NGAY &gt;
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
