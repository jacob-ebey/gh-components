const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const AsyncChunksPlugin = require("webpack-async-chunk-names-plugin");

module.exports = {
  entry: {
    main: "./src/app/app.ts"
  },
  plugins: [
    new CleanWebpackPlugin(["docs/build"]),
    new HtmlWebpackPlugin({
      template: "src/templates/index.html"
    }),
    new AsyncChunksPlugin()
  ],
  output: {
    path: __dirname + "/docs",
    filename: "build/[name].[contenthash].js",
    chunkFilename: "build/chunk.[name].[contenthash].js"
  },
  resolve: {
    modules: ["node_modules"],
    symlinks: false,
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/](node_modules)[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        extractComments: true,
        sourceMap: true
      })
    ]
  },
  devtool: "source-map"
}
