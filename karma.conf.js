const webpack = require('webpack');

module.exports = function(config) {
  config.set({
    browsers: ["Chrome"],
    singleRun: true,
    frameworks: ["mocha"],
    files: ["tests.webpack.js"],
    preprocessors: {
      "tests.webpack.js": ["webpack"]
      // "./assets/javascripts/__tests__/search_page_test.jsx": ["webpack"]
    },
    reporters: ['dots'],
    webpackServer: {
      noInfo: true
    },
    webpack: {
      module: {
        loaders: [{
          test: "/\.jsx?$/",
          exclude: "node_modules",
          loader: "babel-loader"
        }]
      },
      watch: true
    }
  });
};
