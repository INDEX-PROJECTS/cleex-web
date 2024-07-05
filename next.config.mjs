const IS_PROD = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: IS_PROD ? "/cleex_web_frontend" : "",

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'testguru.ru',
      },
      {
        // тестовые хосты
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  }
};

export default nextConfig;
