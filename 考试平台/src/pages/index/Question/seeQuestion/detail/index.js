import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.css';

function IndexPage(props) {
  useEffect(() => {
    props.question()
  }, []);
  let list = []
  props.questionList.forEach((item, index) => {
    if (item.questions_id == props.match.params.id) {
      list.push(item)
    }
  })
  console.log(list)
  return (

    <div className={styles.wraps}>
      <div className={styles.tops}>
        <h2>试题详情</h2>
      </div>
    
        {
          list.map((item, index) => {
            return <div className={styles.contents} key={index}>
              <div className={styles.listLeft} >
                <div className={styles.pading_show}>
                  <div className={styles.topTitle}>
                    <p>出题人:{item.user_name}</p>
                    <p>题目信息</p>
                  </div>
                  <div className={styles.setData}>
                    <span>{item.questions_type_text}</span>
                    <span>{item.subject_text}</span>
                    <span>{item.exam_name}</span>
                  </div>
                  <div>
                    <p>{item.title}</p>
                    <span>{item.questions_stem}</span>
                  </div>
                

                </div>
              </div>
              <div className={styles.listRight}>
                <div className={styles.pading_show}>
                  <p>
                    答案信息
                    </p>
                  <p>
                  {item.questions_answer}
                  </p>
                  
                </div>
              </div>

            </div>
          })
        }

      //


    </div>
  );
}

IndexPage.propTypes = {
};
const mapStateToProps = state => {
  return { ...state.question }
}
const mapDispatchToPorps = dispatch => {
  return {
    question: payload => {
      dispatch({
        type: 'question/question',
        payload
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToPorps)(IndexPage)