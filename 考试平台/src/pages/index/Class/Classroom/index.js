import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './index.css';
import { Modal, Input, Spin,Form,  Select,message } from 'antd';

class IndexPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			value: ''
		};
	}
	render() {
    const { getFieldDecorator } = this.props.form;
    const { Option } = Select;
		return (
			<div className={styles.wrap}>
				<div className={styles.top}>
					<h2>教室管理</h2>
				</div>
				<div className={styles.content}>
					<div className={styles.btn} onClick={this.showModal}><p>+ 添加班级</p></div>
					<ul className={styles.uls}>
						<li className={styles.title}>  <span>教师号</span><span>操作</span> </li>
						{
							this.props.classList.map((item, index) => {
								return <li key={index}className={styles.lis} >
                       <span>{item.room_text}</span>
                       <p><span></span><span onClick={()=>this.del(item.grade_id)}>删除</span></p>
                       </li>
							})
						}

					</ul>
				</div>
				<div>

          <Modal
                  	visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    cancelText="取消"
                    okText="提交"
                    title="添加班级"
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
    console.log(this.state.value)

	};
  del = (id) =>{
   
  }
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
    this.props.classGet()
    this.props.classAll()
  }
  
}
const mapStateToProps = state => {
	return { ...state.classs,...state.subject }
}
const mapDispatchToPorps = dispatch => {
	return {
		classGet: payload => {
			dispatch({
				type: 'classs/classGet',
				payload
			})
    },
    classAll: payload => {
			dispatch({
				type: 'classs/classAll',
				payload
			})
    }
   

	}
}
export default connect(mapStateToProps, mapDispatchToPorps)(Form.create()(IndexPage));




