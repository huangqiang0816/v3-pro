const { merge } = require('webpack-merge')
import webpack from "webpack";
import { Configuration } from "webpack";
/**
 * @type {Configuration}
 */
const config = {
    mode: 'development',
    output: {
        filename: '[name].js'
    },
    devServer:{
        open: true,
        hot: true,
        historyApiFallback: true
    },
    resolve:{
       
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}