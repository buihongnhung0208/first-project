import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Use the current project dir for output tracing root. The previous
  // hard-coded path pointed to a different machine (macOS) which caused
  // Turbopack to treat the `.next` dist dir as outside the project.
  outputFileTracingRoot: path.resolve(__dirname),
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
