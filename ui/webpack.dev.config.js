var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'public/ui'),
    filename: "index.js"
  },
  module: {
    loaders: [
      { test: /\.(jsx|es6)$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json' },
      { test: /\.css$/, exclude: /\.useable\.css$/, loader: "style!css" },
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.tsx?$/, loader: 'ts-loader'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6', '.jsx', '.ts', '.tsx']
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};