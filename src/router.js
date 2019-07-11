import React from "react";
import { Router, Route, Switch,Redirect } from "dva/router";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/login/IndexPage";
import ListPage from "./pages/index/IndexPage";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={ListPage} />
       
      </Switch>
    </Router>
  );
}

export default RouterConfig;
