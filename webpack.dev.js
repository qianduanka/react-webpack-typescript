const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const base = require('./webpack.config');

let devConfig = {
  devServer: {
    client: {
      logging: 'none',
      overlay: {
        errors: true,
        warnings: false,
        runtimeErrors: true,
      },
      reconnect: 5,
    },
    port: 3333,
    open: ['/'],
    hot: true,
    static: {
      directory: path.join(__dirname, 'src/public'),
    },
    historyApiFallback: {
      rewrites: [{ from: /^(?!\/api)/gi, to: `/index.html` }],
    },
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = merge(base, devConfig);
