import { createExam, delTestList,getTestList,update,getQuestion } from '../services';

export default {
    // 命名空间
    namespace: 'createExam',

    // 模块内部的状态
    state: {
        createTestList: [],  //添加试卷
        testList:[],
        del:0,
        updateCode:0,
        examDetailList:[]
    },

    subscriptions: {
    },

    // 异步操作
    effects: {
        //添加试卷
        *createExam({ payload }, { call, put }) {
            console.log(payload);
            let data = yield call(createExam, payload);
            console.log('add...', data);
            yield put({
                type: 'createTests',
                payload: data.data
            })
        },
        //删除试卷
        *delTestList({ payload }, { call, put }) {
            let data = yield call(delTestList, payload);
            console.log('del', data);
            yield put({
                type: 'delTests',
                payload: data.code === 1 ? 1 : -1
            })
        },
         //获取试卷列表
         *getTestList({ payload }, { call, put }) {
            let data = yield call(getTestList,payload);
            console.log('list..', data);
            yield put({
                type: 'getTest',
                payload: data.exam
            })
        },
        //更新
        *update({ payload }, { call, put }) {
            let data = yield call(update, payload);
            console.log('del', data);
            yield put({
                type: 'updates',
                payload: data.code === 1 ? 1 : -1
            })
        },
         //获取试卷详情（教师端）
         *getQuestion({ payload }, { call, put }) {
            let data = yield call(getQuestion, payload);
            console.log('detail...', data);
            yield put({
                type: 'examDetail',
                payload: data.data
            })
        },

    },

    // 同步操作
    reducers: {
        createTests(state, action) {
            return { ...state, createTestList: action.payload };
        },
        updates(state, action) {
            return { ...state, updateCode: action.payload };
        },
        delTests(state, action) {
            return { ...state, del: action.payload };
          },
          getTest(state, action ) {
              console.log(action.payload)
            return {
                ...state,
                testList: action.payload
            }
        },
        
        examDetail(state,  action ) {
            return {
                ...state,
                examDetailList: action.payload
            }
        }
    }
};
