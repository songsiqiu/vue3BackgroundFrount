import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'


import router from './router'
import '@/styles/index.scss'
import { setupGlobComponent } from '@/components'


async function bootstrap() {
  const app = createApp(App)
  try {
    //安装全局组件
    setupGlobComponent(app)

    app.use(createPinia())
    app.use(router)
  } catch (err) {
    console.error(err)
  }

  app.mount('#app')
}

bootstrap()
