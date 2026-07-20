export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Exclusive Movies Ltd",
    url: "https://exclusivemovies.com",
    logo: "https://exclusivemovies.com/logo.svg",
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