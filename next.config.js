/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    ALGOLIA_APPLICATION_ID: process.env.ALGOLIA_APPLICATION_ID,
    ALGOLIA_SEARCH_API_KEY: process.env.ALGOLIA_SEARCH_API_KEY,
    ALGOLIA_SEARCH_INDEX: process.env.ALGOLIA_SEARCH_INDEX
  },
  images: {
    domains: ["cdn-demo.algolia.com"]
  }
}

module.exports = nextConfig
