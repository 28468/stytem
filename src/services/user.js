import request from '../utils/request';


//添加用户
export function userAdd(params) {
  return request({
    url: '/user',
    method: 'POST',
    data: params
  })
  
}
//添加身份
export function userAddthe(params) {
    return request({
      url: '/user/identity/edit',
      method: 'GET',
      params
    })
  }
  //添加api
export function userAddapi(params) {
    return request({
      url: '/user/authorityApi/edit',
      method: 'GET',
      params
    })
  }

  //添加视图
export function AddeditGet(params) {
    return request({
      url: '/user/authorityView/edit',
      method: 'GET',
      params
    })
  }
//获取api接口
  export function setIdentityApiGet(params) {
    return request({
      url: '/user/setIdentityApi',
      method: 'POST',
      data: params
    })
  }
  // 给身份设置试图权限
  export function setIdentityViewGet(params) {
    return request({
      url: '/user/setIdentityView',
      method: 'POST',
      data: params
    })
  }