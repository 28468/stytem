import React, { useEffect } from 'react';
import { Tabs, Table } from 'antd';
import { connect } from 'dva';

import './index.scss';

const { TabPane } = Tabs;

function Adduser(props) {
  useEffect(() => {
    // /user 添加用户
    //获取身份信息
    props.getUser();
    //用户数据
    props.userUse();
    //获取视图
    props.userelation();
    //获取api接口权限
    props.userauthority();

    props.getIdentityViewy();
  }, [])
  function callback(key) {
    console.log(key);
  }
  
  const columns_user = [
    {
      title: '用户',
      dataIndex: 'user_name',
      key:'user_name'
    },
    {
      title: '密码',
      dataIndex: 'user_id',
      key:'user_id'
    },
    {
      title: '身份',
      dataIndex: 'identity_text',
      key:'identity_text'
    }
  ];
  const columns_identity = [
    {
      title: 'Name',
      dataIndex: 'identity_text',
      key:'identity_text'
    }
  ];
  const columns_apiauthority = [
    {
      title: 'API权限名称',
      dataIndex: 'api_authority_text',
      key:'api_authority_text'
    },
    {
      title: 'API权限网址',
      dataIndex: 'api_authority_url',
      key:'api_authority_url'
    },
    {
      title: 'API权限方法',
      dataIndex: 'api_authority_method',
      key:'api_authority_method'
    }
  ];
  const columns_idApi = [
    {
      title: '身份名称',
      dataIndex: 'identity_text',
      key:'identity_text'
    },
    {
      title: 'API权限名称',
      dataIndex: 'api_authority_text',
      key:'api_authority_text'
    },
    {
      title: 'API权限网址',
      dataIndex: 'api_authority_url',
      key:'api_authority_url'
    },
    {
      title: 'API权限方法',
      dataIndex: 'api_authority_method',
      key:'api_authority_method'
    }
  ]
  const columns_viewAuthority = [
    {
      title: '视图权限名称',
      dataIndex: 'view_authority_text',
      key:'view_authority_text'
    },
    {
      title: '视图ID',
      dataIndex: 'view_id',
      key:'view_id'
    }
  ]
  const columns_idview = [
    {
      title: '身份',
      dataIndex: 'identity_text',
      key: 'identity_text'
    },
    {
      title: '视图名称',
      dataIndex: 'view_authority_text',
      key: 'view_authority_text'
    },
    {
      title: '视图ID',
      dataIndex: 'view_id',
      key: 'view_id'
    }
  ]

  return (
    <div className="content">
      <h1 className="title">用户展示</h1>
      <Tabs  onChange={callback} type="card">
      <TabPane tab="用户数据" key="1">
          <h2>用户数据</h2>
          <Table  columns={columns_user} dataSource={props.userData.userdataList} />
        </TabPane>
        <TabPane tab="身份数据" key="2">
          <h2>身份数据</h2>
          <Table columns={columns_identity} dataSource={props.userData.userIdentityList} />
        </TabPane>
        <TabPane tab="api接口权限" key="3">
          <h2>api接口权限</h2>
          <Table columns={columns_apiauthority} dataSource={props.userData.idviewList} />
        </TabPane>
        <TabPane tab="身份和api接口权限" key="4">
          <h2>身份和api接口权限</h2>
          <Table columns={columns_idApi} dataSource={props.userData.idviewList} />
        </TabPane>
        <TabPane tab="视图接口权限" key="5">
          <h2>视图接口权限</h2>
          <Table columns={columns_viewAuthority} dataSource={props.userData.viewAuthorityList} />
        </TabPane>
        <TabPane tab="身份和视图权限关系" key="6">
          <h2>身份和视图权限关系</h2>
          <Table columns={columns_idview} dataSource={props.userData.getIdentityViews} />
        </TabPane>
      </Tabs>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    ...state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    //添加用户
    Adduser(payload) {
      console.log(payload)
      dispatch({
        type: "userData/Adduser",
        payload
      })
    },
    // 获取身份信息/user/identity
    getUser(payload) {
      dispatch({
        type: "userData/getUsera",
        payload
      })
    },
    //用户数据
    userUse(payload) {
      dispatch({
        type: "userData/getUserDatas",
           payload
      })
    },
    Addthea(payload) {
      console.log(payload)
      dispatch({
        type: "userData/Addthe",
        payload
      })
    },//添加api
    Addapii(payload) {
      console.log(payload)
      dispatch({
        type: "userData/Addapi",
        payload
      })
    },
    ///user/identity_view_authority_relation
    //获取视图
    userelation(payload) {
      dispatch({
        type: "userData/userelation",
        payload
      })
    },
    ///user/authorityView/edit 添加视图权限
    Addedit(payload) {
      console.log(payload)
      dispatch({
        type: "userData/Addedita",
        payload
      })
    },
    ///user/api_authority获取api接口权限
    userauthority(payload) {
      dispatch({
        type: "userData/userauthority",
        payload
      })
    },
    // /user/setIdentityApi 展示api接口权限数据
    getIdviews(payload) {
      dispatch({
        type: "userData/setIdentityApi",
        payload
      })
    },
    ///user/setIdentityView 给身份设置视图权限
    usersetIdentityView(payload) {
      dispatch({
        type: "userData/setIdentityView",
        payload
      })
    },
    ///user/setIdentityView 展示身份和视图权限关系
    getIdentityViewy(payload) {
      dispatch({
        type: "userData/getIdentityViewy",
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adduser)
