import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Form, Input, Select, InputNumber, DatePicker, Button } from 'antd';
import styles from './index.scss';

const { Option } = Select;

function Addexam(props) {
	useEffect(() => {
		//获取考试类型
		props.examType()
		//获取所有的课程
		props.subject()
	}, [])
	// console.log(props);
	// var startTime = ''
	// var endTime = ''
	const [startTime, setDate1] = useState('')//开始时间
	const [endTime, setDate2] = useState('')//结束时间
	const { getFieldDecorator } = props.form;

	function onChange1(value, dateString) {
		setDate1(Date.parse(dateString));
	}
	function onChange2(value, dateString) {
		setDate2(Date.parse(dateString));
	}
	let handleSubmit = e => {
		e.preventDefault();
		props.form.validateFields((err, values) => {
			if (!err) {
				let obj = {
					subject_id: values.subject,
					exam_id: values.exam_id,
					title: values.exam,
					number: values.num,
					start_time: startTime,
					end_time: endTime
				}
				//创建试卷
				props.createExam(obj);
				// console.log(props.createTestList)
				props.history.push({ pathname: '/addExams/addExamdetail' })
				// console.log(props)
			}
		});
	}
	return (
		<Form onSubmit={handleSubmit}>
			<h2 className={styles.nav}>添加考试</h2>
			<div className={styles.content}>
				<div className="ant-row ant-form-item">
					<div className="ant-form-item-label">
						<label title="请选择考试类型" className="ant-form-item-required">试卷名称</label>
					</div>
					{getFieldDecorator("exam", {
						rules: [{ required: true, message: "请输入试卷名称" }],
						initialValue: ""
					})(
						<Input
							type="text"
							placeholder=""
							className={styles.ins}
						/>
					)}
				</div>
				<div className="ant-row ant-form-item">
					<div className="ant-form-item-label">
						<label title="请选择考试类型" className="ant-form-item-required">选择考试类型</label>
					</div>
					{getFieldDecorator("exam_id", {
						rules: [{ required: true, message: "请选择考试类型" }],

					})(
						<Select initialValue="周考一" style={{ width: 120 }}>
							{
								props.examTypeList && props.examTypeList.map((item) => {
									return <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
								}
								)
							}
						</Select>
					)}
				</div>
				<div className="ant-row ant-form-item">
					<div className="ant-form-item-label">
						<label title="请选择考试类型" className="ant-form-item-required">选择课程</label>
					</div>
					{getFieldDecorator("subject", {
						rules: [{ required: true, message: "请选择课程" }],

					})(
						<Select initialValue="周考一" style={{ width: 120 }}>
							{props.subjectList.map(item => (
								<Option value={item.subject_id} key={item.subject_id}>
									{item.subject_text}
								</Option>
							))}
						</Select>
					)}
				</div>
				<div className="ant-row ant-form-item">
					<div className="ant-form-item-label">
						<label title="请选择考试类型" className="ant-form-item-required">设置体量</label>
					</div>
					{getFieldDecorator("num", {
						rules: [{ required: true, message: "题目类型必选" }],

					})(
						<InputNumber min={3} max={10} initialValue={3} />
					)}
				</div>
				<div className="ant-row ant-form-item">
					<div className="ant-form-item-label">
						<label title="请选择考试类型" className="ant-form-item">考试时间</label>
					</div>
					{getFieldDecorator("time", {
						rules: [{ required: true, message: "题目类型必选" }],

					})(
						<DatePicker showTime placeholder="Select Time" onChange={onChange1} />
					)}
					<span>-</span>
					{getFieldDecorator("time1", {
						rules: [{ required: true, message: "题目类型必选" }],

					})(
						<DatePicker showTime placeholder="Select Time" onChange={onChange2} />
					)}
				</div>
				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						className="login-form-button"
						style={{ width: "200px" }}
					>
						创建试卷
                     </Button>
				</Form.Item>
			</div>
		</Form>
	);
}

Addexam.propTypes = {
};
const mapStateToProps = state => {
	return { ...state.subject, ...state.examType, ...state.createExam }
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
		createExam: payload => {
			dispatch({
				type: 'createExam/createExam',
				payload
			})
		}
	}
}
export default connect(mapStateToProps, mapDispatchToPorps)(Form.create()(Addexam));