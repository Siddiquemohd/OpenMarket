/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/v1/open-market/:path*",
        destination: "http://192.168.1.13:9000/api/v1/:path*",
      },
    ];
  },
};

export default nextConfig;