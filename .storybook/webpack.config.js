const path = require('path');
const autoprefixer = require('autoprefixer');
const postssImport = require('postcss-import');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.css?$/,
                loaders: ['style', 'css', 'postcss'],
                include: path.resolve(__dirname, '../')
            }
        ]
    },
    postcss() {
        return [autoprefixer, postssImport]
    }
};
