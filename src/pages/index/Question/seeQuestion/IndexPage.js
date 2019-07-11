import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Select } from 'antd';
const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}
function IndexPage(props) {
  const typeList = [
    { title: "JavaScript上", flag: true },
    { title: "JavaScript下", flag: false },
    { title: "模块化开发", flag: false },
    { title: "移动端开发", flag: false },
    { title: "node基础", flag: false },
    { title: "组件化开发", flag: false },
    { title: "渐进式开发", flag: false },
    { title: "项目实战", flag: false },
    { title: "JavaScript高级", flag: false },
    { title: "node高级", flag: false },
  ]
  useEffect(() => {
    console.log(props)
  }, []);
  return (
    <div className={styles.wrap}>
      <div className={styles.top}>
        <h2>查看试题</h2>
      </div>
      <div className={styles.head}>
        <div className={styles.radio}>
          <p>课程类型</p>
          <div>
            <span>All</span>
            {
              typeList.map((item, index) => {
                return <span key={index} className={item.flag ? styles.active : ''} >{item.title}</span>
              })
            }
          </div>
        </div>
        <div className={styles.select}>
          <div>
            <p>考试类型</p>
            <div>
              <Select defaultValue="lucy" style={{ width: 220 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
          </div>
          <div>
            <p>题目类型</p>
            <div>
              <Select defaultValue="lucy" style={{ width: 220 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
          </div>
          <div className={styles.find}>
            <p>查询</p>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.box}>
           <p>机器人归位</p>
           <div>
             <span>代码补全</span>
             <span>JavaScript上</span>
             <span>周考一</span>
           </div>
           <p className={styles.name}>dingshaoshan发布</p>
           <p className={styles.pos}>编辑</p>
        </div>
        <div className={styles.box}>
           <p>机器人归位</p>
           <div>
             <span>代码补全</span>
             <span>JavaScript上</span>
             <span>周考一</span>
           </div>
           <p className={styles.name}>dingshaoshan发布</p>
           <p className={styles.pos}>编辑</p>
        </div>
        <div className={styles.box}>
           <p>机器人归位</p>
           <div>
             <span>代码补全</span>
             <span>JavaScript上</span>
             <span>周考一</span>
           </div>
           <p className={styles.name}>dingshaoshan发布</p>
           <p className={styles.pos}>编辑</p>
        </div>
      </div>
    </div>

  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
