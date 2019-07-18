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
					<h2>班级管理</h2>
				</div>
				<div className={styles.content}>
					<div className={styles.btn} onClick={this.showModal}><p>+ 添加班级</p></div>
					<ul className={styles.uls}>
						<li className={styles.title}> <span>班级名</span> <span>课程名</span> <span>教师号</span><span>操作</span> </li>
						{
							this.props.classList.map((item, index) => {
								return <li key={index}className={styles.lis} >
                       <span>{item.grade_name}</span> <span>{item.subject_text}</span><span>{item.room_text}</span>
                       <p><span>修改</span>|<span onClick={()=>this.del(item.grade_id)}>删除</span></p>
                       </li>
							})
						}

					</ul>
				</div>
				<div>

					{/* <Modal
						title="创建新类型"
						visible={this.state.visible}
						onOk={this.handleOk}
						onCancel={this.handleCancel}
					>
						<Input placeholder="请输入班级名称" value={this.state.value} onChange={this.changeValue.bind(this)} />
					</Modal> */}
          <Modal
                  	visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    cancelText="取消"
                    okText="提交"
                    title="添加班级"
                >
                    <Form.Item label="班级名">
                        {getFieldDecorator('grade_name', {
                            rules: [{ required: true, message: '请输入班级名' }],
                        })(<Input placeholder="班级名" />)}
                    </Form.Item>
                    <Form.Item label="教室号">
                        {getFieldDecorator('room_text', {
                            rules: [{required: true, message: '请输入教室号' }],
                        })
                            (<Select style={{width:470}}>
                                {
                                   	this.props.classAllList && 	this.props.classAllList.map(item => {
                                        return <Option key={item.room_id} value={item.room_id}>{item.room_text}</Option>
                                    })
                                }
                            </Select>)}
                    </Form.Item>
                    <Form.Item label="课程名">
                        {getFieldDecorator('subject_text', {
                            rules: [{ required: true, message: '请输入课程名' }],
                        })(<Select style={{ width:470}}>
                            {
                                this.props.subjectList && this.props.subjectList.map((item, index) => {
                                    return <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
                                })
                            }
                        </Select>)}
                    </Form.Item>
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
   this.props.form.validateFields((err, values) => {
    e.preventDefault();
			if (!err) {
     console.log(values)
     let obj = {
      grade_name:values.grade_name,
      room_id:values.room_text,
      subject_id:values.subject_text
     }
     this.props.classAdd(obj)
     
    //  this.props.classupdata(
    //    {
    //     grade_id:this.props.classAddCode.grade_id,
    //     grade_name:values.grade_name,
    //     room_id:values.room_text,
    //     subject_id:values.subject_text
    //    }
    //  )
  
     }
        
		});
	};
  del = (id) =>{
   this.props.classDel({grade_id:id})
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
    this.props.subject()
  
  }
  // componentDidUpdate(){
  //   console.log(this.props.classAddCode)
  // }
 
//   componentWillReceiveProps(nextProps){
//     if (this.props.newprops.classAddCode!== nextProps.classAddCode){
//       //在这里我们仍可以通过this.props来获取旧的外部状态
//       //通过新旧状态的对比，来决定是否进行其他方法
//       if (nextProps.classAddCode){
//         this.props.classGet()
//       }
//     // console.log(newprops.classAddCode,"--=-")

//   }

// }

}
const mapStateToProps = state => {
	return { ...state.class,...state.subject }
}
const mapDispatchToPorps = dispatch => {
	return {
		classGet: payload => {
			dispatch({
				type: 'class/classGet',
				payload
			})
    },
    classAll: payload => {
			dispatch({
				type: 'class/classAll',
				payload
			})
    },
    subject: payload => {
			dispatch({
				type: 'subject/subject',
				payload
			})
    },
    classAdd: payload => {
			dispatch({
				type: 'class/classAdd',
				payload
			})
    },
    classDel: payload => {
			dispatch({
				type: 'class/classDel',
				payload
			})
    },
    classupdata: payload => {
			dispatch({
				type: 'class/classupdata',
				payload
			})
    },

	}
}
export default connect(mapStateToProps, mapDispatchToPorps)(Form.create()(IndexPage));




