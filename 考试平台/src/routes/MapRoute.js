
import React from 'react'
 import { Redirect, Route, Switch } from "dva/router";
const MapRoute = props=>(
    <Switch>
        {
            props.route.map(item=>(
                item.path?(
                    <Route key={item.path} path={item.path} 
                    render={
                        props=>{
                           return <item.component {...props} route={item.children}></item.component>
                        }
                    }>

                    </Route>
                ):(
                    <Redirect key={item.from} {...item}></Redirect>
                )
            ))
        }
    </Switch>
)
export default MapRoute
