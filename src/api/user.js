import request from '@/utils/request'

export function getTotalData(params) {
  return request({
    url: '/api/userCenter/userMeritsCount',
    method: 'post',
    data: params
  })
}
