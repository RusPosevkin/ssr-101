const nodeExternals = require('webpack-node-externals');
const path = require('path');

const BUILD_PATH = path.join(__dirname, 'dist');

const commonLoaders = [
  { test: /\.js$/, use: 'babel-loader', include: path.join(__dirname, 'src') },
  { test: /\.(jpg|svg)$/, loader: 'file-loader?name=images/[name].[hash:8].[ext]' },
];

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
  target: 'node',
  externals: [nodeExternals({
    whitelist: ['picturefill'],
  })],
  entry: './src/entry-server.js',
  output: {
    path: BUILD_PATH,
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: commonLoaders
  },
  resolve: {
    alias: {
      picturefill$: 'lodash/noop',
    },
  },
};

module.exports = [configClient, configServer];
