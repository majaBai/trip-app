const path = require('path')

module.exports = {

    devServer: {
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:8080',
        //         pathRewrite: { '^/api': '/static/mock' },
        //         // ws: true,
        //         // changeOrigin: true
        //     },
        // }
        before(app) {
            // 根据你的url规则来定
            app.all('/api/*', (req, res) => {
                // 根据你的json数据地址来适配，是否和请求url完全一致
                // const url = req.path.replace('/api', '');
                // json数据
                // const filePath = `/public/mock/${url}.json`;
                const filePath = `/static/mock/index.json`;
                // json数据绝对地址
                const abPath = path.join(__dirname, filePath);
                // console.log('abPath', abPath)
                const data = require(abPath);
                res.json(data);
            })
        }
    }
}