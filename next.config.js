/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'imgur.com',
          port: '',
          pathname: '/**.png',
        },
      ],
    },
  }
