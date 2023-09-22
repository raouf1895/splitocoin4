const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    entry:'./index.html',
    output:{
        filename:'bundle,js',
        path: path.join(__dirname, '/dist')
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:'./index.html'
        })
    ],
    module:{
        rules:[
            {
                test: /.html/, 
                exclude:/node.modules/, 
                use:{
                    loader: 'html-loader',
                }
            }
        ]
    }
}
