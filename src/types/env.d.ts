/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  /** 基础api地址 */
  VITE_ApiBaseUrl: string
  /** 接口请求超时时间 */
  VITE_ApiTimeOut: string
}
