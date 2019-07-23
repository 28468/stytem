import request from '../utils/request';
// 获取视图权限
export function quanxian(){
  return request.get('/user/view_authority');
}