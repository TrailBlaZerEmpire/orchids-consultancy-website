import type { NextConfig } from "next";

const loaderPath = require.resolve("orchids-visual-edits/loader.js");

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
    unoptimized: true,
  },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  turbopack: {
    rules: {
      "*.{jsx,tsx}": { loaders: [loaderPath] },
    },
  },
};

export default nextConfig;
