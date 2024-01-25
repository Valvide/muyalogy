/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["pages", "utils"],
  },
  images: {
    domains: ["utfs.io"],
  },
};

export default nextConfig;
