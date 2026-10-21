const nextConfig = {
  // On Vercel, output: 'standalone' causes "ENOENT: no such file or directory, open '/vercel/path0/.next/next-server.js.nft.json'"
  ...(process.env.BUILD_STANDALONE === 'true' && !process.env.VERCEL ? { output: 'standalone' } : {}),
  async headers() {
    const noCache = [
      { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
    ];

    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    ];

    return [
      { source: "/(.*)", headers: securityHeaders },
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

