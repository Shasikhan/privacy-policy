import type { NextConfig } from "next";
const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.PAGES_BASE_PATH,
  assetPrefix: isGithubPages ? "/privacy-policy/" : "",
  images: { unoptimized: true },
};

export default nextConfig;
