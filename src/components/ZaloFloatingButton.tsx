"use client";

import { useState, useEffect } from "react";
import { SiZalo } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { ZALO_CONFIG, getZaloLink } from "@/data/products";

export default function ZaloFloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after scrolling past hero section (~500px)
      setIsVisible(window.scrollY > 500);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://zalo.me/0374918396"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title="Chat Zalo"
        >
          <SiZalo className="w-7 h-7 text-white" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
