const path = require('path');

module.exports = {
  entry: './src/client-entry.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client.js',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      include: path.join(__dirname, 'src'),
    }]
  }
};
