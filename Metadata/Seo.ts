import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

type SeoOptions = {
  locale: string;
  namespace: string;
  path: string;
  image?: string;
};

const BASE_URL = "https://exclusivemovies.com";

export async function generateSeo({
  locale,
  namespace,
  path,
  image = "/og-image.jpg",
}: SeoOptions): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace,
  });

  const url = `${BASE_URL}/${locale}${path}`;

  return {
    metadataBase: new URL(BASE_URL),

    title: t("title"),
    description: t("description"),

    alternates: {
      canonical: url,
      languages: {
        ar: `${BASE_URL}/ar${path}`,
        en: `${BASE_URL}/en${path}`,
      },
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      title: t("title"),
      description: t("description"),
      url,
      siteName: "Exclusive Movies",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [image],
    },
  };
}