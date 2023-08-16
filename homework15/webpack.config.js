const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
	rules: [
	  {
		 test: /\.js$/,
		 exclude: /node_modules/,
		 use: {
			loader: 'babel-loader',
		 },
	  },
	  {
		 test: /\.css$/,
		 use: ['style-loader', 'css-loader'],
	  },
	  {
		 test: /\.(jpg|jpeg|png|gif|svg)$/,
		 use: {
			loader: 'file-loader',
			options: {
			  name: '[name].[ext]',
			  outputPath: 'images/',
			},
		 },
	  },
	],
 },
};