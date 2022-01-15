const withPlugins = require('next-compose-plugins');

const nextConfig = {
  // distDir: '../../dist/functions/next'
  images: {
    domains: ['pbs.twimg.com'],
    loader: "imgix",
  },
};

module.exports = withPlugins([], nextConfig);
