import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 👈 this enables static export mode
  images: {
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
