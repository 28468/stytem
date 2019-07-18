import request from '../utils/request';

//获取所有的考试类型
export function mangerRoomGet() {
  return request({
    url: '/manger/room',
    method:'POST'
  })
}

//添加班级接口
export function mangerGradeGet(params) {
  return request({
    url: '/manger/grade',
    method:'POST',
    data:params
  })
}
//获取已经分配教室的班级
export function mangerGradGet() {
  return request({
    url: '/manger/grade',
    method:'GET'
  })
}
//删除学生接口
export function remoteStuden(params){
  return request({
      data:{
          params:{id:params.student_id}
      },
      url:'/manger/student/:id=>student_id',
      method:'DELETE'
  })
}
//添加学生接口
export function getStudent(){
  return request({
      url:'/manger/student',
      method:'GET'
  })
}

export function getGradeDatas(){
  return request({
      url:'/manger/grade',
      method:'GET'
  })
}
//获取全部教室
export function getClassNameData(){
  return request({
      url:'/manger/room',
      method:'GET'
  })
}