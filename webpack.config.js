module.exports = {
    module: {
        entry:'./src/main.js',
        rules: [
          {
            test:/\.vue$/,
            loader:'vue-loader',
            options:{
              loaders:{
                'scss':['vue-style-loader', 'css-loader', 'sass-loader'],
                'sass':['vue-style-loader', 'css-loader', 'sass-loader']
              }
            }
          },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.styl(us)?$/,
                use: ['style', 'css', 'stylus']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ],
    }
}