const path = require('path');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodeEnv = require('dotenv-webpack');
const LoadablePlugin = require('@loadable/webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');

const devMode = process.env.NODE_ENV === 'production';

module.exports = {

  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(s*)css$/,
        // use: [
        //   {
        //     loader: MiniCssExtractPlugin.loader,
        //     options: {
        //       esModule: true,
        //     }
        //   },
        //   {
        //     loader: 'style-loader', // creates style nodes from JS strings
        //   },
        //   {
        //     loader: 'css-loader', // translates CSS into CommonJS
        //   },
        //   {
        //     loader: 'sass-loader', // compiles Sass to CSS
        //   },
        // ],
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //       },
      //     },
      //     'css-loader',
      //   ],
      // },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: 'url-loader?name=[name].[ext]',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      title: 'test',
      template: 'src/index.html'
    }),
    new NodeEnv(),
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new LoadablePlugin()
  ],
  devServer: {
    open: 'chrome',
    port: 3000,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    compress: true,
    hot: true,
  },
  optimization: {
    splitChunks: { chunks: 'all' },
    minimizer: [new CssMinimizerPlugin()],

  },
};
