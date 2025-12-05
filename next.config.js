/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['robohash.org'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/players',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
