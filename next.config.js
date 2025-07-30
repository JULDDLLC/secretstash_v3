/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config) => {
    config.optimization.minimize = false;
    return config;
  },
  // Add any other configurations from your original next.config.js here if they were not in next-config.js
};

module.exports = nextConfig;