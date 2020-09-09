const { merge } = require('webpack-merge')
const path = require('path')
const Webpack = require('webpack')
const base = require('./webpack.base')



module.exports = merge({
    mode:'development',
    output:{
        filename:'[name].js',
        chunkFilename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.(css|less)$/,
                use:[
                    'style-loader',
                    {
                      loader:'css-loader',
                      options:{
                          importLoaders:2
                      }  
                    },
                    'less-loader'
                ]
            }
        ]
    },
    plugins:[
        new Webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        port:"8081",
        open:true,
        hot:true
    }
},base)