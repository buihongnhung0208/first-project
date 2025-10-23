import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  outputFileTracingRoot: '/Users/nhungbui/Desktop/first-project',
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
