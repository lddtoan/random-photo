import "webpack-dev-server";
import { Configuration, DefinePlugin } from "webpack";
import { resolve } from "path";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import * as dotenv from "dotenv";

dotenv.config();

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
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
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
    new BundleAnalyzerPlugin(),
    new DefinePlugin({
      "process.env": JSON.stringify(process.env)
    })
  ],
  devServer: {
    historyApiFallback: true,
    port: 3000
  }
};

export default config;
