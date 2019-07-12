import request from '../utils/request';

export function question() {//获取所有的试题
  return request.get('/exam/questions/new');
}

