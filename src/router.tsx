import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Root from './root';
import Resume from './resume';
import ROUTER from './common/constants/router';

function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route path={ROUTER.root} exact>
          <Root />
        </Route>
        <Route path={ROUTER.resume} exact>
          <Resume />
        </Route>
      </Switch>
      {/* 重定向到首页 */}
      <Redirect to={ROUTER.root}></Redirect>
    </HashRouter>
  );
}

export default Router;
