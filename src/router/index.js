import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由表--路由懒加载
const routes = [{
  path: '/login',
  name: 'login',
  component: () => import('@/views/login/')
},{
  path: '/',
  component: () => import('@/views/layout/'),
  children: [{
    path: '',   // 默认子路由
    name: 'home',
    component: () => import('@/views/home/')
  },{
    path: '/ask',
    name: 'ask',
    component: () => import('@/views/ask/')
  },{
    path: '/video',
    name: 'video',
    component: () => import('@/views/video/')
  }, {
    path: '/my',
    name: 'my',
    component: () => import('@/views/my/')
  }]
}]

const router = new VueRouter({
  routes
})

// 配置全局守卫,beforeEach,方便管理,记录登录状态


export default router
