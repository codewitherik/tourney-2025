module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist',
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single', // erzeugt runtime.js separat
    splitChunks: {
      chunks: 'all',
    },
  },
  mode: 'production',
};
