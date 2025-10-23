import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Disable Turbopack to use webpack instead
  experimental: {
    turbo: false,
  },
};

export default nextConfig;
