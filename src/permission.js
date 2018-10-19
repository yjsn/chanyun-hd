import router from './router'
import { getToken } from '@/utils/auth' // 验权
import { MessageBox, Message } from 'element-ui'

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
      MessageBox.confirm('进行此操作需要先登陆, 是否跳转登陆界面?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      }).catch(() => {
        Message({
          type: 'info',
          message: '已取消操作'
        })
      })
    }
  }
})

