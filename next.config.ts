import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This is a fully static, content-driven marketing site with no
  // per-request data fetching, so the experimental cache-components /
  // partial-prefetch model (useful for dynamic, data-heavy apps) is
  // intentionally left off to keep the rendering model simple and
  // predictable for static generation. See README.md for rationale.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
