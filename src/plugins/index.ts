import { App } from 'vue'
// 重置基础css样式
import 'normalize.css'
import 'element-plus/lib/theme-chalk/index.css'
import '@/styles/index.scss'

import ElementPlus from 'element-plus'

export default (app: App<Element>) => {
  app.use(ElementPlus, { size: 'small' })
}
