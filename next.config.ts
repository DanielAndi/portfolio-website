import type { NextConfig } from "next";
import { withContentlayer } from 'next-contentlayer2';
import { skillProfiles } from './lib/skills';

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  async redirects() {
    return skillProfiles.map((p) => ({
      source: `/${p.id}`,
      destination: `/projects?skill=${p.id}`,
      permanent: true,
    }));
  },
};

export default withContentlayer(nextConfig);
