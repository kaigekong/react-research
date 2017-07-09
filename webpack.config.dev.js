var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

module.exports = {
	devtool:'cheap-module-eval-source-map',
	entry: {
		app: [
			'webpack-hot-middleware/client',
			'./src/app',
		],
		vendors: ['react', 'react-dom'],
	},
	output: {
		filename: '[name].js',
		publicPath: '/static/',
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			include: [
				path.resolve(__dirname, 'src')
			],
			loaders: ['react-hot-loader', 'babel-loader']
		},{
			test: /\.scss$/,
			include: [
				path.resolve(__dirname, 'src'),
			],
			loader: 'style!css!sass!?sourceMap=true&sourceMapContents=true',
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss', '.css']
	},
	plugins: [
		// new webpack.optimize.CommonsChunkPlugin({'vendors': 'vendors.js'}), // Old use
		new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendors.js' }),
		/*
			new webpack.optimize.DedupePlugin(),
			WARNING in DedupePlugin: This plugin was removed from webpack. Remove it from your configuration. 
		*/
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			__DEV__: true
		}), 
		// new webpack.NoErrorsPlugin(), // Old use
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
};