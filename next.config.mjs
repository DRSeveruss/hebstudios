import path from 'path';
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel deployment doesn't need these settings
  // Remove GitHub Pages specific configuration
  
  images: {
    domains: ['images.unsplash.com'],
  },
  typescript: {
    ignoreBuildErrors: true
  },
};
export default nextConfig;