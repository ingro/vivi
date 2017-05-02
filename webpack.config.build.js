const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        vivi: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'lib'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            // Necessario per utilizzare i loaders in minimize mode
            minimize: true,
            options: {
                // Necessario per plugin che non supportano ancora Webpack 2
                context: __dirname,
                // Necessario per resolve-url-loader che non supporta ancora Webpack 2
                output: {
                    path: path.join(__dirname, 'public')
                }
            }
        }),
        new ExtractTextPlugin({
            filename: 'vivi.css',
            allChunks: false,
            beautify: true,
            mangle: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false
            },
            mangle: {
                screw_ie8: true
            },
            output: {
                comments: false,
                screw_ie8: true
            }
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader'
                }]
            }),
            include: path.join(__dirname, 'src')
        }]
    }
}