import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog/nap-editor-autonomous-development-india",
        destination: "/blog/napster-cli-secure-local-multi-agent-development",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "stackflux.online",
          },
        ],
        destination: "https://www.stackflux.online/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
