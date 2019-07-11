import React from "react";
import { connect } from "dva";
import styles from "./IndexPage.scss";
import { Switch, Route, NavLink } from "dva/router";
import AddPage from "./Question/addQuestion/IndexPage";
import ClassPage from "./Question/classQuestion/IndexPage";
import SeePage from "./Question/seeQuestion/IndexPage";
import AddUser from './User/addUser'
import UserShow from './User/userShow'
import AddExam from './Exam/addExam'
import ExamList from './Exam/ExamList'
import Class from './Class/Class'
import Classroom from './Class/Classroom'
import Students from './Class/Students'
import WaitClass from './Read/waitClass'

import { Layout, Menu, Icon } from "antd";
const { Header, Content,  Sider } = Layout;
const { SubMenu } = Menu;

function IndexPage() {
  return (
    <div>
      <div className="icon">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg"
          alt=""
        />
      </div>
      <Layout style={{ minHeight: "90vh" }}>
        <Sider>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>试题管理</span>
                </span>
              }
            >
              <Menu.Item key="1">
                <NavLink to="/addQuestion">添加试题</NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/questionClass">试题分类</NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to="/lookQuestion">查看试题</NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="user" />
                  <span>用户管理</span>
                </span>
              }
            >
              <Menu.Item key="4">
                <NavLink to="/addUser">添加用户</NavLink>
              </Menu.Item>
              <Menu.Item key="5">
                <NavLink to="/userShow">用户展示</NavLink>
              </Menu.Item>
            
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="user" />
                  <span>考试管理</span>
                </span>
              }
            >
              <Menu.Item key="7">
                <NavLink to="/addExam">添加考试</NavLink>
              </Menu.Item>
              <Menu.Item key="8">
                <NavLink to="/examList">试卷列表</NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="team" />
                  <span>班级管理</span>
                </span>
              }
            >
              <Menu.Item key="9">
                <NavLink to="/class">班级管理</NavLink>
              </Menu.Item>
              <Menu.Item key="10">
                <NavLink to="/classroom">教室管理</NavLink>
              </Menu.Item>
              <Menu.Item key="11">
                <NavLink to="/students">学生管理</NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub5"
              title={
                <span>
                  <Icon type="user" />
                  <span>阅卷管理</span>
                </span>
              }
            >
              <Menu.Item key="12">
                <NavLink to="/waitClass">待批班级</NavLink>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: "0 16px" }}>
              <Switch>
                <Route path="/addQuestion" component={AddPage} />
                <Route path="/questionClass" component={ClassPage} />
                <Route path="/lookQuestion" component={SeePage} />
                <Route path="/addUser" component={AddUser} />
                <Route path="/userShow" component={UserShow} />
                <Route path="/addExam" component={AddExam} />
                <Route path="/examList" component={ExamList} />
                <Route path="/class" component={Class} />
                <Route path="/classroom" component={Classroom} />
                <Route path="/students" component={Students} />
                <Route path="/waitClass" component={WaitClass} />
              </Switch>     
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
