import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslintPlugin from '@nabla/vite-plugin-eslint' //esline静态代码检查

import proxy from './src/config/proxy'

export default defineConfig({
  base: '/', //基础路径,也就是所有api请求的前缀
  plugins: [
    vue(), 
    vueJsx(),
    eslintPlugin({
      shouldLint: (path)=>/\.(ts|tsx|js|jsx|vue)$/.test(path), //哪些文件需要eslint检查
      eslintOptions: {
        cache: false,
      },
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
      scss: {
        additionalData: `@use "@/styles/utils/_index.scss";`, //预处理的过程中添加额外数据
      },
    },
  },
  server: {
    port: 3000, //端口号
    host: '0.0.0.0', //表示将开发服务器绑定到所有可用的网络接口，而不仅仅是本地接口（localhost），这样可以方便地在局域网中访问开发服务器。
    proxy,
  },
  optimizeDeps: { //优化依赖
    include: [],  //配置需要优化的依赖模块列表,去除第三方库不规范或者多余的依赖
  },
})