/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
      "pino-pretty": false,
      encoding: false,
    };
    return config;
  },
  transpilePackages: [],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://app.agent.exchange/",
          },
        ],
      },
    ];
  },
};
