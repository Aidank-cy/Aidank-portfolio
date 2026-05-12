import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Aidank-portfolio",
  assetPrefix: "/Aidank-portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
