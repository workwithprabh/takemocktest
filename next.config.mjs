/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — matches the "statically generated PWA" plan.
  // Every exam/test/blog page is pre-rendered as real HTML at build time,
  // which is what makes it crawlable and fast on a mid-range Android phone.
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
