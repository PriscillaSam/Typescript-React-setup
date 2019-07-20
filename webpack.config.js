const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

const DIST_DIR = path.join(__dirname, '/dist');
const SRC_DIR = './src';
const env = dotenv.config().parsed;

module.exports = {
  entry: `${SRC_DIR}/index.tsx`,
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: DIST_DIR,
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  devServer: {
    port: env.PORT
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
      inject: 'body'
    })
  ]
}