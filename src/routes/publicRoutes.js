import $ from 'jquery';
import React, { Component, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Progress from '../theme/progress';
import Navigation from '../theme/navigation';
import TopHeader from '../theme/topHeader';
import Footer from '../theme/footer';
import { correctHeight, detectBody } from '../theme/helpers/helpers';
import WaitingComponent from '../theme/waiting';

const Dashboard = lazy(() => import('../components/containers/dashboard'));
const NotFound = lazy(() => import('../components/common/notFound'));

export default class AppRoutes extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      match: props.match,
    };
  }

  componentDidMount() {
    $(window).bind('load resize', () => {
      correctHeight();
      detectBody();
    });
  }

  render() {
    return (
      <div id="wrapper" className="app">
        <Progress />
        <Navigation />
        <div id="page-wrapper" className="gray-bg">
          <TopHeader />
          <Switch>
            <Route path="/dashboard" exact component={WaitingComponent(Dashboard)} />
            <Route path="/permissions" exact component={WaitingComponent(Permissions)} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

