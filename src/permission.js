import router from './router'
import { getToken } from '@/utils/auth' // 验权

const whiteList = ['/incenseBurning', '/buddhistLamp', '/confirmationMsg', '/payOk'] // 不重定向黑名单
router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) === -1) {
      next()
    } else {
      alert('请先登陆')
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
    }
  }
})

