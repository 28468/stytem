import dva from 'dva';
import './index.css';
import 'antd/dist/antd.css'
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/login').default);
app.model(require('./models/QuestionsType').default);//获取所有的试题类型
app.model(require('./models/subject').default);//获取所有的课程
app.model(require('./models/examType').default);//获取所有考试类型
app.model(require('./models/question').default);//获取所有的试题
app.model(require('./models/addType').default);//添加试题类型
app.model(require('./models/addQuestion').default);//添加试题
app.model(require('./models/find').default);//按条件获取试题
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
