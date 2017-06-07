/**
 * Created by Administrator on 2017/5/24.
 */
var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var extractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.export = {
    // 设置入口文件
    entry: {
        "index": "./index.js",
        "common": ['vue', 'jquery', 'underscore', 'backbone']
    },
    output: {
        path: './dist',
        pubilcPath: '/path/',
        filename: '[name]-[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.less$/,
                // loader: extractTextWebpackPlugin.extract("style-loader", "css-loader!less-loader")
                loader: extractTextWebpackPlugin.extract({fallback: "style-loader", use: "css-loader!less-loader"})
                // 配合‘extract-text-webpack-plugin’可以剥离，css
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg)$/,
                loader: 'url-loader?limite=8192'   // limit 是转换base64的文件大小的阀值8兆
            },
            {
                test: /\.html$/,
                loader: 'html-loader'    // 可以用来加载模板
            }
        ]


    },
    postcss: [
        require('autoprefixer')
    ],
    plugins: [
       new htmlWebpackPlugin({
           template:_dirname + './index.html'
       }) ,
       new webpack.optimize.OccurrenceOrderPlugin(),
       new webpack.optimize.UglifyJsPlugin(),
       new extractTextWebpackPlugin("[name]-[hash].css")
    ]
}
