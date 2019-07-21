import request from '../utils/request';

export function subject() {//获取所有的课程
  return request.get('/exam/subject');
}
