var webpack = require('webpack');
var path = require('path');
console.log();
module.exports = {
	entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/static/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [{
			test: /\.scss$/,
			loader: "style!css!autoprefixer-loader!sass"
		}, {
			test: /\.js[x]?$/,
			exclude: /node_modules/,
			loader: 'react-hot!babel',
			include: path.join(__dirname, 'src')
		}]
	}
};
