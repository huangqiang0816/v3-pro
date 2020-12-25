const { merge } = require('webpack-merge')
import { Configuration } from "webpack";
/**
 * @type {Configuration}
 */
const config = {
    mode: 'development',
    output: {
        filename: '[name].js'
    },
    devtool: 'none'
}

module.exports = merge()