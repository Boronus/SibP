const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    context: __dirname + '/script',
    entry: "./application.js",
    output: {
        filename: "bundle.js",
        library:"script"
    },

    plugins: [
        /*new UglifyJsPlugin({
            compress: {
                warnings:false,
                drop_console:true,
                unsafe:true
            }
        })*/
    ],
    module: {
        loaders: [           
            {
                test: /\.js$/,
                //exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'//,
                    /*options: {
                        presets: ['env']
                    }*/
                }
            }
        ]
    }
};