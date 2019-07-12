//获取所有的试题类型
import {find} from '../services/index'
export default {
  // 命名空间
  namespace: 'find',

  // 模块的状态
  state: {
    findList:[]
  },

  // 异步操作
  effects: {
    *find({ payload}, {call, put}){
         let data = yield call(find, payload);
          console.log(data)
       yield put({
          type: 'finds',
          payload: data.data
        })
    }
  },

  // 同步操作
  reducers: {
    finds(state, action) {
      return { ...state, findList: action.payload };
    },
  },

};

