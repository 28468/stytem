import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.wrap}>
    <div className={styles.top}>
      <h2>试题分类</h2>
    </div>
    <div className={styles.content}>
        <div className={styles.btn}><p>+ 添加类型</p></div>
        <ul className={styles.uls}>
          <li className={styles.title}> <span>类型</span> <span>类型名称</span> <span>操作</span> </li>
          <li><span>类型</span> <span>简单题</span> <span></span> </li>
          <li><span>类型</span> <span>代码阅读题</span> <span></span> </li>
          <li><span>类型</span> <span>代码补全</span> <span></span> </li>
          <li><span>类型</span> <span>手写代码</span> <span></span> </li>
        </ul>
    </div>
</div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
