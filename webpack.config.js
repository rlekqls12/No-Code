var path = require('path')

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname + '/dist/js'),
    filename: 'index.js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  watchOptions: {
    ignored: ['**/.vscode/', '**/dist/', '**/node_modules/'],
  },
}
