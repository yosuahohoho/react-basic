const htmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new htmlWebpackPlugin({
  template: "./src/index.html",
  fileName: "./index.html"
})

module.exports = {
  module: {
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
  plugins: [htmlPlugin]
}
