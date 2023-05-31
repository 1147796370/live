module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'https://www.baidu.com',
				changeOrigin: true,
				pathRewrite: {
					'^/api/user': '/s',
					// '^/api': '/images/generations'
				}
			},
			'/abc': {
				target: 'https://cn.bing.com',
				changeOrigin: true,
				pathRewrite: {
					'^/abc/user': '/search',
					// '^/api': '/images/generations'
				}
			},
			'/blbl': {
				target: 'https://search.bilibili.com',
				changeOrigin: true,
				pathRewrite: {
					'^/blbl/user': '/all',
					// '^/api': '/images/generations'
				}
			},
		},
	}
}