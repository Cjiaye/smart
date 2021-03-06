import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission'

import './directive/permission'

Vue.use(ElementUI)
Vue.config.productionTip = false

/**
 * 动态添加路由没讲
 * 角色管理
 * 菜单管理
 *
 *
 *  菜单的权限
 *
 *  按钮的权限 :  vue自定义指令去进行实现
 *
 *  vue指令： 内置指令 v-for v-if v-show v-model v-on v-bind
 *           自定义指令 v-permission
 *
 *            全局指令 v-permission-all  全局
 *
 *            局部指令 v-permission-local 组件内部
 *
 *   用户登录以后后台会返回当前用户所拥有的按钮权限数据 以及 菜单权限数据 以及 路由权限数据
 *
 *   路由权限
 *   菜单权限
 *   按钮权限
 *   页面权限
 *
 *   数据权限
 *
 */

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
