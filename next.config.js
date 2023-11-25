/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["rcw108.com"],
    formats: ["image/avif", "image/webp"],
    loader: "custom",
    loaderFile: "./src/my-loader.ts",
  },
};

module.exports = nextConfig;
