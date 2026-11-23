import type { NextConfig } from "next";

const nextConfig: NextConfig = { reactStrictMode: true, transpilePackages: ["@zentrix/contracts"] };
export default nextConfig;
