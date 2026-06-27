/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export → produces a fully static site in ./out for Cloudflare Pages.
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  // Clean URLs (/about/) that Cloudflare Pages serves as index.html.
  trailingSlash: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    // No image optimization server in a static export.
    unoptimized: true,
  },
};

module.exports = nextConfig;
