import request from '../utils/request';

//获取已经分配教室的班级
export function classGet() {
  return request({
    url: '/manger/grade',
    method:'GET'
  })
}

//获取所有班级
export function classAll() {
  return request({
    url: '/manger/room',
    method:'GET'
  })
}
//添加班级
export function classAdd(params) {
  // console.log(params)
  return request({
    url: '/manger/grade',
    method:'POST',
    data:params
  })
}
//删除所有班级
export function classDel(params) {
  console.log(params)
  return request({
    url: '/manger/grade/delete',
    method:'DELETE',
    data:params
  })
}

//更新班级信息接口
export function classupdata(params) {
  console.log(params)
  return request({
    url: '/manger/grade/update',
    method:'PUT',
    data:params
  })
}