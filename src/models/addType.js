//获取所有的试题类型
import {addType} from '../services/index'
export default {
  // 命名空间
  namespace: 'addType',

  // 模块的状态
  state: {
    addTypeList:[]
  },

  // 异步操作
  effects: {
    *addType({ payload}, {call, put}){
         let data = yield call(addType, payload);
          console.log(data)
   yield put({
        type: 'addTypes',
        payload: data.data
      })
    }
  },

  // 同步操作
  reducers: {
    addTypes(state, action) {
      return { ...state, addTypeList: action.payload };
    },
  },

};

