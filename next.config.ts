import type { NextConfig } from "next";
import path from "path";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "SutravaSoftwareSolution";

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
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
};

export default nextConfig;
