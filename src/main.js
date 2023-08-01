// import './assets/main.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs' //ElementPlus国际化配置
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue' //ElementPlus 图标引入

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)


const app = createApp(App)

// 引入pinia



//ElementPlus 图标引入
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus,{
    local:zhCn
})
app.use(pinia)
app.use(router)

app.mount('#app')
