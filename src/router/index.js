import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  // { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  { path: '/register', component: () => import('@/views/Register'), hidden: true },
  { path: '/login', component: () => import('@/views/Login'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/dashboard/index'),
        name: 'index'
      },
      {
        path: 'templeindex',
        component: () => import('@/views/templeIndex/index'),
        name: 'templeindex'
      },
      {
        path: 'templeList',
        component: () => import('@/views/templeIndex/TempleList'),
        name: 'templeList'
      },
      {
        path: 'templeInside',
        component: () => import('@/views/templeIndex/TempleInside'),
        name: 'templeInside'
      },
      {
        path: 'newsList',
        component: () => import('@/views/news/NewsList'),
        name: 'newsList'
      },
      {
        path: 'newsInfo',
        component: () => import('@/views/news/NewsInfo'),
        name: 'newsInfo'
      },
      {
        path: 'templeDynamicList',
        component: () => import('@/views/TempleDynamic/TempleDynamicList'),
        name: 'templeDynamicList'
      },
      {
        path: 'introduction',
        component: () => import('@/views/TempleDynamic/Introduction'),
        name: 'introduction'
      },
      {
        path: 'rulesList',
        component: () => import('@/views/rules/RulesList'),
        name: 'rulesList'
      },
      {
        path: 'rulesInfo',
        component: () => import('@/views/rules/RulesInfo'),
        name: 'rulesInfo'
      },
      {
        path: 'rankingList',
        component: () => import('@/views/rankingList/index'),
        name: 'rankingList'
      },
      {
        path: 'venerateBuddhaHome',
        component: () => import('@/views/venerateBuddha/VenerateBuddhaHome'),
        name: 'venerateBuddhaHome'
      },
      {
        path: 'incenseBurning',
        component: () => import('@/views/venerateBuddha/IncenseBurning.vue'),
        name: 'incenseBurning'
      },
      {
        path: 'buddhistLamp',
        component: () => import('@/views/venerateBuddha/BuddhistLamp.vue'),
        name: 'buddhistLamp'
      },
      {
        path: 'confirmationMsg',
        component: () => import('@/views/venerateBuddha/ConfirmationMsg.vue'),
        name: 'confirmationMsg'
      },
      {
        path: 'payOk',
        component: () => import('@/views/venerateBuddha/PayOk.vue'),
        name: 'payOk'
      }
    ]
  }
]

export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
