/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/theexpatteam",
  assetPrefix: "/theexpatteam",
  distDir: "out",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
