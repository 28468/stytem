import request from '../utils/request';
// 添加试卷
export function createExam(params) {
    return request({
        url: '/exam/exam',
        method: 'POST',
        data: params
    })
}
//删除试卷
export function delTestList(params) {

    return request({
        url: `/exam/exam/${params}`,
        method: 'DELETE'
    }) 
}
//获取试卷列表
export function getTestList() {
    return request({
        url: '/exam/exam',
        method: 'GET'
    })
}
//更新
export function update(params) {
    console.log(params)
    return request({//
        url: `/exam/exam/${params}?question_ids=${params.question_ids}`,
        method: 'PUT',

    })
}

    // //获取试卷详情（教师端）
    export function getQuestion(params) {
        return request({
            url: `/exam/exam/${params}`,
            method: 'GET',
            // params
        })
    }
