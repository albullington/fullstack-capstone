import path from 'path';

const common = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /'node_modules'/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'env', 'stage-0'],
        },
      },
    ],
  },
};

const client = {
  entry: './client/src/app',
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js',
  },
};

const server = {
  entry: './client/src/server',
  target: 'node',
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs-module',
  },
};

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server),
];
