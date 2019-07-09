import React from 'react';
import { Router, Switch } from 'dva/router';
import {route,MapRoute} from './routes'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <MapRoute route={route}></MapRoute>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
