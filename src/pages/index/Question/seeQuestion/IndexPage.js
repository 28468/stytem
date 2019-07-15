import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Select, Radio,Spin } from 'antd';
import { Link } from "dva/router";
const { Option } = Select;

function onChange(e) {
	console.log(`radio checked:${e.target.value}`);
}
function IndexPage(props) {
	// console.log(props.examTypeList)
	useEffect(() => {
		props.subject()
		props.examType()
		props.getQuestions()
		props.find()
	}, []);

	const [data, setDate] = useState('')//考试类型
	const [data1, setDate1] = useState('')//题目类型

	function handleChange(value) {//考试类型
		setDate(value)
	}

	function handleChange1(value) {//题目类型
		setDate1(value)
	}
	var examType = ''
	var question = ''
	props.examTypeList.forEach((item) => {//考试类型
		if (item.exam_name == data) {
			examType = item.exam_id
		}
	})
	props.getQuestionsList.forEach((item) => {//题目类型
		if (item.questions_type_text == data1) {
			question = item.questions_type_id
		}
	})

	console.log(examType, question)
	function clcikFind() {
		if (examType == '') {
			props.find({ questions_type_id: question })
		}
	   if (question == '') {
			props.find({ exam_id: examType })
		}
		if (examType == '' && question == '') {
			props.find({})
		}
		else {
			props.find({ exam_id: examType, questions_type_id: question })
		}

	}
	function goDetail(item){
	 props.history.push({pathname:`/detail/${item.questions_id}`})
	}
	// console.log(props.questionList)
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
					</div>
				</div>
				<div className={styles.select}>
					<div>
						<p>考试类型</p>
						<div className={styles.selectType}>
							<Select defaultValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" style={{ width: 220 }} onChange={handleChange}>
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
							<Select defaultValue="" style={{ width: 220 }} onChange={handleChange1}>
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
					props.findList.length ? (
						props.findList.map((item, index) => {
							return 	<div  key={index} className={styles.box}>
								       <div  onClick={()=>goDetail(item)} >
											<p>{item.title}</p>
											<div>
												<span>{item.questions_type_text}</span>
												<span>{item.subject_text}</span>
												<span>{item.exam_name}</span>
											</div>
											<p className={styles.name}>{item.user_name}发布</p>										
									    </div>
									     <Link to={`/compile/${item.questions_id}`} className={styles.pos}>编辑</Link>
							       </div>

						})
					) : <div>没有数据</div>

				}
			</div>
			{props.global ? <div className={styles.loading}><Spin /></div> : null}
		</div>

	);
}

IndexPage.propTypes = {
};
const mapStateToProps = state => {
	return { ...state.subject, ...state.examType, ...state.getQuestions, ...state.question, ...state.find,global: state.loading.global }
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
