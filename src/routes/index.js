import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import PublicRoute from '../components/common/publicRoute';
import WaitingComponent from '../theme/waiting';

import privateRoutes from './privateRoutes';
import publicRoutes from './publicRoutes';

import '../assests/dependencies';

const Login = lazy(() => import('../components/common/login'));
// const privateRoutes = lazy(() => import('./privateRoutes'));

export default function Routes(props) {
  console.log(props);

  return (
    <div>
      <Switch>
        <PublicRoute path="/login" component={WaitingComponent(Login)} />
        <PublicRoute path="/" component={WaitingComponent(publicRoutes)} />
      </Switch>
    </div>
  );
}
