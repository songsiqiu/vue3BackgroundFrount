import { App } from 'vue'
import Antd from 'ant-design-vue'



/**
 * @description: 注册全局组件
 */

export function setupGlobComponent(app: App<Element>) {
  app.use(Antd)
}