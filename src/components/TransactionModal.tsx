"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { sendGAEvent } from "@next/third-parties/google";

const DUMMY_BILLS = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: `/b${i + 1}.jpg`,
  alt: `Giao dịch #${1000 + i + 1}`,
}));

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-gray-400 hover:text-white text-3xl font-bold leading-none cursor-pointer transition-colors"
        aria-label="Đóng"
      >
        ✕
      </button>
      <img
        src={src}
        alt="Chi tiết giao dịch"
        onClick={(e) => e.stopPropagation()}
        className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-2xl border-2 border-gray-700 shadow-2xl"
      />
    </div>,
    document.body,
  );
}

export default function TransactionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSrc, setSelectedSrc] = useState<string | null>(null);

  const openModal = () => {
    sendGAEvent("event", "xem_lich_su_giao_dich", {
      event_category: "tuong_tac",
      event_label: "mo_modal_giao_dich",
    });
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setSelectedSrc(null);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={openModal}
        className="block mx-auto text-sm text-gray-400 hover:text-green-400 underline decoration-gray-700 hover:decoration-green-400 underline-offset-4 transition-colors cursor-pointer"
      >
        ⭐ Xem lịch sử giao dịch của 50+ khách hàng gần đây
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          {/* Container */}
          <div
            className="relative w-full max-w-6xl max-h-[85vh] flex flex-col bg-[#0f172a] border border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex-shrink-0 flex justify-between items-center p-5 border-b border-gray-800">
              <h2 className="text-base md:text-lg font-bold text-white">
                <span className="text-green-400">✓</span> Khách hàng nâng cấp
                thành công
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white text-2xl leading-none transition-colors cursor-pointer"
                aria-label="Đóng"
              >
                ✕
              </button>
            </div>

            {/* Body — Scrollable Grid */}
            <div className="flex-1 min-h-0 overflow-y-auto p-5 custom-scrollbar">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                {DUMMY_BILLS.map((bill, index) => (
                  <div
                    key={bill.id}
                    className="relative rounded-xl overflow-hidden border border-gray-700 hover:border-green-500 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg"
                    onClick={() => setSelectedSrc(bill.src)}
                  >
                    <img
                      src={bill.src}
                      alt={bill.alt}
                      loading="lazy"
                      className="w-full h-full object-cover aspect-[9/16]"
                    />
                    {index === DUMMY_BILLS.length - 1 && (
                      <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center p-2 rounded-xl">
                        <span className="text-xl md:text-2xl font-bold text-white text-center leading-none">
                          +99
                        </span>
                        <span className="text-[10px] md:text-xs text-gray-300 text-center mt-1.5 leading-tight px-1">
                          Giao dịch khác
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex-shrink-0 p-4 border-t border-gray-800 flex justify-center items-center">
              <a
                href="https://zalo.me/g/ccjwtr348"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 px-4 py-2 rounded-lg"
              >
                Tham gia nhóm Zalo Premium Shop VN 👉
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox — portaled to document.body, above everything */}
      {selectedSrc && (
        <Lightbox src={selectedSrc} onClose={() => setSelectedSrc(null)} />
      )}
    </>
  );
}
