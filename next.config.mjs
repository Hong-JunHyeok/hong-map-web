/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "img1.newsis.com",
      },
    ],
  },
};

export default nextConfig;
