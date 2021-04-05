import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
// ant 组件
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// 表单组件
import VueFormGenerator from "vue-form-generator"
import "vue-form-generator/dist/vfg.css";
//页面跳转进度条
import Nprogress from "nprogress"
import "nprogress/nprogress.css"
//ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//阻止vue启动提示 | 检查提示
Vue.config.productionTip = false;
Vue.config.devtools = false

Vue.use(Antd)
Vue.use(VueFormGenerator)
Vue.use(Nprogress)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
