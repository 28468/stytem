import AddPage from "../pages/index/Question/addQuestion/IndexPage";
import ClassPage from "../pages/index/Question/classQuestion/IndexPage";
import SeePage from "../pages/index/Question/seeQuestion/IndexPage";
import AddUser from '../pages/index/User/addUser'
import UserShow from '../pages/index/User/userShow'
import AddExam from '../pages/index/Exam/addExam'
import ExamList from '../pages/index/Exam/ExamList'
import Class from '../pages/index/Class/Class'
import Classroom from '../pages/index/Class/Classroom'
import Students from '../pages/index/Class/Students'
import WaitClass from '../pages/index/Read/waitClass'
import Detail from '../pages/index/Question/seeQuestion/detail'
import Compile from '../pages/index/Question/seeQuestion/compile/IndexPage'
import LoginPage from "../pages/login/IndexPage";
import ListPage from "../pages/index/IndexPage";
import addExamdetail from '../pages/index/Exam/addExam/addExamdetail'
import ListDetail from '../pages/index/Exam/ExamList/listDetail/index'
import Errors from '../pages/Other/403'
import Errorss from '../pages/Other/404'
const route = [
    {
        path:'/login',
        view_id: "login",
        component:LoginPage,
    },
    {
        path:'/403',
        component:Errors,
    },
    {
        path:'/404',
        component:Errorss,
    },
    {
        path:'/',
        view_id: "main",
        component:ListPage,
        children:[
            {
                path:'/addQuestion',
                view_id: "main-addQuestions",
                component:AddPage,
                
            },
            {
                path:'/questionClass',
                view_id: "main-questionsType",
                component:ClassPage,
            },
            {
                path:'/lookQuestion',
                view_id: "main-watchQuestions",
                component:SeePage
            },
            
            {
                path:'/addUser',
                view_id: "main-addUser",
                component:AddUser
            }
            ,
            {
                path:'/userShow',
                view_id: "main-showUser",
                component:UserShow,
            },
            {
                path:'/addExam',
                view_id: "main-addExam",
                component:AddExam
            },
            {
                path:'/addExams/addExamdetail',
                view_id: "main-menu",
                component:addExamdetail
            },
            {
                path:'/examList',
                view_id: "main-examList",
                component:ExamList
            }
            ,
            {
                path:'/class',
                view_id: "main-grade",
                component:Class
            },
            
            {
                path:'/classroom',
                view_id: "main-room",
                component:Classroom
            },
            {
                path:'/students',
                view_id: "main-student",
                component:Students
            },
            
            {
                path:'/waitClass',
                component:WaitClass
            },
            {
                path:'/detail/:id',
                view_id: "main-questionsDetail",
                component:Detail
            },
            {
                path:"/compile/:id",
                view_id: "main-editQuestions",
                component:Compile
            },
            {
                path:'/listDetail',
                view_id: "main-examDetail",
                component:ListDetail
            }
        ]
    }
]
export default route;