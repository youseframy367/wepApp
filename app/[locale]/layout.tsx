import type { Metadata } from "next";
const BASE_URL_LAYOUT = process.env.NEXT_PUBLIC_SITE_URL ?? "https://exclusivemovies.com";
import "../globals.css";
import "../assets/fonts.css";
import { NextIntlClientProvider } from "next-intl";
import AosProvider from "./component/AosProvider";
import Navbar from "./parts/Header";
import Footer from "./parts/Footer";
import { ActiveSectionProvider } from "./context/ActiveSectionContext";
import { cookies } from "next/headers";
import StructuredData from "@/components/StructuredData";

;


const ROUTE_SEO: Record<string, { en: [string, string]; ar: [string, string] }> = {"/Dashboard": {"en": ["Dashboard — Ex Pro Player", "Enter your dashboard to manage your Ex Pro device activation, playlists, and streaming preferences securely."], "ar": ["لوحة التحكم — مشغل Ex Pro", "ادخل إلى لوحة التحكم لإدارة تفعيل جهازك وقوائم التشغيل وتفضيلات البث الخاصة بك على مشغل Ex Pro بأمان."]}, "/DownloadAndWatching": {"en": ["Download & Watching — Ex Pro Player", "Learn how to download and start streaming with Ex Pro Media Player on Smart TVs and supported devices."], "ar": ["التحميل والمشاهدة — مشغل Ex Pro", "تعلّم كيفية تحميل وبدء المشاهدة مع مشغل Ex Pro على التلفزيونات الذكية والأجهزة المدعومة."]}, "/FAQ": {"en": ["Frequently Asked Questions — Exclusive Movies", "Find answers about Ex Pro Media Player, device activation, subscriptions, international access, and privacy."], "ar": ["الأسئلة الشائعة — إكسكلوسيف موفيز", "اعثر على إجابات حول مشغل Ex Pro، تفعيل الأجهزة، الاشتراكات، الوصول الدولي، والخصوصية."]}, "/home": {"en": ["Exclusive Movies — Secure, Privacy-Focused Streaming with Ex Pro", "Exclusive Movies provides secure, privacy-focused digital media solutions through the Ex Pro Media Player. Stream, download, and manage playlists safely on any device."], "ar": ["إكسكلوسيف موفيز — بث آمن ومحترم للخصوصية عبر مشغل Ex Pro", "إكسكلوسيف موفيز تقدم حلول الوسائط الرقمية الآمنة والمحترمة للخصوصية من خلال مشغل Ex Pro. شاهد، حمّل، وأدر قوائم التشغيل بأمان على أي جهاز."]}, "/logInManageBlayList": {"en": ["Login & Manage Playlists — Ex Pro", "Log in to manage your M3U and XC playlists, activate devices, and control playback on Ex Pro Media Player."], "ar": ["تسجيل الدخول وإدارة القوائم — Ex Pro", "سجل الدخول لإدارة قوائم M3U وXC، وتفعيل الأجهزة، والتحكم في التشغيل على مشغل Ex Pro."]}, "/logInManageBlayList/manageBlayList": {"en": ["Manage Playlists — Ex Pro Player", "Organize, renew, and manage all your streaming playlists in one secure dashboard with Ex Pro."], "ar": ["إدارة قوائم التشغيل — مشغل Ex Pro", "نظّم وجدّد وأدر جميع قوائم البث الخاصة بك من لوحة تحكم واحدة آمنة في Ex Pro."]}, "/logInManageBlayList/manageBlayList/addPlayList": {"en": ["Add Playlist — Ex Pro Player", "Add your favorite M3U or M3U8 playlist to Ex Pro and start streaming instantly on any device."], "ar": ["إضافة قائمة تشغيل — مشغل Ex Pro", "أضف قائمة التشغيل M3U أو M3U8 المفضلة لديك إلى Ex Pro وابدأ المشاهدة فورًا على أي جهاز."]}, "/logInManageBlayList/manageBlayList/AddXCPlayList": {"en": ["Add XC Playlist — Ex Pro Player", "Connect your Xtream Codes (XC) playlist to Ex Pro with username, password, and host for full EPG support."], "ar": ["إضافة قائمة XC — مشغل Ex Pro", "اربط قائمة Xtream Codes (XC) الخاصة بك بمشغل Ex Pro باستخدام اسم المستخدم وكلمة المرور والمضيف."]}, "/agreement/customer": {"en": ["Customer Agreement — Exclusive Movies", "The customer agreement covering acceptance of terms, service nature, refund policy, and your responsibilities."], "ar": ["اتفاقية تقديم خدمات العميل — إكسكلوسيف موفيز", "اتفاقية العميل التي تغطي قبول الشروط وطبيعة الخدمة وسياسة الاسترداد ومسؤولياتك."]}, "/legal-policy": {"en": ["Legal & Policy — Exclusive Movies", "Read the privacy policy, terms and conditions, refund policy, and compliance documents of Exclusive Movies."], "ar": ["القانون والسياسات — إكسكلوسيف موفيز", "اطّلع على سياسة الخصوصية وشروط الاستخدام وسياسة الاسترداد ووثائق الامتثال الخاصة بإكسكلوسيف موفيز."]}, "/legal-policy/privacyPolicy": {"en": ["Privacy Policy — Exclusive Movies", "How Exclusive Movies collects, protects, and handles your personal data when using Ex Pro Media Player."], "ar": ["سياسة الخصوصية — إكسكلوسيف موفيز", "كيف تجمع إكسكلوسيف موفيز بياناتك الشخصية وتحافظ عليها عند استخدام مشغل Ex Pro."]}, "/legal-policy/TermsAndConditions": {"en": ["Terms and Conditions — Exclusive Movies", "The terms governing your use of the Exclusive Movies platform and Ex Pro Media Player services."], "ar": ["الشروط والأحكام — إكسكلوسيف موفيز", "الشروط التي تحكم استخدامك لمنصة إكسكلوسيف موفيز وخدمات مشغل Ex Pro."]}, "/legal-policy/RefundPolicy": {"en": ["Refund Policy — Exclusive Movies", "Refund conditions for purchases made through Ex Pro and affiliated digital platforms operated by Exclusive Movies."], "ar": ["سياسة الاسترداد — إكسكلوسيف موفيز", "شروط الاسترداد للمشتريات من خلال Ex Pro والمنصات الرقمية التابعة لشركة إكسكلوسيف موفيز."]}, "/legal-policy/EULA": {"en": ["End User License Agreement — Ex Pro", "The legally binding license agreement for downloading, installing, and using the Ex Pro Media Player application."], "ar": ["اتفاقية ترخيص المستخدم النهائي — Ex Pro", "اتفاقية الترخيص القانونية الملزمة لتحميل وتثبيت واستخدام تطبيق مشغل Ex Pro."]}, "/legal-policy/NotSellOrShare": {"en": ["Do Not Sell or Share My Personal Information — Exclusive Movies", "Your rights under the California Consumer Privacy Act to opt out of the sale or sharing of personal information."], "ar": ["عدم بيع أو مشاركة بياناتي الشخصية — إكسكلوسيف موفيز", "حقوقك بموجب قانون خصوصية المستهلك في كاليفورنيا لرفض بيع أو مشاركة بياناتك الشخصية."]}, "/legal-policy/DisclaimerOfContent": {"en": ["Disclaimer of Content — Ex Pro", "Ex Pro is a media player only. Content responsibility lies with third-party sources; verify legality before streaming."], "ar": ["إخلاء مسؤولية المحتوى — Ex Pro", "Ex Pro مجرد مشغل وسائط. مسؤولية المحتوى تقع على المصادر الخارجية؛ تحقق من الشرعية قبل المشاهدة."]}, "/legal-policy/OurMission": {"en": ["Our Mission — Exclusive Movies", "Exclusive Movies' mission to develop safe, transparent digital media solutions in compliance with international standards."], "ar": ["مهمتنا — إكسكلوسيف موفيز", "مهمة إكسكلوسيف موفيز في تطوير حلول وسائط رقمية آمنة وشفافة بما يتوافق مع المعايير الدولية."]}, "/legal-policy/CompanyInfo": {"en": ["Company Information — Exclusive Movies", "Learn about Exclusive Movies Ltd, our origin, evaluation, and commitment to global compliance and data protection."], "ar": ["معلومات الشركة — إكسكلوسيف موفيز", "تعرّف على شركة إكسكلوسيف موفيز المحدودة، ونشأتها، والتزامها بالامتثال العالمي وحماية البيانات."]}, "/legal-policy/GlobalCompliance": {"en": ["Global Compliance — Exclusive Movies", "How Exclusive Movies maintains compliance with international legal and regulatory standards."], "ar": ["الامتثال العالمي — إكسكلوسيف موفيز", "كيف تحافظ إكسكلوسيف موفيز على الامتثال للمعايير القانونية والتنظيمية الدولية."]}};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; segment?: string[] }>;
}): Promise<Metadata> {
  const { locale, segment } = await params;
  const fullPath = segment && segment.length ? "/" + segment.join("/") : "/";
  const lang = locale === "ar" ? "ar" : "en";
  let title = "Exclusive Movies";
  let description = "Secure, privacy-focused digital media solutions through Ex Pro Media Player.";
  for (const route of Object.keys(ROUTE_SEO)) {
    if (fullPath === route || fullPath.startsWith(route + "/")) {
      title = ROUTE_SEO[route][lang][0];
      description = ROUTE_SEO[route][lang][1];
      break;
    }
  }
  const url = `${BASE_URL_LAYOUT}/${locale}${fullPath}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ar: `${BASE_URL_LAYOUT}/ar${fullPath}`,
        en: `${BASE_URL_LAYOUT}/en${fullPath}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Exclusive Movies",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
      images: [{ url: "/imge/home/EXBRO.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/imge/home/EXBRO.png"],
    },
  };
}

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

  const hideLayout = !step || step === "customer";
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