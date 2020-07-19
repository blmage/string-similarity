const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'umd'),
    filename: 'word-similarity.min.js',
    library: 'wordSimilarity',
    libraryTarget: 'umd'
  },
};