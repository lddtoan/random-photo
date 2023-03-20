import "webpack-dev-server";
import { Configuration } from "webpack";
import { resolve } from "path";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const config: Configuration = {
  entry: "./src/index.ts",
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "build")
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new BundleAnalyzerPlugin()
  ]
};

export default config;
