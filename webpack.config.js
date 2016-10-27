module.exports = {
    entry: './src/app.js',
    output: {
        path: './www/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.pug$/, loader: 'pug-loader', exclude: /node_modules/ }
        ]
    },
    devServer: {
        contentBase: './www',
        stats: 'minimal'
    }
};
