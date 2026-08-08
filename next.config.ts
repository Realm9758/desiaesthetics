import type { NextConfig } from "next";

/**
 * The site is fully static either way — the single route prerenders at build time.
 *
 * On Vercel this builds as a normal Next.js app, because `output: "export"` writes
 * to `out/` instead of `.next` and platforms expecting the standard output then
 * fail to find it. For a plain static host (GitHub Pages, a bucket, Netlify drop)
 * run `npm run export`, which sets STATIC_EXPORT and emits a folder of files.
 *
 * There is no image pipeline to configure: this build carries no photography by
 * decision, not by omission. See PRODUCT.md, Brand Commitments.
 */
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(staticExport ? { output: "export" as const, images: { unoptimized: true } } : {}),
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
