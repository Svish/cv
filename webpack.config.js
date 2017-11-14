const path = require('path');
const webpack = require('webpack');

const Html = require('html-webpack-plugin');
const Clean = require('clean-webpack-plugin');
const ExtractText = require('extract-text-webpack-plugin');

const extractLess = new ExtractText({
	filename: '[name].css',
	//allChunks: true,
});


module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		index: './index.js',
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js',
	},
	externals: {
		jquery: 'jQuery',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.less$/,
				use: extractLess.extract({
					use: [
						{loader: 'css-loader'},
						{loader: 'less-loader', options: {
							strictMath: true,
							noIeCompat: true,
						}},
					]
				}),
			},
		],
	},
	plugins: [
		extractLess,
		new Clean(['dist'], {
			verbose: true,
		}),
	],
}
