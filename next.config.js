/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    env: {
      environment: 'development',
    },
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
