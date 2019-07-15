import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Modal, Input, Spin } from 'antd';

class IndexPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			value: ''
		};
	}
	render() {
		console.log(this.props)
		return (
			<div className={styles.wrap}>
				<div className={styles.top}>
					<h2>试题分类</h2>
				</div>
				<div className={styles.content}>
					<div className={styles.btn} onClick={this.showModal}><p>+ 添加类型</p></div>
					<ul className={styles.uls}>
						<li className={styles.title}> <span>类型</span> <span>类型名称</span> <span>操作</span> </li>
						{
							this.props.getQuestionsList.map((item, index) => {
								return <li key={index}><span>{item.questions_type_id}</span> <span>{item.questions_type_text}</span> <span></span> </li>
							})
						}

					</ul>
				</div>
				<div>

					<Modal
						title="创建新类型"
						visible={this.state.visible}
						onOk={this.handleOk}
						onCancel={this.handleCancel}
					>
						<Input placeholder="请输入类型名称" value={this.state.value} onChange={this.changeValue.bind(this)} />
					</Modal>
				</div>
				{this.props.global ? <div className={styles.loading}><Spin /></div> : null}
			</div>
		);
	}

	showModal = () => {
		this.setState({
			visible: true,
		});
	};

	handleOk = e => {
		this.setState({
			visible: false,
		});
		this.props.getQuestions()
		this.props.addType({ text: this.state.value, sort: (this.props.getQuestionsList.length + 1).toString() })
	
	};

	handleCancel = e => {
		this.setState({
			visible: false,
		});
	};
	changeValue(e) {
		this.setState({
			value: e.target.value
		})
	}
	componentDidMount() {
		this.props.getQuestions()
		console.log(this.props)

	}

}
const mapStateToProps = state => {
	return { ...state.getQuestions, ...state.addType, global: state.loading.global }
}
const mapDispatchToPorps = dispatch => {
	return {
		getQuestions: payload => {
			dispatch({
				type: 'getQuestions/getQuestions',
				payload
			})
		},
		addType: payload => {
			dispatch({
				type: 'addType/addType',
				payload
			})
		},

	}
}
export default connect(mapStateToProps, mapDispatchToPorps)(IndexPage);




