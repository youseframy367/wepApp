import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  experimental: {
    staleTimes: {
      dynamic: 60,
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
  },
};

export default withNextIntl(nextConfig);