import http from './request'
  
// 调用测试
export function getTest(params:any) {
    return http({
      url: '/xxxx',//此处为自己请求地址
      method: 'get',
      data:params
    })
  }