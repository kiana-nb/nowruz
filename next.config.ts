/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASE_PATH || "",
  assetPrefix: process.env.CDN_URL || "",
  output: "standalone" as const,
  images: {
    remotePatterns: [
      {
        protocol: "https" as const,
        hostname: process.env.ASSETS_HOSTNAME || "",
      },
    ],
  },
};
export default nextConfig;
