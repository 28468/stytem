
import request from '../utils/request';
export function updata(params){
  console.log(params)
return request.put("/exam/questions/update",params);
}