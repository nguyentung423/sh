"use client";

import Link from "next/link";
import Image from "next/image";
import { SiZalo } from "react-icons/si";

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
              <Image
                src="/logo.png"
                alt="PremiumShop Logo"
                width={48}
                height={48}
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
                priority
              />
              <span className="font-bold text-lg tracking-tight text-white">
                PremiumShop
              </span>
            </Link>

            {/* Right - Chat Action Button */}
            <div className="flex items-center">
              <a
                href="https://zalo.me/0374918396"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold px-4 py-2 md:px-5 md:py-2.5 rounded-lg md:rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/25"
              >
                <SiZalo className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">Mua Ngay</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
