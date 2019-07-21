//获取所有的课程
import {examType} from '../services/index'
export default {
  // 命名空间
  namespace: 'examType',

  // 模块的状态
  state: {
    examTypeList:[]
  },

  // 异步操作
  effects: {
    *examType({payload}, {call, put}){
   
      let data = yield call(examType,payload);
      yield put({
        type: 'examTypes',
        payload: data.data
      })
   
     
    }
  },

  // 同步操作
  reducers: {
    examTypes(state, action) {
      return { ...state, examTypeList: action.payload };
    },
  },

};

