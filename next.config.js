const withPlugins = require('next-compose-plugins');

const nextConfig = {
  // distDir: '../../dist/functions/next'
  images: {
    domains: ['pbs.twimg.com'],
    loader: (width, src, quality) => `/preprocessed-images/${filename}-${width}.jpg`
  },
};

module.exports = withPlugins([], nextConfig);
