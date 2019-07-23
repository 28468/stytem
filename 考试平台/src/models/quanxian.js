//获取所有的试题类型
import {quanxian} from '../services/index'
import allAuthority from '../routes/router.config'
export default {
  // 命名空间
  namespace: 'quanxian',

  // 模块的状态
  state: {
    myView: [],
    forbiddenView: []
  },

  // 异步操作
  effects: {
    *quanxian({payload}, {call, put}){
      let data = yield call(quanxian,payload);
      yield put({
        type: 'quanxians',
        payload: data.data
      })
    }
  },

  // 同步操作
  reducers: {
    quanxians(state, action){
      // 筛选出我拥有的路由
    let myView = [], forbiddenView = [];
    
    allAuthority.forEach(item=>{
      let obj = {
        children: []
      }
  
      if( item.children){
        item.children.forEach((value)=>{
          if (action.payload.findIndex(item=>item.view_id === value.view_id) !== -1){
            obj.children.push(value);
          }else{
            forbiddenView.push(value);
          }
        })
      }
      
      myView.push(obj)
    })

    return {...state, myView, forbiddenView}
    }
  },

};






