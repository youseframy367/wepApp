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

  if (isAgreementPage) {
    return (
      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* Blurred Background Layer */}
        <div 
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat blur-[15px] scale-110 opacity-40 pointer-events-none"
          style={{ backgroundImage: "url('/imge/effect.webp')" }}
        />
        
        {/* Modal Overlay */}
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-7xl bg-[#0c0c0c] rounded-[20px] border border-white/10 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Modal Content */}
            <div className="max-h-[85vh] overflow-y-auto custom-scrollbar">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="md:mt-[100px] mt-[115px]">
        {children}
      </main>
      <Footer />
    </>
  );
}
