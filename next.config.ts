import type { NextConfig } from "next";
const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/privacy-policy",
  assetPrefix: isGithubPages ? "/privacy-policy/" : "",
  images: { unoptimized: true },
};

export default nextConfig;
