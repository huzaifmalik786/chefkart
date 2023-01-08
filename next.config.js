/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: false,

  optimizeFonts: false,
  images: { "domains": ['chefkart-strapi-media.s3.ap-south-1.amazonaws.com']}
};

module.exports = nextConfig;
