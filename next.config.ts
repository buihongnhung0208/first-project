import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Disable Turbopack to use webpack instead
  experimental: {
    turbo: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
