import React from "react";
import { Router } from "dva/router";
// import LoginPage from "./pages/login/IndexPage";
// import ListPage from "./pages/index/IndexPage";
import {route,MapRoute} from './routes'
function RouterConfig({ history }) {
  return (
    // <Router history={history}>
    //   <Switch>
    //     <Route path="/login" component={LoginPage} />
    //     <Route path="/" component={ListPage} />    
    //   </Switch>
    // </Router>
    <Router history={history}>
    <MapRoute route={route}></MapRoute>
    </Router>
  );
}

export default RouterConfig;
