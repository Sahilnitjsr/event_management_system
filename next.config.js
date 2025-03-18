/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
});

const nextConfig = {
  images: {
    domains: ['utfs.io', 'i.ibb.co', 'encrypted-tbn0.gstatic.com', 'www.google.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'utfs.io',
      }
    ],
  },
};

module.exports = withPWA(nextConfig);
