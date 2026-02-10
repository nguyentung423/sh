"use client";

import dynamic from "next/dynamic";

// Lazy load modal - not needed for initial render (saves ~5-10KB)
const WelcomeModal = dynamic(() => import("@/components/WelcomeModal"), {
  ssr: false,
});

export default function ClientModals() {
  return <WelcomeModal />;
}
