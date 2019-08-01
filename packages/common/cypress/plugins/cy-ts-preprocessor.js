const wp = require('@cypress/webpack-preprocessor');

const webpackOptions = {
  module: {
    rules: [
      {
        loader: require.resolve('babel-loader'),
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

const options = {
  webpackOptions,
};

module.exports = wp(options);
