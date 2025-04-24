import path from 'path';
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only apply these settings for production builds (GitHub Pages), not for local development
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
    basePath: '/hebstudios',
    assetPrefix: '/hebstudios/',
  } : {}),
  
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true
  },
};
export default nextConfig;