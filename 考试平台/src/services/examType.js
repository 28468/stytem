import request from '../utils/request';

export function examType() {//获取所有的考试类型
  return request.get('/exam/examType');
}