"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    AOS.init({
      duration: 1000,
      once: true,
      // disable: "mobile",
    });

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return <>{children}</>;
}