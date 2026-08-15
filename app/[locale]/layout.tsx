import type { Metadata } from "next";
import "../globals.css";
import "../assets/fonts.css";
import { NextIntlClientProvider } from "next-intl";
import AosProvider from "./componnt/AosProvider";
import Navbar from "./parts/Header";
import Footer from "./parts/Fooer";
import { ActiveSectionProvider } from "./context/ActiveSectionContext";
import { cookies } from "next/headers";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://exclusivemovies.com"),
  title: {
    default: "Exclusive Movies",
    template: "%s | Exclusive Movies",
  },
  description:
    "Exclusive Movies provides secure, privacy-focused digital media solutions through Ex Pro Media Player.",
  alternates: {
    canonical: "https://exclusivemovies.com",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const cookieStore = await cookies();
  const step = cookieStore.get("agreementStep")?.value;

  const hideLayout = !step || step === "reseller";
  const isAr = locale === "ar";

  return (
    <html lang={locale} dir={isAr ? "rtl" : "ltr"}>
      <body className={`text-[#fff] ${isAr ? "font-cairo" : "font-montserrat"}`}>
        <NextIntlClientProvider>
          <AosProvider>
            {!hideLayout && <Navbar />}
            <main className={!hideLayout ? "md:mt-[100px] mt-[115px]" : ""}>
              <StructuredData />
              <ActiveSectionProvider>
                {children}
              </ActiveSectionProvider>
            </main>
            {!hideLayout && <Footer />}
          </AosProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}