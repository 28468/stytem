import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Input, Form, Select, Modal } from 'antd';
import Editor from 'for-editor';
const { confirm } = Modal;
const { Option } = Select;

function IndexPage(props) {
	useEffect(() => {
		props.subject()
		props.examType()
		props.getQuestions()
	}, []);
	function submit() {
		confirm({
			title: "你要添加吗?",
			content: "您确定要添加吗",
			okText: "确定",
			cancelText: "取消",
			onOk() {

				props.form.validateFields((err, values) => {
					if (!err) {
						props.addQuestion({
							questions_type_id: topic, questions_stem: values.content,
							subject_id: question,
							exam_id: examType,
							user_id: "axg8t2-oroeja",
							questions_answer: values.result,
							title: values.title
						})
					}
				});

			},
			onCancel() {
			}
		});
	}
	const { getFieldDecorator } = props.form;
	const [data1, setDate1] = useState('')//考试类型
	const [data2, setDate2] = useState('')//课程类型
	const [data3, setDate3] = useState('')//题目类型
	function handleChange(value) {//考试类型
		setDate1(value)
	}
	function handleChange1(value) {//课程类型
		setDate2(value)
	}
	function handleChange2(value) {//题目类型
		setDate3(value)
	}
	var examType = ''
	var question = ''
	var topic = ''
	props.examTypeList.forEach((item) => {//考试类型
		if (item.exam_name === data1) {
			examType = item.exam_id
		}
	})
	props.subjectList.forEach((item) => {//课程类型
		if (item.subject_text === data2) {
			question = item.subject_id
		}
	})
	props.getQuestionsList.forEach((item) => {//课程类型
		if (item.questions_type_text === data3) {
			topic = item.questions_type_id
		}
	})
	return (
		<div className={styles.wrap}>
			<Form>
				<div className={styles.top}>
					<h2>添加试题</h2>
				</div>
				<div className={styles.content}>
					<div className={styles.pading_show}>
						<div className={styles.topTitle}>
							<p>题目信息</p>
							<p>题干</p>
							<Form.Item>
								{getFieldDecorator("title", {
									rules: [
										{ required: true, message: "Please input your username!" },
										{ min: 4, max: 15, message: "Please input your correct username!" },
									]
								})(
									<Input
										className={styles.inputs}
										size="large"
										placeholder="请输入题目标题,不超过20个字"
									/>
								)}
							</Form.Item>
						</div>
						<Form.Item label="题目主体">
							{getFieldDecorator("content", {})(
								<Editor placeholder="请输入内容" height="auto" />
							)}
						</Form.Item>
						<div className={styles.select}>
							<p>请选择考试类型:</p>
							<Select defaultValue="周考一" style={{ width: 200 }} onChange={handleChange}>
								{
									props.examTypeList.map((item, index) => {
										return <Option value={item.exam_name} key={index}>{item.exam_name}</Option>
									})
								}
							</Select>
						</div>
						<div className={styles.select}>
							<p>请选择课程类型:</p>
							<Select defaultValue="JavaScript上" style={{ width: 200 }} onChange={handleChange1}>
								{
									props.subjectList.map((item, index) => {
										return <Option value={item.subject_text} key={index}>{item.subject_text}</Option>
									})
								}
							</Select>
						</div>
						<div className={styles.select}>
							<p>请选择题目类型:</p>
							<Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange2}>
								{
									props.getQuestionsList.map((item, index) => {
										return <Option value={item.questions_type_text} key={index}>{item.questions_type_text}</Option>
									})
								}

							</Select>
						</div>
						<Form.Item label="答案信息">
							{getFieldDecorator("result", {})(
								<Editor placeholder="请输入内容" height="auto" />
							)}
						</Form.Item>
						<button className={styles.button} onClick={() => submit()}>
							提交
                        </button>
					</div>
				</div>
			</Form>
		</div>
	);
}

IndexPage.propTypes = {
};
const mapStateToProps = state => {
	return { ...state.subject, ...state.examType, ...state.getQuestions, ...state.addQuestion }
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
		}
		,
		addQuestion: payload => {
			dispatch({
				type: 'addQuestion/addQuestion',
				payload
			})

		}
	}
}
export default connect(mapStateToProps, mapDispatchToPorps)(Form.create()(IndexPage));