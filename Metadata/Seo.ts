import type { Metadata } from "next";
import enSeo from "../messages/en/Seo.json";
import arSeo from "../messages/ar/Seo.json";

type SeoOptions = {
  locale: string;
  namespace: string;
  path: string;
  image?: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://exclusivemovies.com";

// Direct JSON imports — bypass next-intl message loader, which fails to
// resolve the "Seo" namespace at runtime in production.
function readSeo({ locale, namespace }: { locale: string; namespace: string }): {
  title: string;
  description: string;
} {
  const data = locale === "ar" ? arSeo : enSeo;
  const pageKey = namespace.startsWith("Seo.") ? namespace.slice(4) : namespace;
  const page = (data as Record<string, unknown>)[pageKey] as
    | { title?: string; description?: string }
    | undefined;
  return {
    title: page?.title ?? "",
    description: page?.description ?? "",
  };
}

export async function generateSeo({
  locale,
  namespace,
  path,
  image = "/og-image.jpg",
}: SeoOptions): Promise<Metadata> {
  const { title, description } = readSeo({ locale, namespace });

  const url = `${BASE_URL}/${locale}${path}`;

  return {
    metadataBase: new URL(BASE_URL),

    title,
    description,

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
      title,
      description,
      url,
      siteName: "Exclusive Movies",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}