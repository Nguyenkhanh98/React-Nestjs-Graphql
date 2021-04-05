const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const path = require('path');
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
let entryPoint = path.resolve(__dirname, 'dist');
const outputPath = path.join(process.cwd(), '/dist');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval',
    watch: true,
});
