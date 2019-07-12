//获取所有的试题类型
import {addQuestion} from '../services/index'
export default {
  // 命名空间
  namespace: 'addQuestion',

  // 模块的状态
  state: {
    addQuestionList:[]
  },

  // 异步操作
  effects: {
    *addQuestion({ payload}, {call, put}){
         let data = yield call(addQuestion, payload);
          console.log(data)
   yield put({
        type: 'addQuestions',
        payload: data.data
      })
    }
  },

  // 同步操作
  reducers: {
    addQuestions(state, action) {
      return { ...state, addTypeList: action.payload };
    },
  },

};

