import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  experimental: {
    staleTimes: {
      dynamic: 60,
      static: 180,
    },
    optimizePackageImports: ["lucide-react", "aos", "framer-motion"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default withNextIntl(nextConfig);