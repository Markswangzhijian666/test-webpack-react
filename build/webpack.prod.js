const { merge } = require("webpack-merge");
const path = require("path");
const base = require("./webpack.base");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(
  {
    mode: "production",
    output: {
      filename: "js/[name]_[contenthash].js",
      chunkFilename: "js/[name]_[contenthash].js",
    },
    module: {
      rules: [
        {
          test: /\.(css|less)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                filename: "[name].css",
                chunkFilename: "[name].css",
                publicPath: "../", //****最后打包的时候替换引入文件路径
              },
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 2,
              },
            },
            "less-loader",
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "css/[name]_[hash].css",
        chunkFilename: "css/[name]_[hash].css",
      }),
      new CleanWebpackPlugin(),
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
          terserOptions: {
            drop_console: true,
            drop_debugger: true,
          },
        }),
      ],
    },
  },
  base
);
