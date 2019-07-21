import React, { useEffect,} from "react";

import { connect } from "dva";
import { Form, Icon, Input, Button, Checkbox ,message} from "antd";
import "./IndexPage.scss";

function IndexPage(props) {
  console.log(props);
 
// 判断是否登陆成功
useEffect(() => {
  if (props.isLogin === 1) {
    message.success('登陆成功');
    let path = '/';
    if (props.location.search) {
      path = decodeURIComponent(props.location.search.split('=')[1]);
    }
    props.history.push(path);
  } else if (props.isLogin === 0) {
    message.error('用户名或密码错误');
  }
}, [props.isLogin]);
//处理表单提交
let handleSubmit = () => {
  props.form.validateFields((err, values) => {
    if (!err) {
      props.login({ user_name: values.username, user_pwd: values.password });
    }
  });
};
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

const mapStateToProps = state=>{
  return {...state.login}
}
const mapDispatchToPorps = dispatch=>{
  return {
    login: payload=>{
      dispatch({
        type: 'login/login',
        payload
      })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToPorps)(Form.create()(IndexPage));