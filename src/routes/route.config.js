import HomePage from '../pages/HomePage/index'
import Login from '../pages/Login/login'

const route = [
   
    {
        path:'/login',
        component:Login,
    },
    {
        path:'/',
        component:HomePage,    
    }
]
export default route;