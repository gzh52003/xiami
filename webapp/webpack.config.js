const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // 加载器
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:path.resolve(__dirname,'./node_modules'),
                use:[{
                    loader:'babel-loader',
                    options:{
                        "babelrc": false,
                        presets:[['@babel/preset-react'], ["react"],
                        ["es2015", { "modules": false }]],
                        // 插件
                        plugins:[
                            ['@babel/plugin-proposal-decorators',{legacy: true}],
                            ['@babel/plugin-proposal-class-properties',{ "loose": true }],
                            ["import", {
                                "libraryName": "antd",
                                "libraryDirectory": "es",
                                "style": "css" // `style: true` 会加载 less 文件
                            }],
                            "syntax-dynamic-import",
                            "transform-object-rest-spread",
                            "transform-class-properties"
                        ]
                    }
                }]
            },

            // css loader
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },

             // sass loader
             {
                test:/\.s[ac]ss$/,

                // 增加编译速度
                // include:'./src',
                // exclude:'./node_modules',
                use:['style-loader','css-loader','sass-loader']
            },
        ]
    }
}