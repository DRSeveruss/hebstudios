import path from 'path';
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hebstudios',
  assetPrefix: '/hebstudios/',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true
  },
};
export default nextConfig;