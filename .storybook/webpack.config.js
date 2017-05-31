const path = require('path');
const autoprefixer = require('autoprefixer');
const postssImport = require('postcss-import');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css?$/,
                use: [{
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins() {
                                return [autoprefixer, postssImport]
                            }
                        }
                    }
                ],
                include: path.resolve(__dirname, '../')
            }
        ]
    }
};
