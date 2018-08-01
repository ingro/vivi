const HtmlWebpackPlugin = require('html-webpack-plugin');
const postssImport = require('postcss-import');
// const autoprefixer = require('autoprefixer')
const path = require('path');
// const webpack = require('webpack');

module.exports = {
    mode: 'development',
    // devtool: 'eval',
    entry: {
        demo: './src/demo/app',
        style: './src/style.css'
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        // publicPath: 'http://localhost:3001/build/'
    },
    plugins: [
        // new webpack.LoaderOptionsPlugin({
        //     // Necessario per utilizzare i loaders in minimize mode
        //     debug: true,
        //     minimize: true,
        //     options: {
        //         // Necessario per plugin che non supportano ancora Webpack 2
        //         context: __dirname,
        //         // Necessario per resolve-url-loader che non supporta ancora Webpack 2
        //         output: {
        //             path: path.join(__dirname, 'public')
        //         }
        //     }
        // }),
        // new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: './demo.html'
        }),
        // new webpack.NoErrorsPlugin(),
        // new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.css$/,
            include: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules')],
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'postcss-loader',
                options: {
                    plugins: function() {
                        return [postssImport]
                    }
                }
            }]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 3001
    }
}