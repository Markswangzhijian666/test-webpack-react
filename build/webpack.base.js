const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const template = path.resolve(__dirname, "../public/index.html");
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.j(s|sx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "../src"),
        use: ["babel-loader"],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]?[hash]",
            outputPath: "images/",
            limit: 4096,
          },
        },
      },
      {
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: "file-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template,
      filename: "index.html",
      title: "webpack打包单应用",
    }),
    new BundleAnalyzerPlugin(),
  ],
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "_",
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: "vender",
        },
        default: {
          minChunks: 2,
          priority: -20,
          name: "common",
          reuseExistingChunk: true,
        },
      },
    },
  },
};
