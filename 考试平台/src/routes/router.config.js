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
        component:ListPage,
        children:[
            {
                path:'/addQuestion',
                component:AddPage,
                
            },
            {
                path:'/questionClass',
                component:ClassPage,
            },
            {
                path:'/lookQuestion',
                component:SeePage
            },
            
            {
                path:'/addUser',
                component:AddUser
            }
            ,
            {
                path:'/userShow',
                component:UserShow,
            },
            {
                path:'/addExam',
                component:AddExam
            },
            {
                path:'/addExams/addExamdetail',
                component:addExamdetail
            },
            {
                path:'/examList',
                component:ExamList
            }
            ,
            {
                path:'/class',
                component:Class
            },
            
            {
                path:'/classroom',
                component:Classroom
            },
            {
                path:'/students',
                component:Students
            },
            
            {
                path:'/waitClass',
                component:WaitClass
            },
            {
                path:'/detail/:id',
                component:Detail
            },
            {
                path:"/compile/:id",
                component:Compile
            },
            {
                path:'/listDetail',
                component:ListDetail
            }
        ]
    }
]
export default route;