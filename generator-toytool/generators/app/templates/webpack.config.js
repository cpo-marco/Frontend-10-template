const webpack = require('webpack'); //to access built-in plugins
const { VueLoaderPlugin } = require('vue-loader')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/main.js",
    module: {
        rules: [
            { 
                test: /\.vue$/, 
                use: 'vue-loader' 
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]                
            },
            { 
                test: /\.js$/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },

        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "src/*.html", to: "[name].[ext]" }
            ],
        }),        
    ]
};