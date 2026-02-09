"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Ultra-Premium Floating Glass Strip */}
      <div className="w-full backdrop-blur-md bg-slate-900/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Left - Premium Logo */}
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

            {/* Right - LinkedIn Premium Link */}
            <div className="flex items-center">
              <Link
                href="/linkedin-premium"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0077B5] to-[#00A0DC] hover:from-[#005E93] hover:to-[#0077B5] text-white font-semibold px-4 py-2 md:px-5 md:py-2.5 rounded-lg md:rounded-xl transition-all duration-300 shadow-lg shadow-[#0077B5]/25"
              >
                <span className="text-sm md:text-base">LinkedIn Premium</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
