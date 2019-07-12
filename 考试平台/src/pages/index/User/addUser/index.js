import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import { Select } from 'antd';
import { Link } from "dva/router";
const { Option } = Select;
function IndexPage(props) {
  console.log(props)
  return (
    <div className={styles.normal}>
      <div className={styles.top}>
        <h2>添加用户</h2>
      </div>
      <div className={styles.list_box}>
      <div className={styles.list_child}>
      <div  className={styles.list_childs}>
          <span>添加用户</span>
          <span>更新用户</span>
        </div>
        <div className={styles.list_input}>
          <input placeholder="请输入用户名" type="text"/>
          <input placeholder="请输入密码" type="text"/>
          <Select className={styles.selects} defaultValue="周考一" style={{ width: 150 }}>
              <Option value="">周考一</Option>
            </Select>
        </div>
        <div className={styles.buttonBtn}>
          <button  className={styles.button}>确定</button> <button  className={styles.button_server}>重置</button>
        </div>
      </div>
     
      </div>
      <div className={styles.list_box}>
      <div className={styles.list_child}>
      <div  className={styles.list_childs}>
          <span>添加用户</span>

        </div>
        <div className={styles.list_input}>
          <input placeholder="请输入用户名" type="text"/>
          <input placeholder="请输入密码" type="text"/>
          <Select className={styles.selects} defaultValue="周考一" style={{ width: 150 }}>
              <Option value="">周考一</Option>
            </Select>
        </div>
        <div className={styles.buttonBtn}>
          <button  className={styles.button}>确定</button> <button  className={styles.button_server}>重置</button>
        </div>
      </div>
     
      </div>
      <div className={styles.list_box}>
      <div className={styles.list_child}>
      <div  className={styles.list_childs}>
          <span>添加用户</span>
          <span>更新用户</span>
        </div>
        <div className={styles.list_input}>
          <input placeholder="请输入用户名" type="text"/>
          <input placeholder="请输入密码" type="text"/>
          <Select className={styles.selects} defaultValue="周考一" style={{ width: 150 }}>
              <Option value="">周考一</Option>
            </Select>
        </div>
        <div className={styles.buttonBtn}>
          <button  className={styles.button}>确定</button> <button  className={styles.button_server}>重置</button>
        </div>
      </div>
     
      </div>
      <div className={styles.list_box}>
      <div className={styles.list_child}>
      <div  className={styles.list_childs}>
          <span>添加用户</span>
          <span>更新用户</span>
        </div>
        <div className={styles.list_input}>
          <input placeholder="请输入用户名" type="text"/>
          <input placeholder="请输入密码" type="text"/>
          <Select className={styles.selects} defaultValue="周考一" style={{ width: 150 }}>
              <Option value="">周考一</Option>
            </Select>
        </div>
        <div className={styles.buttonBtn}>
          <button  className={styles.button}>确定</button> <button  className={styles.button_server}>重置</button>
        </div>
      </div>
     
      </div>
      <div className={styles.list_box}>
      <div className={styles.list_child}>
      <div  className={styles.list_childs}>
          <span>添加用户</span>
          <span>更新用户</span>
        </div>
        <div className={styles.list_input}>
          <input placeholder="请输入用户名" type="text"/>
          <input placeholder="请输入密码" type="text"/>
          <Select className={styles.selects} defaultValue="周考一" style={{ width: 150 }}>
              <Option value="">周考一</Option>
            </Select>
        </div>
        <div className={styles.buttonBtn}>
          <button  className={styles.button}>确定</button> <button  className={styles.button_server}>重置</button>
        </div>
      </div>
     
      </div>
      <div className={styles.list_box}>
      <div className={styles.list_child}>
      <div  className={styles.list_childs}>
          <span>添加用户</span>
          <span>更新用户</span>
        </div>
        <div className={styles.list_input}>
          <input placeholder="请输入用户名" type="text"/>
          <input placeholder="请输入密码" type="text"/>
          <Select className={styles.selects} defaultValue="周考一" style={{ width: 150 }}>
              <Option value="">周考一</Option>
            </Select>
        </div>
        <div className={styles.buttonBtn}>
          <button  className={styles.button}>确定</button> <button  className={styles.button_server}>重置</button>
        </div>
      </div>
     
      </div>
    </div>
  );
}
IndexPage.propTypes = {
};

export default connect()(IndexPage);
