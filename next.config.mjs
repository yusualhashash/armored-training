/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const noCache = [
      { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
    ];

    return [
      { source: "/sw.js", headers: noCache },
      { source: "/manifest.webmanifest", headers: noCache },
      { source: "/manifest.json", headers: noCache },
    ];
  },
};

export default nextConfig;

