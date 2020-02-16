require('dotenv').config()
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
  entry: './src/public/index',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  devServer: {
    port: process.env.CLIENT_PORT,
    historyApiFallback: true,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      FAUNA_CLIENT_SECRET: process.env.FAUNA_CLIENT_SECRET,
      FAUNA_SERVER_SECRET: process.env.FAUNA_SERVER_SECRET,
    }),
  ],

  stats: 'minimal',
}
