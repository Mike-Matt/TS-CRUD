const path = require('path')

module.exports = {
  mode: 'production',
  entry: './SRC/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'Dist'),
    publicPath: 'Dist'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/ 
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}