/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const envVariables = {
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_LINKEDIN_PROFILE_URL: process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL,
  NEXT_PUBLIC_GITHUB_PROFILE_URL: process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL,
  NEXT_PUBLIC_TWITTER_PROFILE_URL: process.env.NEXT_PUBLIC_TWITTER_PROFILE_URL,
  NEXT_PUBLIC_AVEMS_URL: process.env.NEXT_PUBLIC_AVEMS_URL,
  NEXT_PUBLIC_RAMANBAUG_URL: process.env.NEXT_PUBLIC_RAMANBAUG_URL,
  NEXT_PUBLIC_MESCOE_URL: process.env.NEXT_PUBLIC_MESCOE_URL,
  NEXT_PUBLIC_TOPPR_URL: process.env.NEXT_PUBLIC_TOPPR_URL,
  NEXT_PUBLIC_NVTECH_URL: process.env.NEXT_PUBLIC_NVTECH_URL,
  NEXT_PUBLIC_AXIS_URL: process.env.NEXT_PUBLIC_AXIS_URL,
};

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  // images: {
  //   unoptimized: true,
  //   disableStaticImages: false
  // },
  webpack: (config, ctx) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styles': path.resolve(__dirname, 'src/branding/scss'),
    };
    // config.module.rules.push({
    //   test: /\.svg$/i,
    //   issuer: /\.[jt]sx?$/,
    //   use: ['@svgr/webpack'],
    // })
    return config;
  },
  publicRuntimeConfig: envVariables,
  output: 'standalone',
};

export default nextConfig;
