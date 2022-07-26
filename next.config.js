/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // This is the property you need to add
  images: {
    domains: [
      'images.unsplash.com',
      'images.pexels.com',
      'image.freepik.com',
      'demos.creative-tim.com',
      'i.ibb.co',
    ],
  },
  env: {
    PORT: process.env.PORT,
    ENV: process.env.NODE_ENV,
    DATABASE_URI: process.env.DATABASE_URI,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES: process.env.JWT_EXPIRES,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
  }
};

module.exports = nextConfig;
