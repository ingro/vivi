const HtmlWebpackPlugin = require('html-webpack-plugin');
const postssImport = require('postcss-import');
// const autoprefixer = require('autoprefixer')
const path = require('path');
// const webpack = require('webpack')

module.exports = {
    devtool: 'eval',
    entry: {
        demo: './src/demo/app',
        style: './src/style.css'
    },
    output: {
        path: 'build',
        filename: '/static/[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: './index.html'
        }),
        // new webpack.NoErrorsPlugin(),
        // new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.css$/,
            loaders: ['style', 'css', 'postcss'],
            include: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules')]
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
    },
    postcss: function() {
        return [postssImport]
    },
    devServer: {
        contentBase: 'build',
        port: 3001
    }
}