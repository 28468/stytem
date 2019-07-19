import React, { Component } from "react";
import { connect } from "dva";
import "./IndexPage.scss";
import { NavLink } from "dva/router";
import { MapRoute } from '../../routes'
import { Layout, Menu, Icon,Modal } from "antd";
import axios from 'axios'
import { injectIntl } from 'react-intl';
import { removeToken } from '../../utils/index';
const { Content, Sider } = Layout;
const { SubMenu } = Menu;
const { confirm } = Modal;

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
      collapsed: false,
      visible: false,
      avatar:''
    };
  }
  handleCancel = e => {
    this.setState({
      visible: false
    })
  };
  handleOk = e => {
    this.setState({
      visible: false
    })
  };
  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  Headmodal = () => {
    this.setState({
      visible: true
    })
  } 
  handChange = (e) => {
    let form = new FormData();
    form.append(e.target.files[0].name,e.target.files[0]);
    axios.post('http://123.206.55.50:11000/upload',form).then((res)=>{
    this.props.userUpdata({user_id:this.props.userInfo.user_id,avatar:res.data.data[0].path})
    })
  }
  exitLogin=()=>{
    let that=this;
     confirm({
      title: '您确定要退出吗？',
      onOk() {
        removeToken();
        that.props.history.push('/');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  render() {
   
    return (
      <div>
        <div className="icon">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg"
            alt=""
            className='img'
          />
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className='menu'>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  <img   src={this.props.userInfo.avatar} className='imgs' />
                  chenmanjie
            </span>
              }
            >
              <Menu.Item key="setting:1">个人中心</Menu.Item>
              <Menu.Item key="setting:2" className='btnLang' 
               onClick={() => this.props.changeLocale(this.props.intl.locale === 'en' ? 'zh' : 'en')}>
                {this.props.intl.locale === 'en' ? '英文' : '中文'}</Menu.Item>
              <Menu.Item key="setting:3" onClick={() => this.Headmodal()}>图片上传</Menu.Item>
              <Menu.Item key="setting:4" onClick={()=>this.exitLogin()}>退出登录</Menu.Item>

            </SubMenu>
      
          </Menu>
         </div>
         <Modal
            title="图片上传"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <div>
              <input type="file" id="uploadFile" onChange={(event) => this.handChange(event)} className="clip" accept="image/*"></input>
            </div>
          </Modal>
        <Layout style={{ minHeight: "90vh" }}>
          <Sider className='left'>
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>{this.props.intl.formatMessage({ id: 'router.questions' })}</span>
                  </span>
                }
              >
                <Menu.Item key="1">
                  <NavLink to="/addQuestion">{this.props.intl.formatMessage({ id: 'router.questions.add' })}</NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                  <NavLink to="/questionClass">{this.props.intl.formatMessage({ id: 'router.questions.view' })}</NavLink>
                </Menu.Item>
                <Menu.Item key="3">
                  <NavLink to="/lookQuestion">{this.props.intl.formatMessage({ id: 'router.questions.type' })}</NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="user" />
                    <span>{this.props.intl.formatMessage({ id: 'router.user' })}</span>
                  </span>
                }
              >
                <Menu.Item key="4">
                  <NavLink to="/addUser">{this.props.intl.formatMessage({ id: 'router.user.add' })}</NavLink>
                </Menu.Item>
                <Menu.Item key="5">
                  <NavLink to="/userShow">{this.props.intl.formatMessage({ id: 'router.user.show' })}</NavLink>
                </Menu.Item>

              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="user" />
                    <span>{this.props.intl.formatMessage({ id: 'router.exam' })}</span>
                  </span>
                }
              >
                <Menu.Item key="7">
                  <NavLink to="/addExam">{this.props.intl.formatMessage({ id: 'router.exam.add' })}</NavLink>
                </Menu.Item>
                <Menu.Item key="8">
                  <NavLink to="/examList">{this.props.intl.formatMessage({ id: 'router.exam.list' })}</NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="team" />
                    <span>{this.props.intl.formatMessage({ id: 'router.class' })}</span>
                  </span>
                }
              >
                <Menu.Item key="9">
                  <NavLink to="/class">{this.props.intl.formatMessage({ id: 'router.class' })}</NavLink>
                </Menu.Item>
                <Menu.Item key="10">
                  <NavLink to="/classroom">{this.props.intl.formatMessage({ id: 'router.class.room' })}</NavLink>
                </Menu.Item>
                <Menu.Item key="11">
                  <NavLink to="/students">{this.props.intl.formatMessage({ id: 'router.class.student' })}</NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub5"
                title={
                  <span>
                    <Icon type="user" />
                    <span>{this.props.intl.formatMessage({ id: 'router.paper' })}</span>
                  </span>
                }
              >
                <Menu.Item key="12">
                  <NavLink to="/waitClass">{this.props.intl.formatMessage({ id: 'router.paper.waitClass' })}</NavLink>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout className='right'>
            <Content style={{ margin: "0 16px" }}>
              <MapRoute route={this.props.route}></MapRoute>
            </Content>
          </Layout>
        </Layout>
    </div>
    );
  }

 
}

IndexPage.propTypes = {};
const mapStateToProps = state => {
	return { ...state.login }
}
const mapDispatchToProps = dispatch => {
  return {
    changeLocale: payload => {
      dispatch({
        type: 'global/updateLocale',
        payload
      })
    },
    userUpdata: payload => {
			dispatch({
				type: 'login/userUpdata',
				payload
			})
    },
  }
}
export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(IndexPage));