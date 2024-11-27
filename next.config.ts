import type { NextConfig } from "next";

module.exports = {
  async redirects() {
    return [
      {
        source: "/chat",
        destination:
          "https://clerk-convex-chat-5m8z67gmg-enlguys-projects.vercel.app/",
        permanent: true,
      },
    ];
  },
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
