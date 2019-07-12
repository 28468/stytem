
import request from '../utils/request';

export function addQuestion(params) {//添加试题接口
  return request.post('/exam/questions',params);
}

