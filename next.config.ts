import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    // Pin Turbopack's workspace root to this project to avoid scanning parent dirs
    root: '/Users/nhungbui/Desktop/first-project',
  },
};

export default nextConfig;
