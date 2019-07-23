import request from '../utils/request';
//获取当前用户信息
export function getUserInfo() {
  return request.get('/user/userInfo');
}
//更新用户信息
export function userUpdata(params) {
  // console.log(params)
  return request({
    url: '/user/user',
    method:'PUT',
    data:params
  })
}
