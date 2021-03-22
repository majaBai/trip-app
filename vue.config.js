const path = require('path')

module.exports = {
    // runtimerCompiler: true,
    runtimeCompiler: true,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: { '^/api': '/mock' },
                changeOrigin: true
            },
        }
    }
}