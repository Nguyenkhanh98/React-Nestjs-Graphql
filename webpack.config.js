const path = require('path');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodeEnv = require('dotenv-webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => ({

  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: 'app.css',
    //   path: path.resolve(__dirname, 'dist/css'),
    // }),
    // new CopyWebpackPlugin([{
    //  from: path.resolve(__dirname, './src/assets'),
    //   to: path.resolve(__dirname, './dist/assets'),
    //   ignore: ['.*'],
    // }, {
    //   from: path.resolve(__dirname, './src/configs'),
    //   to: path.resolve(__dirname, './dist'),
    //   ignore: ['.*'],
    // }]),
    new NodeEnv(),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    splitChucks: {
      chunks: 'all',
    },
  },
});
