/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheControl: {
    maxAge: 60 * 60 * 24 * 30,
  },
  images: {
    domains: ["rcw108.com"],

    loader: "custom",
    loaderFile: "./src/my-loader.ts",
  },
};

module.exports = nextConfig;
