import type { Metadata } from "next";
import "../globals.css";
import AosProvider from "./component/AosProvider";
import { NextIntlClientProvider } from "next-intl";
import { generateSeo } from "@/Metadata/Seo";
import { ActiveSectionProvider } from "./context/ActiveSectionContext";
import AgreementLayoutGate from "./component/AgreementLayoutGate";
import ClientErrorBoundary from "./component/ClientErrorBoundary";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; segment?: string[] }>;
}): Promise<Metadata> {
  const { locale, segment } = await params;
  const fullPath = segment && segment.length ? "/" + segment.join("/") : "/";
  return generateSeo({
    locale,
    namespace: "Seo.Home",
    path: fullPath,
    image: "/imge/home/EXBRO.webp",
  });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return (
    <html lang={locale} dir={isAr ? "rtl" : "ltr"}>
      <body className={`text-[#fff] ${isAr ? "font-cairo" : "font-montserrat"}`}>
        <NextIntlClientProvider>
          <AosProvider>
            <ClientErrorBoundary>
              <AgreementLayoutGate>
                <ActiveSectionProvider>{children}</ActiveSectionProvider>
              </AgreementLayoutGate>
            </ClientErrorBoundary>
          </AosProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
