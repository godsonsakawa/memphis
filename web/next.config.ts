import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // this enables static export mode
  images: {
    unoptimized: true, // This fixes the image optimization error with static export
    domains: ['img.freepik.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
