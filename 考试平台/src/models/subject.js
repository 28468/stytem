//获取所有的课程
import {subject} from '../services/index'
export default {
  // 命名空间
  namespace: 'subject',

  // 模块的状态
  state: {
    subjectList:[]
  },

  // 异步操作
  effects: {
    *subject({}, {call, put}){
   
      let data = yield call(subject);
      yield put({
        type: 'subjects',
        payload: data.data
      })
   
     
    }
  },

  // 同步操作
  reducers: {
    subjects(state, action) {
      return { ...state, subjectList: action.payload };
    },
  },

};

