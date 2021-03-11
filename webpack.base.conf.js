module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.styl(us)?$/,
                use: ['style', 'css', 'stylus']
            }
        ]
    }
}