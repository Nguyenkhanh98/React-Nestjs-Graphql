import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
// import PublicRoute from '../components/common/publicRoute';
import WaitingComponent from '../theme/waiting';

import privateRoutes from './privateRoutes';
import publicRoutes from './publicRoutes';

import '../assests/dependencies';

const Login = loadable(() => import('../components/common/login'));

const PublicRoute = loadable(() => import('../components/common/publicRoute'));
const PrivateRoute = loadable(() => import('../components/common/privateRoute'));


// const privateRoutes = lazy(() => import('./privateRoutes'));

export default function Routes(props) {
  return (
    <div>
      <Switch>
        <Route path="/login" component={WaitingComponent(Login)} />
        {/* <PublicRoute path="/" component={WaitingComponent(publicRoutes)} /> */}
        <PrivateRoute path="/" component={WaitingComponent(privateRoutes)} />

      </Switch>
    </div>
  );
}
