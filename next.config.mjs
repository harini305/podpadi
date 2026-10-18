/** @type {import('next').NextConfig} */
const nextConfig = {
  // Images are pre-sized and compressed by scripts/process-images.py,
  // so runtime optimisation (and its Vercel quota) is not needed.
  images: { unoptimized: true },
};

export default nextConfig;
