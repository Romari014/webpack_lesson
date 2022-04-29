const path = require('path');
const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename:'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin({}),
            new UglifyJsPlugin()
        ]
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 4200
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use:  [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}