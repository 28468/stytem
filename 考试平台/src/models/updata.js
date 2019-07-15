//获取所有的课程
import {updata} from '../services/index'
export default {
  // 命名空间
  namespace: 'updata',

  // 模块的状态
  state: {
    updataList:[]
  },

  // 异步操作
  effects: {
    *updata({ payload }, {call, put}){
    console.log(payload)
      let data = yield call(updata,payload);
      console.log(data)
      yield put({
        type: 'updatas',
        payload: data.code==1?1:-1
      })
    }
  },

  // 同步操作
  reducers: {
    updatas(state, action) {
      return { ...state, updataList: action.payload };
    },
  },

};

