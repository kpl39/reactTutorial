//will compile everything to ES5 and launch server

module.exports = {
  entry: './main.js',
  output: {
    path: '/',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 3000
  },
  module: {
    loaders: [
    {
      //check for .js at end of all files
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}