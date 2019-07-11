import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Select } from 'antd';
import Editor from 'for-editor';

const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}
function IndexPage(props) {
  console.log(props)
  return (
    <div className={styles.wrap}>
      <div className={styles.top}>
        <h2>添加试题</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.pading_show}>
          <div className={styles.topTitle}>
            <p>题目信息</p>
            <p>题干</p>
            <input type="text" placeholder="机器人归位" className={styles.inputs} />
          </div>

          <div className={styles.markdow}>
            <p>题目信息</p>
            <Editor  style={{ height: 227 }}/>
          </div>
          <div className={styles.select}>
            <p>请选择考试类型:</p>
            <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
              <Option value="lucy">周考一</Option>
              <Option value="lucy">周考二</Option>
              <Option value="jack">周考三</Option>
              <Option value="lucy">月考</Option>
            </Select>
          </div>
          <div className={styles.select}>
            <p>请选择考试类型:</p>
            <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
              <Option value="lucy">javaScrip的上</Option>
              <Option value="lucy">javaScrip的下</Option>
              <Option value="jack">移动端开发</Option>
              <Option value="lucy">节点基础</Option>
              <Option value="jack">组件化开发(VUE)</Option>
              <Option value="lucy">渐进式开发(反应)</Option>
              <Option value="jack">项目实战</Option>
            </Select>
          </div>
          <div className={styles.select}>
            <p>请选择考试类型:</p>
            <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
              <Option value="lucy">简答题</Option>
              <Option value="lucy">阅读简答题</Option>
              <Option value="jack">代码补全</Option>
              <Option value="lucy">修改错误</Option>
              <Option value="jack">手写代码</Option>
            </Select>
          </div>

          <div className={styles.markdow}>
            <p>答案信息</p>
            <Editor  style={{ height: 227 }}/>
          </div>
          <button className={styles.button}>
            提交
          </button>
        </div>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
