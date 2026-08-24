import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site — emits ./out, deployable to Cloudflare Pages as-is.
  output: "export",
  images: { unoptimized: true },
  // Cloudflare Pages serves /about as /about/index.html; trailing slashes keep
  // relative asset paths and the exported routes consistent.
  trailingSlash: true,
};

export default nextConfig;
