import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF preferito (~20% più leggero), WebP come fallback.
    formats: ["image/avif", "image/webp"],
    // Le foto dello shooting sono immutabili: cache lunga (30 giorni).
    minimumCacheTTL: 2592000,
  },
  // /favicon.ico non esiste come file: serve l'icona SVG, così i browser
  // legacy e i crawler non prendono un 404.
  async rewrites() {
    return [{ source: "/favicon.ico", destination: "/icon.svg" }];
  },
  // Header di sicurezza di base (hardening pre-lancio).
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
