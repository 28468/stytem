import React from 'react';
import { connect } from 'dva';
import styles from './index.css';

function IndexPage(props) {
  console.log(props)
  return (
    <div className={styles.normal}>
      添加用户
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
