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
import LoadingScreen from "./parts/loding";
import { cookies } from "next/headers";
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
  title: "Exclusive Movies",
  description: "Exclusive Movies LTD",
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
            <main className={!hideLayout ? "mt-[100px]" : ""}>{children || <LoadingScreen/>}</main>
            {!hideLayout && <Footer />}
          </AosProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
