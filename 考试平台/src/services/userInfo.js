import request from '../utils/request';

//获取当前用户信息
export function getUserInfo() {
  return request.get('/user/userInfo');
}