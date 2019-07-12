import request from '../utils/request';

export function addType(params) {//添加试题类型
    console.log(params);
  return request.get(`/exam/insertQuestionsType?text=${params.text}&&sort=${params.sort}`,);
}