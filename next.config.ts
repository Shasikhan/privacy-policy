import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/privacy-policy",
  images: { unoptimized: true },
};

export default nextConfig;
