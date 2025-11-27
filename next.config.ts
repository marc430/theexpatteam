import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",

  // REQUIRED for GitHub Pages
  basePath: "/theexpatteam",
  assetPrefix: "/theexpatteam",
};

export default nextConfig;
