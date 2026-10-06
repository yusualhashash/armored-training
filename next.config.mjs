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
      {
        source: "/.well-known/assetlinks.json",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
    ];
  },
};

export default nextConfig;

