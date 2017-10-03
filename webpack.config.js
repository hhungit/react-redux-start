module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname, 
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-1']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
     extensions: [ '.js', '.jsx']
   },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
