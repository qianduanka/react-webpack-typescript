const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const base = require('./webpack.config');

let buildConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
    plugins: [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, './src/public'),
            to: path.resolve(__dirname, './dist/public'),
          },
        ],
      }),
      new MiniCssExtractPlugin({
        linkType: 'text/css',
      }),
    ],
  },
};

module.exports = merge(base, buildConfig);
