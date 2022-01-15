const withPlugins = require('next-compose-plugins');

const nextConfig = {
  // distDir: '../../dist/functions/next'
  images: {
    domains: ['pbs.twimg.com'],
    loader: 'custom',
    path: 'https://pbs.twimg.com',
  },
};

module.exports = withPlugins([], nextConfig);
