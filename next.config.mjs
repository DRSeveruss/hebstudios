import path from 'path';
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: process.env.NODE_ENV === "production" ? ".next-prod" : ".next",
  typescript: {
    ignoreBuildErrors: true
  },
  // Configure for GitHub Pages
  basePath: process.env.NODE_ENV === "production" ? "/hebstudios" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/hebstudios/" : "",
  images: {
    unoptimized: true,
  },
};
export default nextConfig;