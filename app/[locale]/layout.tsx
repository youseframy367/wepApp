import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
//import {getRequestConfig} from 'next-intl/server';
import { Montserrat } from "next/font/google";
import { Cairo } from "next/font/google";
import AosProvider from "./componnt/AosProvider";
import Navbar from "./parts/Header";
import Footer from "./parts/Fooer";
import { ActiveSectionProvider } from "./context/ActiveSectionContext"
import LoadingScreen from "./parts/loding";
import { cookies } from "next/headers";
import StructuredData from "@/components/StructuredData";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={` text-[#fff] ${locale === "ar" ? "font-cairo" : ""}   ${inter.variable} ${montserrat.variable} ${cairo.variable}`}
      >
        <NextIntlClientProvider>
          <AosProvider>
            {!hideLayout && <Navbar />}
            <main className={!hideLayout ? "mt-[100px]" : ""}>
              <StructuredData />{" "}
              <ActiveSectionProvider>
                {children || <LoadingScreen />}
              </ActiveSectionProvider>
            </main>
            {!hideLayout && <Footer />}
          </AosProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
