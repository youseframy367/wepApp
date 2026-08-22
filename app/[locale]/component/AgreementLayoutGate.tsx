"use client";
import { usePathname } from "next/navigation";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";

export default function AgreementLayoutGate({
  children,
  initialAgreementAccepted,
}: {
  children: React.ReactNode;
  initialAgreementAccepted?: boolean;
}) {
  const pathname = usePathname();
  const modalContentRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  
  // Detect if we are on an agreement page
  const isExplicitAgreementRoute = pathname.includes("/agreement/");
  
  // For the home page, we use the server-side state if available, otherwise check client-side after mounting
  const isHomeRoute = pathname.split('/').filter(Boolean).length <= 1; // matches /en, /ar, or /
  
  // Final decision on showing modal
  const showModal = isExplicitAgreementRoute || (isHomeRoute && !initialAgreementAccepted);

  useEffect(() => {
    setMounted(true);
    if (showModal) {
      // Use requestAnimationFrame for smoother refresh
      const handle = requestAnimationFrame(() => {
        AOS.refresh();
      });
      return () => cancelAnimationFrame(handle);
    }
  }, [showModal, pathname]);

  return (
    <>
      {/* Background Layout with Blur Effect when Modal is active */}
      <div className={showModal ? "blur-[8px] pointer-events-none select-none h-screen overflow-hidden" : ""}>
        <Header />
        <main className={showModal ? "" : "md:mt-[100px] mt-[115px]"}>
          {!showModal && children}
          {showModal && (
            <div className="min-h-screen flex items-center justify-center bg-black" />
          )}
        </main>
        <Footer />
      </div>

      {/* Agreement Modal Layer - Floating Box on all screens */}
      {mounted && showModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-[4px] overflow-hidden">
          <div className="relative w-full max-w-[95%] md:max-w-7xl h-auto max-h-[90vh] bg-[#0c0c0c] rounded-[20px] border border-white/10 shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300 overflow-hidden">
            {/* Modal Content Scrollable Area */}
            <div 
              ref={modalContentRef}
              className="flex-1 overflow-y-auto no-scrollbar pt-4 pb-10 px-0"
            >
              <div className="w-full">
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
