"use client";
import { usePathname } from "next/navigation";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import { useEffect, useRef } from "react";
import AOS from "aos";

export default function AgreementLayoutGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const modalContentRef = useRef<HTMLDivElement>(null);
  
  // Detect if we are on an agreement page
  // We check for /agreement/ path or if it's the root path without a cookie (handled by the page itself)
  // However, since this is a client component, we check the pathname.
  // The home page renders AgreementCustomer if no cookie is present.
  const isAgreementPage = pathname.includes("/agreement/") || (pathname.split('/').length <= 2 && typeof document !== 'undefined' && !document.cookie.includes("agreementStep="));

  useEffect(() => {
    if (isAgreementPage) {
      // Force AOS refresh when modal opens to ensure content is visible
      // Many components use data-aos which might hide them initially if AOS doesn't detect them
      const timer = setTimeout(() => {
        AOS.refresh();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isAgreementPage, pathname]);

  return (
    <>
      {/* Background Layout with Blur Effect when Modal is active */}
      <div className={isAgreementPage ? "blur-[8px] pointer-events-none select-none h-screen overflow-hidden" : ""}>
        <Header />
        <main className={isAgreementPage ? "" : "md:mt-[100px] mt-[115px]"}>
          {/* We only render the page content here if it's NOT an agreement page */}
          {!isAgreementPage && children}
          
          {/* Placeholder for agreement pages to maintain layout feel behind the modal */}
          {isAgreementPage && (
            <div className="min-h-screen flex items-center justify-center bg-black" />
          )}
        </main>
        <Footer />
      </div>

      {/* Agreement Modal Layer */}
      {isAgreementPage && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-0 md:p-8 bg-black/60 backdrop-blur-[4px] overflow-hidden">
          <div className="relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-7xl bg-[#0c0c0c] md:rounded-[20px] border-t md:border border-white/10 shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300">
            {/* Modal Content Scrollable Area */}
            <div 
              ref={modalContentRef}
              className="flex-1 overflow-y-auto custom-scrollbar pt-4 pb-10 px-0"
            >
              {/* Force children to be visible by wrapping in a div that resets AOS if needed */}
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
