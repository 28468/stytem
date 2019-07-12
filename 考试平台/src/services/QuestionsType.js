import request from '../utils/request';

export function getQuestionsType() {//获取所有的试题类型
  return request.get('/exam/getQuestionsType');
}