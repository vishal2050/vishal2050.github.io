import type { NextConfig } from "next";
import path from "path";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "SutravaSoftwareSolution";

const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  // Static HTML export for GitHub Pages
  output: isGithubPages ? "export" : undefined,
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: isGithubPages,
  },
  // Project Pages URL: https://vishal2050.github.io/SutravaSoftwareSolution/
  basePath,
  assetPrefix: isGithubPages ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
