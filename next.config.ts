import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    accessToken: 'accessToken',
  },
};

export default nextConfig;
