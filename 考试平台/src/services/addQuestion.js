
import request from '../utils/request';

export function addQuestion(params) {//添加试题接口
  console.log(params)
  return request.post('/exam/questions',params);
}

