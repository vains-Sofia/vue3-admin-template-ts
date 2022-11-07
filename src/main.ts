import App from './App.vue';
import { createApp } from 'vue';
import i18n from './i18n/index';
import { createPinia } from 'pinia';
import router from './router/index';
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VainsFormDesigner from 'vains-form-designer';

// import "./assets/base.css";
import './assets/css/reset.css';
import './assets/css/border.css';
import './assets/css/global.css';
import 'element-plus/dist/index.css';
import 'vains-form-designer/dist/style.css';

const app = createApp(App);
const pinia = createPinia();
// 使用vuex，路由，i18n
app.use(pinia).use(router).use(i18n);
// 加载图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.use(ElementPlus);
app.use(VainsFormDesigner);
app.mount('#app');
