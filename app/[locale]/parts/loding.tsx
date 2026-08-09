"use client";

import { useEffect, useState } from "react";
import { navBg } from "../../assets/images";
import mainBgUrl from "../../assets/images/constants/mainBg.webp";

export default function LoadingScreen() {
  const [hiding, setHiding] = useState(false);
  const [hidden, setHidden] = useState(false);
  

  useEffect(() => {
    let done = false;

    const finish = () => {
      if (done) return;
      done = true;
      setHiding(true);
      setTimeout(() => setHidden(true), 500);
    };

    // Wait for mainBg image to load
    const img = new Image();
    img.src = mainBgUrl;

    // Wait for ALL window resources + give React 800ms to render icons
    const onWindowLoad = () => setTimeout(finish, 800);

    if (document.readyState === "complete") {
      // Already loaded — just wait for React icons render time
      img.onload = () => setTimeout(finish, 800);
      img.onerror = () => setTimeout(finish, 800);
    } else {
      window.addEventListener("load", onWindowLoad, { once: true });
      img.onload = () => {}; // mainBg covered by window load
      img.onerror = () => {};
    }

    // Hard fallback: never block longer than 5s
    const fallback = setTimeout(finish, 5000);

    return () => {
      window.removeEventListener("load", onWindowLoad);
      clearTimeout(fallback);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-9999999 flex items-center justify-center bg-cover transition-opacity duration-500 ${
        hiding ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ backgroundImage: `url(${navBg})` }}
    >
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full bg-primary animate-spin" />
        <div className="absolute inset-1.5 rounded-full bg-[#0c0c0c]" />
      </div>
    </div>
  );
}
