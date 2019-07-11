import HomePage from '../pages/HomePage/index'
import Login from '../pages/Login/login'
import TestQuestions from '../pages/HomePage/TestQuestions'
import Examination from '../pages/HomePage/Examination'
import Reading from '../pages/HomePage/Reading'
import Class from '../pages/HomePage/Class'
import User from '../pages/HomePage/User'
import Waiting from '../pages/HomePage/Waiting'
const route = [
   
    {
        path:'/login',
        component:Login,
    },
    {
        path:'/',
        component:HomePage, 
        children:[
            {
                path:'/testQuestions',
                component:TestQuestions,   
            },
            {
                path:'/examination',
                component:Examination,   
            },{
                path:'/reading',
                component:Reading,   
            },{
                path:'/class',
                component:Class,   
            },{
                path:'/user',
                component:User,   
            },{
                path:'/Waiting',
                component:Waiting,   
            }
        ]   
    }
]
export default route;