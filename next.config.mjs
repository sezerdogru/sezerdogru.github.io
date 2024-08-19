/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "web.telegram.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
