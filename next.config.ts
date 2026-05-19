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

      // Hearst Images
      {
        protocol: "https",
        hostname: "hips.hearstapps.com",
      },
      {
        protocol: "https",
        hostname: "mencrypted-tbn0.gstatic.com",
      }
    ],
  },
};

export default nextConfig;