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
  // Hide header and footer only on agreement pages
  const isAgreementPage = /\/agreement(\/|$)/.test(pathname);

  return (
    <>
      {!isAgreementPage && <Header />}
      <main className={!isAgreementPage ? "md:mt-[100px] mt-[115px]" : ""}>
        {children}
      </main>
      {!isAgreementPage && <Footer />}
    </>
  );
}
