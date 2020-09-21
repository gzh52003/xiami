const {injectBabelPlugin} = require('react-app-rewired')
const path = require('path')
const {override,addWebpackAlias,addDecoratorsLegacy,useBabelRc,disableEsLint,fixBabelImports} = require('customize-cra');
    module.exports = override(
        addDecoratorsLegacy(), // 装饰器支持
        fixBabelImports('import',{ libraryName: "antd", style: "css" })
    )

// module.exports = function override(config,env){
//   config.resolve.alias['@'] = path.join(__dirname,'./src/')
//     config = injectBabelPlugin(["@babel/plugin-proposal-decorators",{"legacy":true}],config)
   
//     return config
// }

module.exports = override(addDecoratorsLegacy(),
addWebpackAlias({
  '@':path.join(__dirname,'src'), // D:\app\xx, /app/xxx
  '#': path.join(__dirname,'src/components'),
  '~': path.join(__dirname,'src/views')
}),

fixBabelImports('import',{
  "libraryName": "antd-mobile",
  "style": "css" // `style: true` 会加载 less 文件
}),
//禁用eslint
disableEsLint()
)