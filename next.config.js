const withPlugins = require('next-compose-plugins');

const nextConfig = {
  // distDir: '../../dist/functions/next'
  images: {
    domains: ['pbs.twimg.com'],
    loader: "imgix",
    path: "https://noop/",
  },
};

module.exports = withPlugins([], nextConfig);
