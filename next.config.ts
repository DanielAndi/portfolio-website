import type { NextConfig } from "next";
import { withContentlayer } from 'next-contentlayer2';
import path from 'path';

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };
    return config;
  },
};

export default withContentlayer(nextConfig);
