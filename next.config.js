/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: false,
  i18n: {
    locales: ["en-US", "hi"],
    defaultLocale: "en-US"
  },

  optimizeFonts: false,
  images: { "domains": ['chefkart-strapi-media.s3.ap-south-1.amazonaws.com', 'chefkart.netlify.app']}
};

module.exports = nextConfig;
