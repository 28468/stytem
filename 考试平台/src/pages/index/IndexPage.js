import React from "react";
import { connect } from "dva";
import "./IndexPage.scss";
import { NavLink } from "dva/router";
import {MapRoute} from '../../routes'
import { Layout, Menu, Icon } from "antd";

import {injectIntl} from 'react-intl';

const { Content,  Sider } = Layout;
const { SubMenu } = Menu;
function IndexPage(props) {
  return (
    <div>
      <div className="icon">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg"
          alt=""
        />
      
         <button className='btnLang' onClick={()=>props.changeLocale(props.intl.locale==='en'?'zh':'en')}>{props.intl.locale==='en'?'英文':'中文'}</button>
    
      </div>
      <Layout style={{ minHeight: "90vh" }}>
        <Sider className='left'>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>{props.intl.formatMessage({id: 'router.questions'})}</span>
                </span>
              }
            >
              <Menu.Item key="1">
                <NavLink to="/addQuestion">{props.intl.formatMessage({id:'router.questions.add'})}</NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/questionClass">{props.intl.formatMessage({id:'router.questions.view'})}</NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to="/lookQuestion">{props.intl.formatMessage({id:'router.questions.type'})}</NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="user" />
                  <span>{props.intl.formatMessage({id:'router.user'})}</span>
                </span>
              }
            >
              <Menu.Item key="4">
                <NavLink to="/addUser">{props.intl.formatMessage({id:'router.user.add'})}</NavLink>
              </Menu.Item>
              <Menu.Item key="5">
                <NavLink to="/userShow">{props.intl.formatMessage({id:'router.user.show'})}</NavLink>
              </Menu.Item>
            
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="user" />
                  <span>{props.intl.formatMessage({id:'router.exam'})}</span>
                </span>
              }
            >
              <Menu.Item key="7">
                <NavLink to="/addExam">{props.intl.formatMessage({id:'router.exam.add'})}</NavLink>
              </Menu.Item>
              <Menu.Item key="8">
                <NavLink to="/examList">{props.intl.formatMessage({id:'router.exam.list'})}</NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="team" />
                  <span>{props.intl.formatMessage({id:'router.class'})}</span>
                </span>
              }
            >
              <Menu.Item key="9">
                <NavLink to="/class">{props.intl.formatMessage({id:'router.class'})}</NavLink>
              </Menu.Item>
              <Menu.Item key="10">
                <NavLink to="/classroom">{props.intl.formatMessage({id:'router.class.room'})}</NavLink>
              </Menu.Item>
              <Menu.Item key="11">
                <NavLink to="/students">{props.intl.formatMessage({id:'router.class.student'})}</NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub5"
              title={
                <span>
                  <Icon type="user" />
                  <span>{props.intl.formatMessage({id:'router.paper'})}</span>
                </span>
              }
            >
              <Menu.Item key="12">
                <NavLink to="/waitClass">{props.intl.formatMessage({id:'router.paper.waitClass'})}</NavLink>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className='right'> 
          <Content style={{ margin: "0 16px" }}>
               <MapRoute route={props.route}></MapRoute>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

IndexPage.propTypes = {};

const mapDispatchToProps = dispatch=>{
  return {
    changeLocale: payload=>{
      dispatch({
        type: 'global/updateLocale',
        payload
      })
    }
  }
}
// export default connect()(IndexPage);
export default injectIntl(connect(null, mapDispatchToProps)(IndexPage));