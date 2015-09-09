var path = require('path');
var NODE_MODULES_DIR = path.resolve(__dirname, 'node_modules');
var webpack = require('webpack');

var config = {
  entry: {
    app: path.resolve(__dirname, './src/index'),
    vendors: ['react', 'react-router']
  },
  output: {
    path: path.resolve(__dirname, './server/public/js'),
    filename: 'app.js'
  },
  module: {
		loaders: [{
			test: /\.scss$/,
      exclude: [NODE_MODULES_DIR],
			loader: 'style!css!autoprefixer-loader!sass'
		}, {
			test: /\.js[x]?$/,
			exclude: [NODE_MODULES_DIR],
			loader: 'babel',
			include: path.join(__dirname, 'src')
		}]
	},
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.optimize.UglifyJsPlugin()
  ]
};

module.exports = config;
