import request from '../utils/request';

export function find(params) {//按条件获取试题
    console.log(params);
  return request.get("/exam/questions/condition",{params:params});
}