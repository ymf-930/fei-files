import { createApp } from 'vue'
import App from './App.vue'
import FeiUI from 'f-ui-one'

import 'f-ui-one/lib/styles/normalize.css' // 初始化样式
import 'f-ui-one/lib/styles/scrollbar.css' // 滚动条样式
import 'f-ui-one/lib/styles/index.css' // 组件库样式
import '@/styles/index.styl' // 项目样式

const app = createApp(App)
app.use(FeiUI)
app.mount('#app', true)
