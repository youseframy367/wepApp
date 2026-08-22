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
    deviceSizes: [16, 32, 48, 64, 96, 128, 256, 384, 560, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

export default withNextIntl(nextConfig);