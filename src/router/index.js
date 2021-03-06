import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: () => import('@/layout/index'),
    meta: {
      title: '控制台'
    },
    children: [
      {
        path: '/',
        component: () => import('../views/home')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/sys',
    name: 'sys',
    component: () => import('@/layout'),
    redirect: '/sys/users',
    meta: {
      title: '系统管理'
    },
    children: [
      {
        path: '/sys/users',
        component: () => import('../views/sys-users'),
        meta: {
          title: '用户管理'
        }
      },
      {
        path: '/sys/menus',
        component: () => import('../views/sys-menus'),
        meta: {
          title: '菜单管理'
        }
      },
      {
        path: '/sys/roles',
        component: () => import('../views/sys-roles'),
        meta: {
          title: '角色管理'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
