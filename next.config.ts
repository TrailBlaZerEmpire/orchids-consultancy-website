import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Workers compatible configuration
  images: {
    unoptimized: true,
  },
};

export default nextConfig;