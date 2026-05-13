import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true" && repoName;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPagesBuild ? `/${repoName}` : undefined,
  assetPrefix: isGitHubPagesBuild ? `/${repoName}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
