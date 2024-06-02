const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/scripts/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/static", to: "static" },
                { from: "src/mainStyle.min.css", to: "./" },
                { from: "node_modules/jquery/dist/jquery.min.js", to: "./" },
            ],
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        })
    ],
    devServer: {
        static: 'dist/index.html',
        compress: true,
        port: 9001,
    },
    mode: 'development'

};