import { ProxyOptions } from 'vite'

const _proxy: Record<string,string | ProxyOptions> = {
  "/api": {
    target: "http://localhost:3000",
    changeOrigin: true, //是否跨域
    rewrite: (path) => path.replace(/^\/dev/, ""),
  },
}

export default _proxy