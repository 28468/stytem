//获取所有的试题类型
import {getQuestionsType} from '../services/index'
export default {
  // 命名空间
  namespace: 'getQuestions',

  // 模块的状态
  state: {
    getQuestionsList:[]
  },

  // 异步操作
  effects: {
    *getQuestions({}, {call, put}){
      let data = yield call(getQuestionsType);
      yield put({
        type: 'getQuestion',
        payload: data.data
      })
   
     
    }
  },

  // 同步操作
  reducers: {
    getQuestion(state, action) {
      return { ...state, getQuestionsList: action.payload };
    },
  },

};

