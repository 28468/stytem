import React,{ useEffect ,useState}  from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Select } from 'antd';
import Editor from 'for-editor';

const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}
function IndexPage(props) {
  useEffect(() => {
    props.subject()
    props.examType()
    props.getQuestions()
  }, []);
  function submit(){
  
  }
const [data,setData] = useState(data)

function changeValue(e){
  
  console.log(e.target.value)
}

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
            <input type="text"  className={styles.inputs}  value={data} onChange={(e)=>{changeValue(e)}} />
          </div>

          <div className={styles.markdow}>
            <p>题目信息</p>
            <Editor  style={{ height: 227 }}/>
          </div>
          <div className={styles.select}>
            <p>请选择考试类型:</p>
            <Select defaultValue="周考一" style={{ width: 200 }} onChange={handleChange}>
               {
                  props.examTypeList.map((item, index) => {
                    return <Option value={item.exam_name} key={index}>{item.exam_name}</Option>
                  })
                }
            </Select>
          </div>
          <div className={styles.select}>
            <p>请选择考试类型:</p>
            <Select defaultValue="JavaScript上" style={{ width: 200 }} onChange={handleChange}>
               {
                  props.getQuestionsList.map((item, index) => {
                    return <Option value={item.questions_type_text} key={index}>{item.questions_type_text}</Option>
                  })
                }
            </Select>
          </div>
          <div className={styles.select}>
            <p>请选择考试类型:</p>
            <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
              {
                  props.subjectList.map((item, index) => {
                    return <Option value={item.subject_text} key={index}>{item.subject_text}</Option>
                  })
                }    
            </Select>
          </div>
          <div className={styles.markdow}>
            <p>答案信息</p>
            <Editor  style={{ height: 227 }}/>
          </div>
          <button className={styles.button} onClick={()=>submit()}>
            提交
          </button>
        </div>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};
const mapStateToProps = state => {
  return { ...state.subject, ...state.examType, ...state.getQuestions,}
}
const mapDispatchToPorps = dispatch => {
  return {
    subject: payload => {
      dispatch({
        type: 'subject/subject',
        payload
      })
    },
    examType: payload => {
      dispatch({
        type: 'examType/examType',
        payload
      })
    },
    getQuestions: payload => {
      dispatch({
        type: 'getQuestions/getQuestions',
        payload
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToPorps)(IndexPage);