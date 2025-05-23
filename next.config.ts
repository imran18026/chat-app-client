import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
  images: {
    domains: ["res.cloudinary.com", "img.clerk.com"],
    remotePatterns: [
      {
        hostname: "img.clerk.com",
      },
    ],
  },
};

export default nextConfig;
