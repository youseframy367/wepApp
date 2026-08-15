export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://exclusivemovies.com";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Exclusive Movies Ltd",
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description:
      "Exclusive Movies develops secure and privacy-focused digital media solutions through Ex Pro Media Player.",
    email: "support@exclusivemovies.com",
    sameAs: []
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}