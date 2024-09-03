/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
