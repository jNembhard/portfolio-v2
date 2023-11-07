import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dgua8ygiz755e.cloudfront.net",
        pathname: "/assets/**",
      },
    ],
    formats: ["image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/portfolio/amazon",
        destination: "/portfolio/alnembco",
        permanent: true,
      },
    ];
  },
  compiler: {
    styledComponents: true,
  },
};

export default withPlaiceholder(nextConfig);
