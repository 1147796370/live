module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'https://www.baidu.com',
				changeOrigin: true,
				pathRewrite: {
					'^/api/user': '/s',
				}
			},
			'/abc': {
				target: 'https://cn.bing.com',
				changeOrigin: true,
				pathRewrite: {
					'^/abc/user': '/search',
				}
			},
			'/blbl': {
				target: 'https://search.bilibili.com',
				changeOrigin: true,
				pathRewrite: {
					'^/blbl/user': '/all',
				}
			},
			'/open': {
				target: 'https://api.openai.com/v1',
				changeOrigin: true,
				pathRewrite: {
					'^/open/user': '/chat/completions',
					'^/api/img': '/images/generations'
				}
			},
		},
	}
}