const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const copyPlugin = require('copy-webpack-plugin')
const miniCssExtractPlugin = require("mini-css-extract-plugin")
const cssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = {
    entry: './index.js',
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            { test: /\.css$/, use: [miniCssExtractPlugin.loader, 'css-loader'] },
            {
                test: /\.(pmg|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new copyPlugin({
            patterns: [{ from: 'static', to: 'static' }],
        }),
        new htmlWebpackPlugin({
            template: './index.html',
        }),
        new miniCssExtractPlugin()
    ],
    optimization: {
        minimizer: ["...", new cssMinimizerPlugin()]
    }
}
