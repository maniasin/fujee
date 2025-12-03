import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fujee.com',
        port: '',
        pathname: '/uploaded/product/**',
      },
    ],
  },
};

export default nextConfig;
