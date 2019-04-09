const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  module: {
    devServer: {
      contentBase: "./dist"
    },
    devTools:"inline-source-maps",
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["./dist"]),
    new HtmlWebpackPlugin({ template: "./src/index.html" })
  ]
}
