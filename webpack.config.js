const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./assets/javascripts/app.jsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [
      {
        test: [/\.js?$/, /\.jsx?$/],
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  },
  devtool: "source-maps",
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
