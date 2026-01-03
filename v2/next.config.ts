import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',  // <=== Enables static HTML export
  images: {
    unoptimized: true, // <=== Required for static export if using Next/Image
  },
};

export default nextConfig;
