const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
        use: [
          isDevelopment ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader"
          ]
        }
    ]
  },
  devServer: {
    static: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
    port: 4000
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    isDevelopment && 
    new ReactRefreshWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].[contenthash:8].css",
      chunkFilename: "assets/css/[name].[contenthash:8].chunk.css"
      })
  ].filter(Boolean)
}
