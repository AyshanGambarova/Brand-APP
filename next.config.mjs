/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://dummyjson.com/:path*", // Proxy to external API
      },
    ];
  },
};

export default nextConfig;
