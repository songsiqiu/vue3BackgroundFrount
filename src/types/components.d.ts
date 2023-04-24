import 'vue'
import 'ant-design-vue/typings/global'

declare module 'vue' {
  export interface GlobalComponents {
    'router-link': typeof import('vue-router')['RouterLink']
    'router-view': typeof import('vue-router')['RouterView']
  }
}