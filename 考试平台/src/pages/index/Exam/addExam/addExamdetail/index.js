import React from 'react';
import { connect } from 'dva';
import { Link } from "dva/router";
import { Modal,message } from 'antd';
import styles from './index.css';
const { confirm } = Modal;
function IndexPage(props) {

	let exam_exam_id = props.createTestList.exam_exam_id
	console.log(exam_exam_id)
	function del(id) {
		confirm({
			title: "你要删除吗?",
			content: "您确定要删除吗",
			okText: "确定",
			cancelText: "取消",
			onOk() {
		   //删除试卷
		   props.delTestList(id);
		   if(props.del===1){
			message.success('删除成功');
		   }else{
			message.error('删除失败');
		   }
			},
			onCancel() {
			}
		});
	}
	function updataList(){
		// console.log(exam_exam_id)
		// props.update({question_ids:exam_exam_id})
	}

	return (
		<div className={styles.normal}>
			<div className={styles.head}>
				<h2>创建试卷</h2>
				<div className={styles.content}>
					<h3>{props.createTestList.title}</h3>
							{
								props.createTestList.questions ? (
									props.createTestList.questions.map((item, index) => {
										return <div className={styles.item} key={index}>
													<div className={styles.itemTop}>
													<p>{item.title}</p>
													<p className={styles.del} onClick={() => del(item.questions_id)}>删除</p>
													</div>
													<span>{item.questions_stem}</span>
									        	</div>

									})
								  ) : <div className={styles.no}>没有数据</div>

							}				
				</div>
				<Link to='/examList'>
				<div className={styles.btn } onClick={()=>updataList()}>创建试卷</div>
				</Link>
			
			</div>
		</div>
	);
}

IndexPage.propTypes = {
};
const mapStateToProps = state => {
	return { ...state.createExam ,...state.createExam}
}
const mapDispatchToPorps = dispatch => {
	return {
		createExam: payload => {
			dispatch({
				type: 'createExam/createExam',
				payload
			})
		},
		delTestList(payload) {
            console.log(payload)
            dispatch({
                type: 'createExam/delTestList',
                payload
            })
		},
		update(payload) {
            console.log(payload)
            dispatch({
                type: 'createExam/update',
                payload
            })
        },
	}
}
export default connect(mapStateToProps, mapDispatchToPorps)(IndexPage);