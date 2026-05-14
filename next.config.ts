import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Unsplash
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },

      // Picsum
      {
        protocol: "https",
        hostname: "picsum.photos",
      },

      // Amazon Images
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },

      // Nike CDN
      {
        protocol: "https",
        hostname: "static.nike.com",
      },

      // Clarks CDN
      {
        protocol: "https",
        hostname: "cdn.media.amplience.net",
      },
    ],
  },
};

export default nextConfig;