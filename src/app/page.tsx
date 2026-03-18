import HomePage from "@/components/HomePage";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomePage />
    </Suspense>
  );
}
