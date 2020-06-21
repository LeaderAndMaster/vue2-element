
const port = process.env.port || process.env.npm_config_port || 9527 // dev port


module.exports={
    publicPath: '/',
    // 打包输出文件夹。相当于output的path
    outputDir: 'dist',
    // 放置生成的静态资源
    // assetsDir: 'static',
    devServer:{
        port,
        open: true,
    }
}