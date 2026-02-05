"use client";

import { useState, useEffect } from "react";
import { SiZalo } from "react-icons/si";

export default function ZaloFloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://zalo.me/0374918396"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-110 active:scale-95 transition-all duration-200 ${
        isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
      title="Chat Zalo"
    >
      <SiZalo className="w-7 h-7 text-white" />
    </a>
  );
}
