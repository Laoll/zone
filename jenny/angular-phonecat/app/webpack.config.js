/**
 * Created by Administrator on 2017/3/24.
 */
var webpack = require('webpack');

module.exports = {
    entry: [
        "./entry.js"
    ],
    output: {
        path:__dirname,
        filename: 'bundle.js'
    },
    module:{
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js?$/, loaders: ['jsx-loader']}
        ]
    },
    resolve: {
        root: 'E:/jenny/angular-phonecat/app',
        extensions: ['', '.js', '.json', '.css']
    }
}