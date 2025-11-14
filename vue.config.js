const { defineConfig } = require('@vue/cli-service')
const path = require('path');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const PrerenderSPAPlugin = require('@dreysolano/prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const isDev = process.env.NODE_ENV === 'development';

// 1. 硬编码（适合静态页）
const paths = ['/']
const plugins = [
  new PrerenderSPAPlugin({
    staticDir: path.join(__dirname, 'dist'),
    routes: paths,
    renderer: new Renderer({
      headless: true,
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      renderAfterDocumentEvent: 'render-event',
      // //   headless: false,                // 看浏览器
      // devtools: true,
    })
  }),
  new SitemapPlugin({
    base: 'https://nologo.code24.top',      // 你的域名
    paths,
    options: {
      filename: 'sitemap.xml',
      lastmod: true,                  // 取文件修改时间
      changefreq: 'daily',
      priority: 0.8
    }
  })
]



module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  publicPath: './',
  productionSourceMap: false,

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@model': path.resolve(__dirname, 'src/model'),
      }
    },
    ...(!isDev && { plugins })
  },
  devServer: {
    client: {
      overlay: false, // ✅ 关闭错误遮罩
    },
  },
  pages: {
    home: {
      entry: 'src/page/home/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '去水印下载鸭',
    },
  }
})
