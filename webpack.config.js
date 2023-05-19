const path = require('path');
const webpack = require('webpack');

const mode = {
  DEV: 'development',
  STG: 'production',
  LIVE: 'production',
};

module.exports = {
  mode: mode[process.env.ENV],
  entry: './app/index.ts',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: process.env.ENV === 'DEV' ? 'index-dev.js' : 'index-live.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(mode[process.env.ENV]),
    }),
  ],
};
