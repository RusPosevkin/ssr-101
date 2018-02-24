const path = require('path');

const BUILD_PATH = path.join(__dirname, 'dist');

const commonLoaders = [{
  test: /\.js$/,
  use: 'babel-loader',
  include: path.join(__dirname, 'src'),
}];

const configClient = {
  name: 'client',
  entry: './src/entry-client.js',
  output: {
    path: BUILD_PATH,
    filename: 'client.js',
  },
  module: {
    rules: commonLoaders
  },
};

const configServer = {
  name: 'server',
  entry: './src/entry-server.js',
  output: {
    path: BUILD_PATH,
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: commonLoaders
  },
};

module.exports = [configClient, configServer];
