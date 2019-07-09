import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './login.scss';
function Login(props) {
  console.log('props...', props);
  // 模拟componentDidMount
  useEffect(() => {
    console.log('执行useEffect');
    props.login({ user_name: 'chenmanjie', user_pwd: 'Chenmanjie123!' });
  }, [])

  // 处理表单提交
  let handleSubmit = () => {
    props.form.validateFields((err, values) => {
      if (!err) {
        props.login({ user_name: values.username, user_pwd: values.password });
      }
    });
  }


  const { getFieldDecorator } = props.form;
  return (
    <div className={styles.wrap}>
      <Form className="login-form" onSubmit={handleSubmit}>
        <Form.Item className="inputOne">

          {getFieldDecorator('username', {
            validateTrigger: 'onBlur',
            rules: [
              { required: true, message: 'Please input your username!' },
              { min: 6, max: 15, message: 'Please input your correct username!' }
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入用户名"
            />
          )}
        </Form.Item>

        <Form.Item className="inputTwo">
          {getFieldDecorator('password', {
            validateTrigger: 'onBlur',
            rules: [
              { required: true, message: 'Please input your password!' },
              { pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!#@*&.]).*$/, message: 'Please input your correct password!' }
            ],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码"
            />
          )}

        </Form.Item>
        <Form.Item>
          <div className="title">
            <Checkbox>记住密码</Checkbox>
            <a className="login-form-forgot" href="">
              忘记密码
        </a>
          </div>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
        </Button>
        </Form.Item>
      </Form>

    </div>

  )
}

Login.propTypes = {
};
const mapStateToProps = state => {
  return { ...state.login }
}
const mapDispatchToPorps = dispatch => {
  return {
    login: payload => {
      dispatch({
        type: 'login/login',
        payload
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToPorps)(Form.create()(Login));
