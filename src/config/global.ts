type ENV = 'development' | 'production'

const globalConfig = {
  /** 公共基础路径 */
  publicBasePath: import.meta.env.BASE_URL,
  /** 当前环境 */
  env: import.meta.env.MODE as ENV,
  /** 基础api地址 */
  apiBaseUrl: import.meta.env.VITE_ApiBaseUrl,
  /** 接口超时时间 */
  apiTimeOut: parseInt(import.meta.env.VITE_ApiTimeOut),
}

export default globalConfig
