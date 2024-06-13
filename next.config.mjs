/** @type {import('next').NextConfig} */

const envVariables = {
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
};

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: envVariables,
  output: 'standalone',
};

export default nextConfig;
