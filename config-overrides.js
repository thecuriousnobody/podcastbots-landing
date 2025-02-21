module.exports = function override(config) {
  // Enable code splitting
  config.optimization = {
    ...config.optimization,
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 50000,
      cacheGroups: {
        // Split Material-UI into its own chunk
        mui: {
          test: /[\\/]node_modules[\\/]@mui[\\/]/,
          name: 'mui',
          chunks: 'all',
        },
        // Split Firebase into its own chunk
        firebase: {
          test: /[\\/]node_modules[\\/]firebase[\\/]/,
          name: 'firebase',
          chunks: 'all',
        },
        // Default vendor chunk
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  };

  return config;
};
