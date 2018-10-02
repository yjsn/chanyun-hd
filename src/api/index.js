import request from '@/utils/request'

export function getBannerList(params) {
  return request({
    url: '/api/index/bannerList',
    method: 'post',
    data: params
  })
}

export function getHomeNewsList(params) {
  return request({
    url: '/api/index/newsList',
    method: 'post',
    data: params
  })
}
export function getHomeCeremonies(params) {
  return request({
    url: '/api/index/ceremonies',
    method: 'post',
    data: params
  })
}
export function getHomeActivity(params) {
  return request({
    url: '/api/index/activity',
    method: 'post',
    data: params
  })
}
export function getNewsList(params) {
  return request({
    url: '/api/news/newsList',
    method: 'post',
    data: params
  })
}
export function getNewsInfo(params) {
  return request({
    url: '/api/news/newsInfo',
    method: 'post',
    data: params
  })
}
export function getBuddhismList(params) {
  return request({
    url: '/api/news/buddhismList',
    method: 'post',
    data: params
  })
}
export function getStatuteList(params) {
  return request({
    url: '/api/news/statuteList',
    method: 'post',
    data: params
  })
}
export function getDynamicList(params) {
  return request({
    url: '/api/news/dynamicList',
    method: 'post',
    data: params
  })
}
export function getTempleLogoList(params) {
  return request({
    url: '/api/temple/templeLogoList',
    method: 'post',
    data: params
  })
}
export function getTempleHomeMonkList(params) {
  return request({
    url: '/api/templeIndex/templeMonk',
    method: 'post',
    data: params
  })
}
export function getTempleHomeNews(params) {
  return request({
    url: '/api/templeIndex/templeNews',
    method: 'post',
    data: params
  })
}
export function addTemple(params) {
  return request({
    url: '/api/temple/addTemple',
    method: 'post',
    data: params
  })
}
export function addrankingList(params) {
  return request({
    url: '/api/ranking/list',
    method: 'post',
    data: params
  })
}
export function getMeritsListForProductPage(params) {
  return request({
    url: '/api/user/merits/meritsListForProductPage',
    method: 'post',
    data: params
  })
}
export function getTempleList(params) {
  return request({
    url: '/api/temple/templeList',
    method: 'post',
    data: params
  })
}
export function getBodhisatvvaList(params) {
  return request({
    url: '/api/temple/bodhisatvvaList',
    method: 'post',
    data: params
  })
}
export function getIncenseList(params) {
  return request({
    url: '/api/temple/incenseList',
    method: 'post',
    data: params
  })
}
export function getLampList(params) {
  return request({
    url: '/api/temple/lampList',
    method: 'post',
    data: params
  })
}
export function addApplyMerits(params) {
  return request({
    url: '/api/user/merits/applyMerits',
    method: 'post',
    data: params
  })
}
export function regist(params) {
  return request({
    url: '/api/user/regist',
    method: 'post',
    data: params
  })
}
export function login(userAccount, userPassword) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data: {
      userAccount,
      userPassword
    }
  })
}
export function logout(params) {
  return request({
    url: '/api/user/loginOut',
    method: 'post',
    data: params
  })
}
export function createOrder(params) {
  return request({
    url: '/pay/createOrder',
    method: 'post',
    data: params
  })
}
export function meritsIsSuccess(params) {
  return request({
    url: '/api/user/merits/meritsIsSuccess',
    method: 'post',
    data: params
  })
}
