import {find} from '../services/index'

export default {
  // 命名空间
  namespace: 'find',

  // 模块的状态
  state: {
    isLogin: false
  },

  // 异步操作
  effects: {
    *find({ payload, type }, {call, put}){
      console.log('payload...', payload, type)
     
    }
  },

  // 同步操作
  reducers: {
    updateLogin(state, action) {
      return { ...state, isLogin: action.payload };
    },
  },

};