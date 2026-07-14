import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF preferito (~20% più leggero), WebP come fallback.
    formats: ["image/avif", "image/webp"],
    // Le foto dello shooting sono immutabili: cache lunga (30 giorni).
    minimumCacheTTL: 2592000,
  },
};

export default nextConfig;
