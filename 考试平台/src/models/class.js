//获取所有的课程
import {classGet,classAll,classAdd,classDel,classupdata} from '../services/index'
import { message } from 'antd';
export default {
  // 命名空间
  namespace: 'class',

  // 模块的状态
  state: {
    classList:[],
    classAllList:[],
    classAddCode:{},
  },
  // 异步操作
  effects: {
    *classGet({payload}, {call, put}){
      let data = yield call(classGet,payload);
      yield put({
        type: 'classGets',
        payload: data.data
      })
    },
    *classAll({payload}, {call, put}){
        let data = yield call(classAll,payload);
        yield put({
          type: 'classAlls',
          payload: data.data
        })
      },
      *classAdd({payload}, {call, put}){
        let data = yield call(classAdd,payload);
        data.code===1? message.success(data.msg):message.error(data.msg)
        yield put({
          type: 'classAdds',
          payload: data
        })
      },
      *classDel({payload}, {call, put}){
        let data = yield call(classDel,payload);
        data.code===1? message.success(data.msg):message.error(data.msg)
        // yield put({
        //   type: 'classDels',
        //   payload: data.code===1?1:-1
        // })
      },
      *classupdata({payload}, {call, put}){
        let data = yield call(classAdd,payload);
        yield put({
          type: 'classupdatas',
          payload: data
        })
      },
  },

  // 同步操作
  reducers: {
    classGets(state, action) {
      return { ...state, classList: action.payload };
    },
    classAlls(state, action) {
        return { ...state, classAllList: action.payload };
      },
      classAdds(state, action) {
        return { ...state, classAddCode: action.payload };
      },
      classupdatas(state, action) {
        console.log(action.payload)
      return { ...state, classupdataCode: action.payload };
    },

},

};

