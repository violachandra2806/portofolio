import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,

  output: "export",
  basePath: "/portofolio",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;