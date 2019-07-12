//获取所有的试题类型
import {question} from '../services/index'
export default {
  // 命名空间
  namespace: 'question',

  // 模块的状态
  state: {
    questionList:[]
  },

  // 异步操作
  effects: {
    *question({}, {call, put}){
   
      let data = yield call(question);
      yield put({
        type: 'questions',
        payload: data.data
      })
   
     
    }
  },

  // 同步操作
  reducers: {
    questions(state, action) {
      return { ...state, questionList: action.payload };
    },
  },

};

