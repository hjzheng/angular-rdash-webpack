var webpack = require('webpack');
var HTMLPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    // configuration
	devtool: 'source-map',
	entry: {
		app: ['./src/app.js'],
		libs: ['angular', 'angular-resource']
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].[hash].js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['', '.js']
	},
	plugins: [

		new HTMLPlugin({
			template: './src/index.html',
			filename: 'index.html',
			inject: false
		}),
		new webpack.optimize.CommonsChunkPlugin('libs', 'libs.[hash].js'),
		new ExtractTextPlugin('[name].[hash].css'),
		new CleanPlugin('dist'),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	eslint: {
		configFile: '.eslintrc',
		emitWarning: true,
		emitError: true,
		formatter: require('eslint-friendly-formatter')
	},
	// loader
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loader: 'eslint-loader',
				exclude: /node_modules/,
				include: __dirname + '/src'
			}
		],
		loaders: [
			{
				test: /\.js?$/,
				loaders: ['babel'],
				exclude: /(node_modules|bower_components)/,
				include: __dirname + '/src'
			},
			{
				test: /\.css$/,
				// 注意 loader 而不是 loaders
				loader: ExtractTextPlugin.extract('style', 'css'),
				// 注意 因为 bootstrap.css 在 node_modules 中, 为了处理 bootstrap 所以删除 exclude
				includes: [__dirname + '/src', __dirname + '/node_modules/bootstrap/dist/css/bootstrap.css']
			},
			{
				test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
				loader: 'url?prefix=font/&limit=10000'
			}
		]
	}
};
