import BuilderDevTools from "@builder.io/dev-tools/next";
import type { NextConfig } from "next";
const {
  withHydrationOverlay,
} = require("@builder.io/react-hydration-overlay/next");

const nextConfig: NextConfig = BuilderDevTools()({
  /* config options here */
});

export default nextConfig;
