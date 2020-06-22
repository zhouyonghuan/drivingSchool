import Vue from 'vue'
import App from './App'
// 引入uView框架
import uView from "uview-ui";
Vue.config.productionTip = false
//安装ui框架
Vue.use(uView);
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
