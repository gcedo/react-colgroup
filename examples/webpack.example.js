var path = require('path');
var webpack = require('webpack');

var paths = {
    SRC: path.resolve(__dirname, '../src'),
    EXAMPLES: path.resolve(__dirname, '.')
};

module.exports = {
    entry: path.join(paths.EXAMPLES, 'example.jsx'),

    output: {
        path: paths.EXAMPLES,
        filename: 'example.js'
    },

    module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel?loose',
            include: [paths.SRC, paths.EXAMPLES]
          }
        ]
    }
}
