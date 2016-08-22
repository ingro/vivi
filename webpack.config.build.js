const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        vivi: './src/index.js'
    },
    output: {
        path: 'dist',
        filename: '[name].js'
    },
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM',
    //     'react-addons-shallow-compare': 'var React.addons.shallowCompare'
    // },
    plugins: [
        new ExtractTextPlugin('vivi.css', {
            allChunks: false,
            beautify: true,
            mangle: false
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('css-loader'),
            include: path.join(__dirname, 'src')
        }
        /*, {
            test: /\.css$/,
            loaders: ['style', 'css?modules&importLoaders=1', 'postcss'],
            include: path.join(__dirname, 'source')
        }, {
            test: /\.css$/,
            loaders: ['style', 'css?importLoaders=1'],
            include: path.join(__dirname, 'styles.css')
        }*/]
    }
}