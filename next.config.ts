import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Pin the workspace root to this project: a stray package-lock.json
  // exists in the parent user folder and confuses root detection.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
