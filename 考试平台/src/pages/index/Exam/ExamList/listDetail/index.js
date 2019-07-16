import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.css';

function IndexPage(props) {

    useEffect(() => {
     props.getQuestion(props.location.search.slice(4))
      }, []) 
      console.log(props.examDetailList.questions)
    return (
        <div className={styles.normal}>
            <div className={styles.head}>
                <h2>试卷详情</h2>
                <div className={styles.content}>
                    <h3>{props.createTestList.title}</h3>

                    <div className={styles.item}>
                        <div className={styles.itemTop}>          
                        </div>
                        {
								props.examDetailList.questions ? (
									props.examDetailList.questions.map((item, index) => {
										return <div className={styles.item} key={index}>
													<div className={styles.itemTop}>
													<p>{item.title}</p>
											
													</div>
													<span>{item.questions_stem}</span>
									        	</div>

									})
								  ) : <div className={styles.no}>没有数据</div>

							}
                    </div>



                </div>

            </div>
        </div>
    );
}

IndexPage.propTypes = {
};
const mapStateToProps = state => {
    return {  ...state.createExam }
}
const mapDispatchToPorps = dispatch => {
    return {
        // 按条件获取试题
           getQuestion(payload) {
        dispatch({
          type: "createExam/getQuestion",
          payload
        })
      },
    }
}
export default connect(mapStateToProps, mapDispatchToPorps)(IndexPage);