import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Select, Radio } from 'antd';
import { Link } from "dva/router";
const { Option } = Select;
function handleChange(value) {
	var value1 = `selected ${value}`
}
function onChange(e) {
	console.log(`radio checked:${e.target.value}`);
}
function IndexPage(props) {
	console.log(props.examTypeList)
	useEffect(() => {
		props.subject()
		props.examType()
		props.getQuestions()
		props.question()

	}, []);
	function clcikFind() {
		props.find({ exam_id: "wbxm4-jf8q6k-lvt2ca-ze96mg" })

	}
	console.log(props.questionList)
	return (
		<div className={styles.wrap}>
			<div className={styles.top}>
				<h2>查看试题</h2>
			</div>
			<div className={styles.head}>
				<div className={styles.radio}>
					<p>课程类型</p>
					<div className={styles.subject}>
						<span>All</span>
						<Radio.Group onChange={onChange} defaultValue="a">
							{
								props.subjectList.map((item, index) => {
									return <Radio.Button value={item.subject_text} key={index} style={{ margin: ' 0 5px 5px 5px' }}>{item.subject_text}</Radio.Button>
								})
							}
						</Radio.Group>
						{/* {
                  props.subjectList.map((item, index) => {
                    return <span key={index} className={item.flag ? styles.active : ''} >{item.subject_text}</span>
                  })
                } */}
					</div>
				</div>
				<div className={styles.select}>
					<div>
						<p>考试类型</p>
						<div>
							<Select defaultValue="周考一 " style={{ width: 220 }} onChange={handleChange}>
								{
									props.examTypeList.map((item, index) => {
										return <Option value={item.exam_name} key={index}>{item.exam_name}</Option>
									})
								}
							</Select>
						</div>
					</div>
					<div>
						<p>题目类型</p>
						<div>
							<Select defaultValue="简单题" style={{ width: 220 }} onChange={handleChange}>
								{
									props.getQuestionsList.map((item, index) => {
										return <Option value={item.questions_type_text} key={index}>{item.questions_type_text}</Option>
									})
								}
							</Select>
						</div>
					</div>
					<div className={styles.find}>
						<p onClick={() => clcikFind()}>查询</p>
					</div>
				</div>
			</div>
			<div className={styles.content}>
			  {
				  props.findList.length?(
					props.findList.map((item, index) => {
						return <Link to={`/detail/${item.questions_id}`} key={index}>
							<div className={styles.box}  >
								<p>{item.title}</p>
								<div>
									<span>{item.questions_type_text}</span>
									<span>{item.subject_text}</span>
									<span>{item.exam_name}</span>
								</div>
								<p className={styles.name}>{item.user_name}发布</p>
								<p className={styles.pos}>编辑</p>
							</div>
						</Link>

					})
				  ):
					  props.questionList.map((item, index) => {
						return <Link to={`/detail/${item.questions_id}`} key={index}>
									<div className={styles.box}  >
										<p>{item.title}</p>
										<div>
											<span>{item.questions_type_text}</span>
											<span>{item.subject_text}</span>
											<span>{item.exam_name}</span>
										</div>
										<p className={styles.name}>{item.user_name}发布</p>
										<p className={styles.pos}>编辑</p>
									</div>
					           </Link>

			         	}
				)
			  }
			</div>
		</div>

	);
}

IndexPage.propTypes = {
};
const mapStateToProps = state => {
	return { ...state.subject, ...state.examType, ...state.getQuestions, ...state.question, ...state.find }
}
const mapDispatchToPorps = dispatch => {
	return {
		subject: payload => {
			dispatch({
				type: 'subject/subject',
				payload
			})
		},
		examType: payload => {
			dispatch({
				type: 'examType/examType',
				payload
			})
		},
		getQuestions: payload => {
			dispatch({
				type: 'getQuestions/getQuestions',
				payload
			})
		},
		question: payload => {
			dispatch({
				type: 'question/question',
				payload
			})
		},
		find: payload => {
			dispatch({
				type: 'find/find',
				payload
			})
		}
	}
}
export default connect(mapStateToProps, mapDispatchToPorps)(IndexPage);
