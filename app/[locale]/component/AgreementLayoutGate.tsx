"use client";
import { usePathname } from "next/navigation";
import Header from "../parts/Header";
import Footer from "../parts/Footer";

export default function AgreementLayoutGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // Detect if we are on an agreement page
  const isAgreementPage = pathname.includes("/agreement/");

  return (
    <>
      {/* Background Layout with Blur Effect when Modal is active */}
      <div className={isAgreementPage ? "blur-[8px] pointer-events-none select-none" : ""}>
        <Header />
        <main className="md:mt-[100px] mt-[115px]">
          {/* We only render the page content here if it's NOT an agreement page */}
          {!isAgreementPage && children}
          
          {/* Placeholder for agreement pages to maintain layout feel behind the modal */}
          {isAgreementPage && (
            <div className="min-h-screen flex items-center justify-center">
               {/* Optional: Add a subtle loading or placeholder if needed */}
            </div>
          )}
        </main>
        <Footer />
      </div>

      {/* Agreement Modal Layer */}
      {isAgreementPage && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8 overflow-y-auto bg-black/60 backdrop-blur-[4px]">
          <div className="relative w-full max-w-7xl bg-[#0c0c0c] rounded-[20px] border border-white/10 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Modal Content Scrollable Area */}
            <div className="max-h-[90vh] overflow-y-auto custom-scrollbar">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
