import React, { useEffect, useState } from "react";
import { routerRedux } from 'dva/router'
import { connect } from "dva";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import styles from "./IndexPage.scss";

function IndexPage(props) {
  console.log(props);
  useEffect(() => {
    console.log("执行useEffect");
    props.login({ user_name: "chenmanjie", user_pwd: "Chenmanjie123!" });
  }, []);

  let handleSubmit = () => {
    props.form.validateFields((err, values) => {
      if (!err) {
        props.login({ user_name: values.username, user_pwd: values.password})
        props.history.push("/")

        console.log(props)
        console.log('Received values of form: ', values);
      }

    });
  }
  const { getFieldDecorator } = props.form;
  return (
    <div className="login-page">
      <Form className="login-form" onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator("username", {
            validateTrigger: "onBlur",
            rules: [
              { required: true, message: "Please input your username!" },
              { min: 6, max: 15, message: "Please input your correct username!" },
            ]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
              className="login-input"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            validateTrigger: "onBlur",
            rules: [
              { required: true, message: "Please input your password!" },
              { pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!#@*&.]).*$/, message: 'Please input your Password!' }
            ]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
              className="login-input-two"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Checkbox className="remember">记住密码</Checkbox>
          <a className="login-form-forgot" href="">
            忘记密码
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

IndexPage.propTypes = {};

const mapStateToProps = state => {
  return { ...state.login };
};
const mapDispatchToProps = dispatch => {
  return {
    login: payload => {
      dispatch({
        type: "login/login",
        payload
      });
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(IndexPage))
