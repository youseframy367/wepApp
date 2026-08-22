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
      const timer = setTimeout(() => {
        AOS.refresh();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [showModal, pathname]);

  // To avoid hydration mismatch, we render the base layout consistently on server and client
  // and only apply the modal/blur effects after mounting if needed, 
  // or use the initialAgreementAccepted passed from server.

  return (
    <>
      {/* Background Layout with Blur Effect when Modal is active */}
      <div className={showModal ? "blur-[8px] pointer-events-none select-none h-screen overflow-hidden" : ""}>
        <Header />
        <main className={showModal ? "" : "md:mt-[100px] mt-[115px]"}>
          {/* We only render the page content here if it's NOT an agreement page */}
          {!showModal && children}
          
          {/* Placeholder for agreement pages to maintain layout feel behind the modal */}
          {showModal && (
            <div className="min-h-screen flex items-center justify-center bg-black" />
          )}
        </main>
        <Footer />
      </div>

      {/* Agreement Modal Layer */}
      {mounted && showModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-0 md:p-8 bg-black/60 backdrop-blur-[4px] overflow-hidden">
          <div className="relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-7xl bg-[#0c0c0c] md:rounded-[20px] border-t md:border border-white/10 shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300">
            {/* Modal Content Scrollable Area */}
            <div 
              ref={modalContentRef}
              className="flex-1 overflow-y-auto custom-scrollbar pt-4 pb-10 px-0"
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
