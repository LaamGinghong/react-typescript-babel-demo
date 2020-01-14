const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        filename: "[name]-[hash].bundle.js",
        path: path.resolve(__dirname) + '/dist'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {test: /\.(js|ts)x?$/, loader: 'babel-loader', exclude: /node_modules/}
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "React Typescript Babel App",
            template: "./index.html"
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: "./dist",
        hot: true,
        open: 'Google Chrome',
        host: "localhost",
        port: 8081,
        historyApiFallback: {
            disableDotRule: true
        },
        overlay: true,
        inline: true,
        stats: "errors-only",
        /* proxy: {
             '/api/': {
                 changeOrigin: true,
                 target: 'http://localhost:3000',
                 pathRewrite: {
                     '^/api/': '/'
                 }
             }
         }*/
    }
}
