import request from '@/utils/request'

export function getTotalData(params) {
  return request({
    url: '/api/userCenter/userMeritsCount',
    method: 'post',
    data: params
  })
}
export function getMeritsList(params) {
  return request({
    url: '/api/userCenter/meritsList',
    method: 'post',
    data: params
  })
}

export function getMeritsDetail(params) {
  return request({
    url: '/api/userCenter/meritsDetail',
    method: 'post',
    data: params
  })
}
