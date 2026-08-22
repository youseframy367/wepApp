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
    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Initialize AOS with highly optimized settings
    AOS.init({
      duration: 800,           // Snappy animation duration
      once: true,               // Only animate once to reduce re-renders
      offset: 50,               // Trigger earlier for smoother flow
      easing: 'ease-out-quad',  // Lightweight easing
      disable: false,           // Enable on all devices but keep it light
      startEvent: 'DOMContentLoaded', // Wait for initial content
    });

    // Debounced refresh function to avoid performance hits during rapid DOM changes
    let refreshTimeout: NodeJS.Timeout;
    const debouncedRefresh = () => {
      clearTimeout(refreshTimeout);
      refreshTimeout = setTimeout(() => {
        AOS.refresh();
      }, 150);
    };

    // Use MutationObserver to handle dynamic content (like next-intl messages loading)
    const observer = new MutationObserver((mutations) => {
      const hasAddedNodes = mutations.some(m => m.addedNodes.length > 0 || m.removedNodes.length > 0);
      if (hasAddedNodes) {
        debouncedRefresh();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Initial refresh after a short delay to catch late-loading elements
    const initialRefresh = setTimeout(AOS.refresh, 500);

    return () => {
      observer.disconnect();
      clearTimeout(refreshTimeout);
      clearTimeout(initialRefresh);
      AOS.refreshHard();
    };
  }, []);

  return <>{children}</>;
}
