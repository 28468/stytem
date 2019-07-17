import { getUserData, getUseridentity, getApiauthority, getIdApi, getViewAuthority, getIdview,getIdentityView } from '../services';

export default {
  // 命名空间
  namespace: 'userData',

  // 模块内部的状态
  state: {
    userdataList: [],
    UserGetList:[],
    userIdentityList: [],
    apiauthorityList: [],
    idApiList: [],
    viewAuthorityList: [],
    idviewList: [],
    getIdentityViews:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  // 异步操作
  effects: {
    // 用户数据
    *getUserDatas({ payload }, { call, put }) {
      let data = yield call(getUserData);
      // console.log(data.data);
      yield put({
        type: 'userdata',
        payload: data.data
      })
    },
    //身份数据
    *getUsera({ payload }, { call, put }) {
      let data = yield call(getUseridentity);
       //console.log(data);
      yield put({
        type: 'useridentity',
        payload: data.data
      })
    },
    //api接口权限
    *getapis({ payload }, { call, put }) {
      let data = yield call(getApiauthority);
      //console.log(data);
      yield put({
        type: 'apiauthority',
        payload: data.data
      })
    },
    //身份和api接口权限
    *Addedit({ payload }, { call, put }) {
      let data = yield call(getIdApi);
       /*  console.log(data);  */
      yield put({
        type: 'idApi',
        payload: data.data
      })
    },
    //s视图接口权限
    *userauthority({ payload }, { call, put }) {
      let data = yield call(getViewAuthority);
       /*  console.log(data);  */
      yield put({
        type: 'viewAuthority',
        payload: data.data
      })
    },
    *userelation({ payload }, { call, put }) {
     /*  console.log(data);  */
      let data = yield call(getIdview);
      yield put({
        type: 'idview',
        payload: data.data
      })
    },
    //身份和视图权限关系
    *getIdentityViewy({ payload }, { call, put }) {
      let data = yield call(getIdentityView);
      /* console.log(data);  */
      yield put({
        type: 'getView',
        payload: data.data
      })
    }
  },
  

  // 同步操作
  reducers: {
    userdata(state, { payload }) {
      return {
        ...state,
        userdataList: payload
      }
    },
    useridentity(state, { payload }) {
      return {
        ...state,
        userIdentityList: payload
      }
     
    },
    apiauthority(state, { payload }) {
      return {
        ...state,
        apiauthorityList: payload
      }
    },
    idApi(state, { payload }) {
      return {
        ...state,
        idApiList: payload
      }
    },
    viewAuthority(state, { payload }) {
      return {
        ...state,
        viewAuthorityList: payload
      }
    },
    idview(state, { payload }) {
      return {
        ...state,
        idviewList: payload
      }
    },
    getView(state, { payload }) {
      return {
        ...state,
        getIdentityViews: payload
      }
    }
  }
};
