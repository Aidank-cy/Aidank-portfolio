import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true" && repoName;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPagesBuild ? `/${repoName}` : undefined,
  assetPrefix: isGitHubPagesBuild ? `/${repoName}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPagesBuild ? `/${repoName}` : "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
